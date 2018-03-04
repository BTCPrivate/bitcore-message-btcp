'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('bitcore-build-btcp');

bitcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
