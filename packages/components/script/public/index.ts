// 创建 public文件夹 用于发布任务
import run from "../utils/run";
import { pkgPath } from "../utils/paths";
import { series } from "gulp";
export const publishComponent = async () => {
  run("release-it", `${pkgPath}/xsDesign`);
};
export default series(async () => publishComponent());
