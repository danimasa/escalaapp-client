'use strict';

/**
 * @ngdoc function
 * @name escalaOnlineApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the escalaOnlineApp
 */
angular.module('escalaOnlineApp')
  .controller('EditEscalaCtrl', function (EscalaApi, MusicaApi, BackApi, InstrumentApi, $routeParams, $location, senha) {
    var digSenha = prompt('Digite a senha para acessar:');
    if(digSenha == null || digSenha != senha){
      $location.path('#/');
    }

    this.esc = EscalaApi.get({id: $routeParams.id});
    this.musicas = MusicaApi.query();
    this.backs = BackApi.query();
    this.instruments = InstrumentApi.query();
    this.id = $routeParams.id;

    this.addInstrument = function(){
      if(this.instrument.$$hashKey == null){
        var nomeInst = prompt('Quem ocupará esta funcao:');
        if(nomeInst != null){
          this.esc.instrumentais.push(InstrumentApi.save({nome: nomeInst,funcao: this.instrument.originalObject}));
        }
      }else{
        this.esc.instrumentais.push(this.instrument.originalObject);
      }
    };

    this.removeInstrument = function(index){
      this.esc.instrumentais.splice(index, 1);
    };

    this.addBack = function(){
      if(this.back.$$hashKey == null){
        this.esc.backs.push(BackApi.save({nome: this.back.originalObject}));
      }else{
        this.esc.backs.push(this.back.originalObject);
      }
    };

    this.removeBack = function(index){
      this.esc.backs.splice(index, 1);
    };

    this.addMusica = function(){
      if(this.music.$$hashKey == null){
        this.esc.musicas.push({nome: this.music.originalObject, author: '', tom: '', link: ''});
      }else{
        this.esc.musicas.push(this.music.originalObject);
      }
    };

    this.removerMusic = function(index){
      this.esc.musicas.splice(index, 1);
    };

    this.salvarEscala = function(){
      var escbacks = [];
      for(var i = 0; i < this.esc.backs.length; i++){
        escbacks.push(this.esc.backs[i].id);
      }
      this.esc.backs = escbacks;

      var escinstruments = [];
      for(var i = 0; i < this.esc.instrumentais.length; i++){
        escinstruments.push(this.esc.instrumentais[i].id);
      }
      this.esc.instrumentais = escinstruments;

      var escmusics = [];
      for(var i = 0; i < this.esc.musicas.length; i++){
        escmusics.push(this.esc.musicas[i].id);
      }
      this.esc.musicas = escmusics;

      this.esc.$update();
      $location.path('#/');
    };
  });
