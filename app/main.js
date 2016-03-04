'use strict';

const app = require('app');

const BrowserWindow = require('browser-window');
let mainWindow = null;

app.on('window-all-closed', function(){
  if(process.platform !== 'darwin'){
    app.quit();
  }
});

app.on('ready', function(){
  mainWindow = new BrowserWindow({width: 800, height: 600 });

  mainWindow.loadUrl('file://' + __dirname + '/templates/index.html');

  mainWindow.on('closed', function(){
    mainWindow = null;
  });
});
