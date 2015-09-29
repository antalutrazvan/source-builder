var gulp = require('gulp'),
  gutil = require('gulp-util'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  sourcemaps = require('gulp-sourcemaps'),
  babel = require('gulp-babel'),
  //My modules
  cvars = require('./cvars');

build_js = function() {
  return gulp.src(cvars.src_js)
    .pipe(gutil.env.es6 === true ? babel() : gutil.noop())
    .pipe(gutil.env.production === true ? sourcemaps.init() : gutil.noop())
    .pipe(concat('bundle.js'))
    //only uglify if gulp is ran with '--type production'
    .pipe(gutil.env.production === true ? uglify() : gutil.noop())
    .pipe(gutil.env.production === true ?  sourcemaps.write() : gutil.noop())
    .pipe(gulp.dest(cvars.dest));
};

module.exports = build_js;
