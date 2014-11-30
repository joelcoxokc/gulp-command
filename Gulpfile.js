/*
 * gulp-command
 * https://github.com/JoelCoxOKC/gulp-command
 *
 * Copyright (c) 2014 joelcoxokc
 * Licensed under the MIT license.
 */

'use strict';

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var options = require('./lib/gulp-command')(gulp);
var _ = require('lodash');

gulp
  .option('try', '-s, --save', 'Somethings')


gulp
  .task('try', function(){
    console.log(this.flags);
  })


gulp
  .task('do', function(){
    console.log(this);
  })


gulp.task('test', function () {
  return gulp.src('./test/*.js')
    .pipe(mocha({
      ui: 'bdd',
      reporter: 'spec'
    }));
});

gulp.task('watch', function () {
  gulp.watch(['./lib/**/*.js', './test/**/*.js'], ['test']);
});

gulp.task('default', ['test', 'watch']);
