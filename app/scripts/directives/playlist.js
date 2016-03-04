
angular.module('app').directive('playlist', playlist);

function playlist(){
  return {
    restrict: 'E',
    templateUrl: '../templates/playlist.html'
  };
}
