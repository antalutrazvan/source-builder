var gulp = require('gulp'),
  gutil = require('gulp-util'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  sourcemaps = require('gulp-sourcemaps'),
  babel = require('gulp-babel'),
  //My modules
  cvars = require('./cvars'),
  //es6-fy required modules
  browserify = require("browserify"),
  babelify = require("babelify"),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer');

  build_js = function() {
    if (gutil.env.es6) {
      return browserify({
          entries: cvars.main_js,
          extensions: ['.js'],
          debug: false
        })
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(gutil.env.production ? uglify() : gutil.noop())
        .pipe(gulp.dest(cvars.dest));
    } else
      return gulp.src(cvars.src_js)
        .pipe(gutil.env.production ? sourcemaps.init() : gutil.noop())
        .pipe(gutil.env.es6 ? babel() : gutil.noop())
        .pipe(concat('bundle.js'))
        //only uglify if gulp is ran with '--type production'
        .pipe(gutil.env.production ? uglify() : gutil.noop())
        .pipe(gutil.env.production ? sourcemaps.write() : gutil.noop())
        .pipe(gulp.dest(cvars.dest));
  };

module.exports = build_js;
