组件初始化md  

src下的 `index.ts`  
`index.ts` 导入src下所有组件，并通过install方法遍历组件，执行组件的注册函数    
`src/index.ts` 导入src下所有组件并导出  
`src/*/index.ts` 具体组件，提供install注册函数  

vite打包配置  
`pnpm add vite @vitejs/plugin-vue -D -w` 组件目录下安装vite及vue解析插件  
组件目录下创建vite配置文件 `vite.config.ts`  
package.json 文件中新增打包命令  
`pnpm add vite-plugin-dts@1.4.1 -D -w` 保证ts的提示功能，打包库中加入(.d.ts)。
