'use strict';

/**
 * @ngdoc directive
 * @name escalaOnlineApp.directive:music
 * @description
 * # music
 */
angular.module('escalaOnlineApp')
  .directive('youtubeSearch', function () {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        q: '='
      },
      controller: function($scope, $http){
        $scope.results = [];
        var selected = 0;
        $scope.selectedVideo = '';

        $scope.search = function(){
          $http.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
              key: 'AIzaSyD8N-YjP-0ml_q2GNj5hcIDDds2w5br6rc',
              type: 'video',
              maxResults: '10',
              part: 'id,snippet',
              q: $scope.q
            }
          })
          .success( function (data) {
            console.log(data);
            $scope.results = data.items;
            selected = 0;
            $scope.selectedVideo = $scope.results[0];
          })
          .error( function () {
            console.log('Search Error!');
          });
        };

        $scope.getClass = function(index){
          if(index == selected) return 'active';
          return '';
        };

        $scope.selectVideo = function(index){
          selected = index;
          $scope.selectedVideo = $scope.results[index];
        };

        $scope.getIframeSrc = function () {
          if($scope.results.length == 0) return '';
          return 'https://www.youtube.com/embed/' + $scope.selectedVideo.id.videoId;
        };
      },
      templateUrl: 'views/directives/youtube-search.html'
    };
  });
