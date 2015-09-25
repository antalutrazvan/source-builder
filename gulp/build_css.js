gulp = require('gulp');
gutil = require('gulp-util');
concat = require('gulp-concat');
uglifycss = require('gulp-minify-css');
//My modules
cvars = require('./cvars');


build_css = function() {
  return gulp.src(cvars.src_css)
    .pipe(concat('bundle.css'))
    //only uglify if gulp is ran with '--type production'
    .pipe(gutil.env.type === 'production' ? uglifycss() : gutil.noop())
    .pipe(gulp.dest(cvars.dest));
}

module.exports = build_css;
