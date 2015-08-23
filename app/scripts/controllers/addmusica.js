'use strict';

/**
 * @ngdoc function
 * @name escalaOnlineApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the escalaOnlineApp
 */
angular.module('escalaOnlineApp')
  .controller('AddMusicaCtrl', function (MusicaApi, $location, senha) {
    var digSenha = prompt('Digite a senha para acessar:');
    if(digSenha == null || digSenha != senha){
      $location.path('#/musica');
    }

    this.musicas = [{nome: "", author: "", tom: "", link: ""}];

    this.addMusica = function(){
      this.musicas.push({nome: "", author: "", tom: "", link: ""});
    };

    this.salvarMusicas = function(){
      for(var i = 0; i < this.musicas.length; i++){
          MusicaApi.save(this.musicas[i]);
      }
      $location.path('#/musica');
    };

    this.removeMusica = function(index){
      this.musicas.splice(index, 1);
    };
  });
