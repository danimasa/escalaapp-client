'use strict';

/**
 * @ngdoc function
 * @name escalaOnlineApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the escalaOnlineApp
 */
angular.module('escalaOnlineApp')
  .controller('YouTubeCtrl', function ($scope, $http, q) {
    $scope.q = q;
    $scope.results = [];
    var selected = 0;
    $scope.selected = '';

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
        $scope.results = data.items;
        selected = 0;
        $scope.selected = $scope.results[0];
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
      $scope.selected = $scope.results[index];
    };

    $scope.getIframeSrc = function () {
      if($scope.results.length == 0) return '';
      return 'https://www.youtube.com/embed/' + $scope.selected.id.videoId;
    };

    $scope.confirmSelection = function(){
      $scope.closeThisDialog($scope.selected);
    };

    if($scope.q != ' ') $scope.search();
  });
