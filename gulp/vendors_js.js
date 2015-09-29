gulp = require('gulp');
gutil = require('gulp-util');
concat = require('gulp-concat');
uglify = require('gulp-uglify');
sourcemaps = require('gulp-sourcemaps');
//My modules
cvars = require('./cvars');

var vendors_js = function() {
  return gulp.src(cvars.ext_js)
    .pipe(gutil.env.production === true ? sourcemaps.init() : gutil.noop())
    .pipe(concat('vendors.js'))
    //only uglify if gulp is ran with '--type production'
    .pipe(gutil.env.production === true ? uglify() : gutil.noop())
    .pipe(gutil.env.production === true ?  sourcemaps.write() : gutil.noop())
    .pipe(gulp.dest(cvars.dest));
}

module.exports = vendors_js;
