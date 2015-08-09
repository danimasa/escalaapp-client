'use strict';

/**
 * @ngdoc service
 * @name escalaOnlineApp.escalaApi
 * @description
 * # escalaApi
 * Factory in the escalaOnlineApp.
 */
angular.module('escalaOnlineApp')
  .factory('EscalaApi', function ($resource) {
    return $resource("/api/escala/:id", { id: '@id' }, {
      update: {
        method: 'PUT' // this method issues a PUT request
      }});
  });
