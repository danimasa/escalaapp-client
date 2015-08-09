'use strict';

/**
 * @ngdoc overview
 * @name escalaOnlineApp
 * @description
 * # escalaOnlineApp
 *
 * Main module of the application.
 */
angular
  .module('escalaOnlineApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angucomplete-alt'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/escala/:id', {
        templateUrl: 'views/escala.html',
        controller: 'EscalaCtrl',
        controllerAs: 'escala'
      })
      .when('/add/escala', {
        templateUrl: 'views/addescala.html',
        controller: 'AddEscalaCtrl',
        controllerAs: 'addesc'
      })
      .when('/edit/escala/:id', {
        templateUrl: 'views/editescala.html',
        controller: 'EditEscalaCtrl',
        controllerAs: 'editesc'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
