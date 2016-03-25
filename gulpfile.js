var gulp = require('gulp');
var babel = require('gulp-babel');
var webserver = require('gulp-webserver');
var sourcemaps = require("gulp-sourcemaps");
var concat = require("gulp-concat");


gulp.task('default',function(){
  console.log("lets test this")
  return gulp.src("src/**/*.js")
             .pipe(sourcemaps.init())
             .pipe(babel())
             .pipe(concat("all.js"))
             .pipe(sourcemaps.write("."))
             .pipe(gulp.dest("dist"));
});

gulp.task('serve',function(){
  return gulp.src('dist')
             .pipe(webserver({
              livereload: true,
              open: true
              }));
});
