'use strict';

let angular = require('angular');
let uibs = require('angular-ui-bootstrap');

let app = angular.module('app', [uibs]);

let services = {
  'discography': require('./scripts/services/discography.js')
};

let controllers = {
  'main': require('./scripts/controllers/main.js')
};

let directives = {
  'playlist': require('./scripts/directives/playlist.js'),
  'controls': require('./scripts/directives/controls.js')
};

let filters = {
  'secondsToTime': require('./scripts/filters/seconds-to-time.js')
}
