组件库基本开发路径  

项目初始化  
`npm install pnpm -g` 创建vite + vue3组件库，第一步全局安装pnpm  
根目录下执行 `pnpm init` 初始化工程  
根目录下创建 `pnpm-workspace.yaml` 文件，管理本地包  
`pnpm add vue@next typescript less -D -w` 安装ts  
根目录执行 `npx tsc --init` 初始化ts  

主文件初始化  
创建 `main` 文件夹 存储项目文件  
    创建 `main.ts（入口文件）` ， `app.vue（主组件）` ， `index.html（页面模板）`  
`pnpm add vite @vitejs/plugin-vue -D` 安装vite @vitejs/plugin-vue(用于解析vue文件)  
`main` 目录下创建 `vite.config.ts` 文件，打包配置  
`main` 目录下 package.json 文件新增 dev 命令  
`main` 文件目录下创建 `vue-shim.d.ts` 用于ts识别vue文件  

组件文件初始化  
创建 `package` 文件夹 存储组件文件  
`package` 文件夹 下次创建 `components` 和 `utils` 文件夹 分别存储组件和公共方法  
`pnpm add @vue/runtime-core -D -w` 安装组件提示，`components`的src中新增 `components.d.ts`  
`pnpm add unplugin-vue-define-options  -D -w` 组件命名优化  

前端流程化控制工具gulp  
`npm install --global gulp-cli` 全局安装gulp脚手架  
新建文件夹`gulpdemo`  
执行 `npm init -y`  
这个项目下安装本地依赖gulp `npm install gulp -D`  
`"build:xsDesign": "gulp -f packages/components/script/build/index.ts"` 执行build文件下的打包命令  

自动发布
`pnpm add release-it -D -w` 安装release-it


