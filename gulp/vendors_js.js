gulp = require('gulp');
gutil = require('gulp-util');
concat = require('gulp-concat');
uglify = require('gulp-uglify');
sourcemaps = require('gulp-sourcemaps');
//My modules
cvars = require('./cvars');

var vendors_js = function() {
  return gulp.src(cvars.ext_js)
    .pipe(sourcemaps.init())
    .pipe(concat('vendors.js'))
    //only uglify if gulp is ran with '--type production'
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(cvars.dest));
}

module.exports = vendors_js;
