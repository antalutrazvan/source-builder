var gulp = require('gulp'),
    gutil = require('gulp-util');

var cvars = require('./cvars');


var live_build = function(){
  gutil.log('Adding live-build listeners.....');
  gulp.watch(cvars.src_js, ['build_js']);
  gulp.watch(cvars.ext_js,['vendors_js']);
  gulp.watch(cvars.src_css, ['build_css']);
  gulp.watch(cvars.ext_css,['vendors_css']);
  gutil.log('live-build listeners started.....');
}

module.exports = live_build;
