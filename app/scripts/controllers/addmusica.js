'use strict';

/**
 * @ngdoc function
 * @name escalaOnlineApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the escalaOnlineApp
 */
angular.module('escalaOnlineApp')
  .controller('AddMusicaCtrl', function (MusicaApi, $location, senha, ngDialog) {
    var digSenha = prompt('Digite a senha para acessar:');
    if(digSenha == null || digSenha != senha){
      $location.path('#/musica');
    }

    this.musicas = [{nome: "", author: "", tom: "", link: "", linkTitle: ""}];

    this.addMusica = function(){
      this.musicas.push({nome: "", author: "", tom: "", link: "", linkTitle: ""});
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

    this.openYouTubeModal = function(index){
      var query = this.musicas[index].nome + ' ' + this.musicas[index].author;
      var dialog = ngDialog.open({
        template: 'views/directives/youtube-search.html',
        controller: 'YouTubeCtrl',
        resolve: {
          q: function queryFactory(){
            return query;
          }
        }
      });

      var scope = this;
      dialog.closePromise.then(function(data) {
        if(data !== undefined || data != ''){
          scope.musicas[index].linkTitle = data.value.snippet.title;
          scope.musicas[index].link = data.value.id.videoId;
        }
      });
    };
  });
