/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var gulp = require('gulp'),
  jade = require('gulp-jade'),
  browserSync = require('browser-sync').create(),
  reload = browserSync.reload,
  path = require('path');

var params = {
  out: 'public/',
  jadeToFiles: 'src/*.jade',
  jadeGlob: 'src/**/*.jade'
};

gulp.task('default', ['server', 'build']);

gulp.task('build', ['jade']);

gulp.task('jade', function() {
  gulp.src(params['jadeToFiles'])
          .pipe(jade())
          .pipe(gulp.dest(params['out']));
});

gulp.task('server', function(){
  browserSync.init({
    server: params.out
  });
  gulp.watch(params['jadeGlob'], ['jade']);
});