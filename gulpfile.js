var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("react", function(){
  gulp.src("javascripts/**")
  .pipe(babel({
    compact: false,
    presets: ["react"]
  }))
  .pipe(gulp.dest("wwwroot/js/"));
});

gulp.task("default", ["react"]);