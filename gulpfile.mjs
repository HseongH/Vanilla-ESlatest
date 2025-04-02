import gulp from "gulp";
import postcss from "gulp-postcss";

gulp.task("css", () => {
  return gulp
    .src("src/style.css")
    .pipe(postcss())
    .pipe(gulp.dest("dist/assets"));
});

gulp.task("default", gulp.series("css"));
