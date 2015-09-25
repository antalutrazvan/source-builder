gulp = require('gulp');
gutil = require('gulp-util');
jshint = require('gulp-jshint');
//My modules
cvars = require('./cvars');

var js_linter = function() {
  return gulp.src(cvars.src_js)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
}

module.exports = js_linter;
