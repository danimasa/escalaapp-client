'use strict';

/**
 * @ngdoc function
 * @name escalaOnlineApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the escalaOnlineApp
 */
angular.module('escalaOnlineApp')
  .controller('EscalaCtrl', function (EscalaApi, $routeParams, $location) {

    this.esc = EscalaApi.get({id: $routeParams.id});
    this.id = $routeParams.id;

    this.deletarEscala = function(){
      var r = confirm('Deseja realmente deletar a escala?');
      if(r == true){
        this.esc.$delete();
        $location.path('#/');
      }
    };

  });
