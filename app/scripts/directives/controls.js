
angular.module('app').directive('controls', controls);

function controls(){
  return {
    restrict: 'E',
    templateUrl: '../templates/controls.html'
  };
}
