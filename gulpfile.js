const { src, dest } = require("gulp");
const { watch } = require("browser-sync");
const browserSync = require("browser-sync");
const { series } = require("gulp");
const less = require("gulp-less");
const autoprefixer = require("gulp-autoprefixer");
const lessTask = () => {
  return src("src/style/*.less")
    .pipe(less())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["> 1%", "last 2 versions"],
        cascade: false, //  是否美化属性值
      })
    )
    .pipe(dest("dist/style"));
};
//页面刷新
const reloadTask = () => {
  browserSync.reload();
};

const browserTask = () => {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  watch("./*.html", series(reloadTask));
  //监听样式更新触发两个任务
  watch("src/style/*", series(lessTask, reloadTask));
};

exports.default = browserTask;
