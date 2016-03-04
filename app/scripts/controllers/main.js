'use strict';

angular.module('app').controller('MainController', MainController);

MainController.$inject = ['$scope', 'DiscographyService', '$interval'];

function MainController($scope, DiscographyService, $interval){
  $scope.discography = [];
  $scope.playlists = {};
  $scope.activeSong = null;
  $scope.paused = true;
  $scope.progress = 0;

  DiscographyService.get(function(file){
    $scope.discography.push(file);

    if(!$scope.playlists.hasOwnProperty(file.metadata.artist + ' - ' + file.metadata.album)){
      $scope.playlists[file.metadata.artist + ' - ' + file.metadata.album] = [];
    }

    $scope.playlists[file.metadata.artist + ' - ' + file.metadata.album].push(file);

    $scope.$apply();
  });

  $scope.getTrackNumber = function(song){
    return song.metadata.v1.track;
  };

  $scope.pageTitle = function(){
    if($scope.activeSong){
      return ($scope.activeSong.metadata.artist + ' - ' + $scope.activeSong.metadata.title);
    }else{
      return 'Zubry Music Player';
    }
  };

  $scope.createAudio = function(song){
    song.audio = new Audio(song.path);
  };

  $scope.start = function(song){
    if($scope.activeSong){
      $scope.activeSong.audio.pause();
      $scope.activeSong.active = undefined;
    }

    $scope.activeSong = song;
    $scope.activeSong.active = true;
    $scope.paused = false;
    $scope.activeSong.audio.play();
  };

  $scope.play = function(){
    if(!$scope.activeSong){
      return false;
    }

    $scope.paused = false;
    $scope.activeSong.audio.play();
  };

  $scope.pause = function(){
    if(!$scope.activeSong){
      return false;
    }

    $scope.paused = true;
    $scope.activeSong.audio.pause();
  };

  $interval(function(){
    if(!$scoped.paused && $scope.activeSong){
      $scope.progress = $scope.activeSong.audio.currentTime;
    }
  }, 100)

  function _arrayBufferToBase64( buffer ) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
  }
}
