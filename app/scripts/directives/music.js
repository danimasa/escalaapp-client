'use strict';

/**
 * @ngdoc directive
 * @name escalaOnlineApp.directive:music
 * @description
 * # music
 */
angular.module('escalaOnlineApp')
  .directive('musicCard', function () {
    return {
      restrict: 'E',
      scope: {
        musica: '=',
        enableEdit: '=',
        edit: '=',
        innerController: '=',
        index: '@'
      },
      controller: function($scope, MusicaApi){
        if($scope.musica.id == null){
          $scope.edit = true;
        }

        $scope.editBtn = function(){
          if(!$scope.edit) $scope.edit = true;
          else {
            if($scope.musica.id == null) {
              MusicaApi.save($scope.musica, function(data){
                $scope.musica.id = data.id;
              });
            }
            else {
              MusicaApi.update($scope.musica);
            }
            $scope.edit = false;
          }
        };

        $scope.removeBtn = function(){
          $scope.innerController.removerMusic($scope.index);
        }
      },
      templateUrl: 'views/directives/music.html'
    };
  });
