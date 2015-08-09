'use strict';

/**
 * @ngdoc service
 * @name escalaOnlineApp.escalaApi
 * @description
 * # escalaApi
 * Factory in the escalaOnlineApp.
 */
angular.module('escalaOnlineApp')
  .factory('BackApi', function ($resource) {
    return $resource("/api/back/:id", { id: '@id' }, {
      update: {
        method: 'PUT' // this method issues a PUT request
      }});
    });
