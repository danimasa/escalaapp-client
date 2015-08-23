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
          })
          .error( function () {
            console.log('Search Error!');
          });
        };

      },
      templateUrl: 'views/directives/youtube-search.html'
    };
  });
