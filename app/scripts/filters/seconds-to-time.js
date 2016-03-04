angular.module('app').filter('secondsToTime', [function() {
    return function(seconds) {
        return new Date(1970, 0, 1).setSeconds(seconds) || "--:--";
    };
}])
