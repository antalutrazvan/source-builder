/* File: gulpfile.js */

// grab our gulp packages
var gulp = require('gulp'),
  gutil = require('gulp-util');
jshint = require('gulp-jshint');
sourcemaps = require('gulp-sourcemaps');
concat = require('gulp-concat');
uglify = require('gulp-uglify');
uglifycss = require('gulp-minify-css');

//My Defined Tasks
var build_js = require('./gulp/build_js');

// create a default task
gulp.task('default', ['live-build', 'watch']);

gulp.task('jshint', function() {
  return gulp.src('src/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function() {
  gulp.watch('src/js/**/*.js', ['jshint']);
});

gulp.task('live-build', function(){
  gutil.log('Adding live-build listeners.....');
  gulp.watch('src/js/**/*.js', ['build-js']);
  gulp.watch('src/vendor/js/*.js',['vendors-js']);
  gulp.watch('src/css/**/*.css', ['build-css']);
  gulp.watch('src/vendor/css/*.css',['vendors-css']);
  gutil.log('live-build listeners started.....');
});

gulp.task('build-js', build_js);
gulp.task('build-css', function() {
  return gulp.src('src/css/*.css')
  .pipe(concat('bundle.css'))
  //only uglify if gulp is ran with '--type production'
  .pipe(gutil.env.type === 'production' ? uglifycss() : gutil.noop())
  .pipe(gulp.dest('build'));
});

gulp.task('vendors-js', function() {
  return gulp.src('src/vendor/js/*.js')
  .pipe(concat('vendors.js'))
  //only uglify if gulp is ran with '--type production'
  .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
  .pipe(gulp.dest('build'));
});
gulp.task('vendors-css', function() {
  return gulp.src('src/vendor/css/*.css')
  .pipe(concat('vendors.css'))
  //only uglify if gulp is ran with '--type production'
  .pipe(gutil.env.type === 'production' ? uglifycss() : gutil.noop())
  .pipe(gulp.dest('build'));
});
