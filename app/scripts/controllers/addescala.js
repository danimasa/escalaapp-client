'use strict';

/**
 * @ngdoc function
 * @name escalaOnlineApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the escalaOnlineApp
 */
angular.module('escalaOnlineApp')
  .controller('AddEscalaCtrl', function (EscalaApi, $location, senha) {
    var digSenha = prompt('Digite a senha para acessar:');
    if(digSenha == null || digSenha != senha){
      $location.path('#/');
    }

    this.escalas = [{data_escala: new Date(), ministro: ''}];

    this.addEscala = function(){
      this.escalas.push({data_escala: new Date(), ministro: ''});
    };

    this.salvarEscalas = function(){
      for(var i = 0; i < this.escalas.length; i++){
          EscalaApi.save(this.escalas[i]);
      }
      $location.path('#/');
    };
  });
