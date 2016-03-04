readdir = require('recursive-readdir');
path = require('path');
id3 = require('id3js');

angular.module('app').factory('DiscographyService', DiscographyService);

const librarypath = '';

function DiscographyService(){
  return {
    'get': function get(callback){
      return readdir(librarypath, function(err, files){
        files.map(function(element){
          if(path.extname(element) === '.mp3'){
            return id3({
              'file': element,
              'type': id3.OPEN_LOCAL
            }, function(err, tags){
              callback({'metadata': tags, 'path': element});
            });
          }
        });
      });
    }
  };
}
