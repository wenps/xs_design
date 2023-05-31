import fs from "fs";
import { resolve } from "path";
import { pkgPath } from "./paths";
// 注意这里因为打包后的 xsDesign 包是我们最终要发布的包,所以我们需要将package.json和README.md保留下来


//保留的文件
const stayFile = ["package.json", "README.md"];

const delPath = async (path: string) => {
  let files: string[] = [];

  // 判断目录是否存在
  if (fs.existsSync(path)) {
    // 返回一个包含“指定目录下所有文件名称”的数组对象
    files = fs.readdirSync(path);

    files.forEach(async (file) => {
      let curPath = resolve(path, file); // 解析为绝对路径

      if (fs.statSync(curPath).isDirectory()) {
        // 目录递归删除
        // recurse
        if (file != "node_modules") await delPath(curPath);
      } else {
        // 删除文件
        // delete file
        if (!stayFile.includes(file)) {
          fs.unlinkSync(curPath);
        }
      }
    });

    if (path != `${pkgPath}/xsDesign`) fs.rmdirSync(path);
  }
};
export default delPath;
