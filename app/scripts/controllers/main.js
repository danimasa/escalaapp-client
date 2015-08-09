'use strict';

/**
 * @ngdoc function
 * @name escalaOnlineApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the escalaOnlineApp
 */
angular.module('escalaOnlineApp')
  .controller('MainCtrl', function (EscalaApi) {

      this.escalas = EscalaApi.query();
  });
