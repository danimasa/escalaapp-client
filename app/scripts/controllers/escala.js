'use strict';

/**
* @ngdoc function
* @name escalaOnlineApp.controller:AboutCtrl
* @description
* # AboutCtrl
* Controller of the escalaOnlineApp
*/
angular.module('escalaOnlineApp')
.controller('EscalaCtrl', function (EscalaApi, $routeParams, $location, senha, $http) {

  this.esc = EscalaApi.get({id: $routeParams.id});
  this.id = $routeParams.id;

  this.deletarEscala = function(){
    var digSenha = prompt('Digite a senha para acessar:');
    if(digSenha == null || digSenha != senha){
      $location.path('#/');
    }

    var r = confirm('Deseja realmente deletar a escala?');
    if(r == true){
      this.esc.$delete();
      $location.path('#/');
    }
  };

  this.getLinkTitle = function(index){
    var musica = this.esc.musicas[index];
    if(musica.linkTitle !== undefined && musica.linkTitle != ''){
      return musica.linkTitle;
    }else{
      var idVideo = getIdVideo(musica.link);
      $http.get('https://www.googleapis.com/youtube/v3/videos', {
        params: {
          key: 'AIzaSyD8N-YjP-0ml_q2GNj5hcIDDds2w5br6rc',
          part: 'snippet',
          id: idVideo
        }
      })
      .success( function (data) {
        console.log(data);
        musica.linkTitle = 'Teste';
      })
      .error( function () {
        console.log('Link Quebrado!');
      });
    }
  };
});
