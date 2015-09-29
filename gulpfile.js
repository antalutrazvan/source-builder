/* File: gulpfile.js */

// grab gulp package
var gulp = require('gulp');


//My Defined Tasks
var build_js = require('./gulp/build_js');
var vendors_js = require('./gulp/vendors_js');
var build_css = require('./gulp/build_css');
var vendors_css = require('./gulp/vendors_css');
var js_linter = require('./gulp/js_linter');
var watch = require('./gulp/watch');
var live_build = require('./gulp/live_build');

// define tasks
gulp.task('live_build', live_build);
gulp.task('build_js', build_js);
gulp.task('build_css', build_css);
gulp.task('vendors_js', vendors_js);
gulp.task('vendors_css', vendors_css);
gulp.task('jshint', js_linter);
gulp.task('watch', watch);

gulp.task('build', ['build_js', 'build_css', 'vendors_js', 'vendors_css']);


// create the default task and assign what tasks to run
if (gutil.env.build === true)
  gulp.task('default', ['build']);
else
  gulp.task('default', ['build', 'live_build', 'watch']);
