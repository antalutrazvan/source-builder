gulp = require('gulp');
gutil = require('gulp-util');
concat = require('gulp-concat');
uglifycss = require('gulp-minify-css');
//My modules
cvars = require('./cvars');

var vendors_css = function() {
  return gulp.src(cvars.ext_css)
    .pipe(concat('vendors.css'))
    //only uglify if gulp is ran with '--type production'
    .pipe(gutil.env.production === true ? uglifycss() : gutil.noop())
    .pipe(gulp.dest(cvars.dest));
}

module.exports = vendors_css;
