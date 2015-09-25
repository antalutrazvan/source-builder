gulp = require('gulp');
gutil = require('gulp-util');
concat = require('gulp-concat');
uglify = require('gulp-uglify');
sourcemaps = require('gulp-sourcemaps');
//My modules
cvars = require('./cvars');

build_js = function() {
  return gulp.src(cvars.src_js)
    .pipe(sourcemaps.init())
    .pipe(concat('bundle.js'))
    //only uglify if gulp is ran with '--type production'
    .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(cvars.dest));
};

module.exports = build_js;
