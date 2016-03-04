'use strict';

let gulp = require('gulp');
let electron = require('electron-prebuilt');
let spawn = require('child_process').spawn;

let app = null;

gulp.task('run', function(){
  if(app){
    console.log('Killing Electron app');
    app.kill()
    app = null;
  }
  console.log('Reloading Electron app');
  app = spawn(electron, ['./app'], {stdio: 'inherit'});
});

gulp.watch(['app/**/*.html', 'app/**/*.js'], ['run']);
