var gulp = require('gulp'),
  //My modules
  cvars = require('./cvars');

var watch = function() {
  gulp.watch(cvars.src_js, ['jshint']);
}

module.exports = watch;
