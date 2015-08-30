'use strict';

angular.module('escalaOnlineApp')
.directive('youtubeTitle', function () {
  return {
    restrict: 'E',
    scope: {
      link: '='
    },
    controller: function($scope, $http){
      $scope.linkTitle = 'Carregando...';

      var getIdVideo = function(link){
        if(link.indexOf("www.youtube.com/watch") > -1){
          return link.substring(link.indexOf("?v=") + 3, link.length);
        }

        if(link.indexOf("youtu.be") > -1){
          return link.substring(link.lastIndexOf('/') + 1, link.length);
        }

        return "Link Quebrado";
      }

      var idVideo = getIdVideo($scope.link);
      $http.get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
          key: 'AIzaSyD8N-YjP-0ml_q2GNj5hcIDDds2w5br6rc',
          part: 'snippet',
          id: idVideo
        }
      })
      .success( function (data) {
        $scope.linkTitle = data.items[0].snippet.title;
      })
      .error( function () {
        $scope.linkTitle = 'Link Quebrado!';
      });
    },
    template: '{{linkTitle}}'
  };
});
