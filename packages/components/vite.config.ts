import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import DefineOptions from "unplugin-vue-define-options/vite";
export default defineConfig({
  build: {
    //打包文件目录
    outDir: "es",
    //压缩
    //minify: false,
    rollupOptions: {
      //忽略打包vue文件, less
      external: ["vue", /\.less/],
      input: ["index.ts"],
      output: [
        {
          //打包格式
          format: "es",
          //打包后文件名
          entryFileNames: "[name].mjs",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "../xsDesign/es",
        },
        {
          //打包格式
          format: "cjs",
          //打包后文件名
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "../xsDesign/lib",
        },
      ],
    },
    lib: {
      entry: "./index.ts",
    },
  },
  plugins: [
    vue(),
    DefineOptions(),
    dts({
      entryRoot: "./src",
      outputDir: ["../xsDesign/es/src", "../xsDesign/lib/src"],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: "../../tsconfig.json",
    }),
    {
      name: "style",
      generateBundle(config, bundle) {
        //这里可以获取打包后的文件目录以及代码code
        const keys = Object.keys(bundle);

        for (const key of keys) {
          const bundler: any = bundle[key as any];
          //rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件

          this.emitFile({
            type: "asset",
            fileName: key, //文件名名不变
            source: bundler.code.replace(/\.less/g, ".css"),
          });
        }
      },
    },
  ],
});

// 此时的所有样式文件还是会统一打包到 style.css 中,还是不能进行样式的按需加载,所以接下来我们将让 vite 不打包样式文件,样式文件后续单独进行打包。
// export default defineConfig({
//   build: {
//     //打包文件目录
//     outDir: "es",
//     //压缩
//     //minify: false,
//     rollupOptions: {
//       //忽略打包vue文件
//       external: ["vue"],
//       input: ["index.ts"],
//       output: [
//         {
//           //打包格式
//           format: "es",
//           //打包后文件名
//           entryFileNames: "[name].mjs",
//           //让打包目录和我们目录对应
//           preserveModules: true,
//           exports: "named",
//           //配置打包根目录
//           dir: "../xsDesign/es",
//         },
//         {
//           //打包格式
//           format: "cjs",
//           //打包后文件名
//           entryFileNames: "[name].js",
//           //让打包目录和我们目录对应
//           preserveModules: true,
//           exports: "named",
//           //配置打包根目录
//           dir: "../xsDesign/lib",
//         },
//       ],
//     },
//     lib: {
//       entry: "./index.ts",
//     },
//   },
//   plugins: [vue()],
// });

// 这种打包方式最终会将整个组件库打包到一个文件中,并且样式文件也不能按需加载
// export default defineConfig({
//   build: {
//     //打包后文件目录
//     outDir: "es",
//     //压缩
//     minify: false,
//     rollupOptions: {
//       //忽略打包vue文件
//       external: ["vue"],
//       //input: ["index.ts"],
//       output: {
//         globals: {
//           vue: "Vue",
//         },
//         dir: "dist",
//       },
//     },
//     lib: {
//       entry: "./index.ts",
//       name: "xsDesign",
//       fileName: "xsDesign",
//       formats: ["es", "umd", "cjs"],
//     },
//   },
//   plugins: [vue()],
// });
