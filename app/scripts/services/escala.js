'use strict';

/**
 * @ngdoc service
 * @name escalaOnlineApp.escala
 * @description
 * # escala
 * Value in the escalaOnlineApp.
 */
angular.module('escalaOnlineApp')
  .value('escala', [{"id":1,"data_escala":"2015-08-06","ministro":"Pr. Edison","created_at":"-0001-11-30 00:00:00","updated_at":"-0001-11-30 00:00:00","instrumentais":[{"id":1,"escala_id":1,"funcao":"Teclado","nome":"Daniel"},{"id":2,"escala_id":1,"funcao":"Guitarra","nome":"Tiel"}],"musicas":[{"id":1,"nome":"Poderoso Deus","author":"David Quilan","tom":"G","link":"https:\/\/www.youtube.com\/watch?v=6DRg674Q9T0","pivot":{"escala_id":1,"music_id":1}},{"id":3,"nome":"Deus do Imposs\u00edvel","author":"Toque no Altar","tom":"Bb","link":"https:\/\/www.youtube.com\/watch?v=wF1RZ6glJ4I","pivot":{"escala_id":1,"music_id":3}}],"backs":[{"id":1,"nome":"Camila","pivot":{"escala_id":1,"back_id":1}},{"id":3,"nome":"Weber","pivot":{"escala_id":1,"back_id":3}},{"id":4,"nome":"Denise","pivot":{"escala_id":1,"back_id":4}}]},{"id":2,"data_escala":"2015-08-07","ministro":"Anderson Amaral","created_at":"-0001-11-30 00:00:00","updated_at":"-0001-11-30 00:00:00","instrumentais":[{"id":3,"escala_id":2,"funcao":"Teclado","nome":"Vin\u00edcius"},{"id":4,"escala_id":2,"funcao":"Baixo","nome":"Gibeon"}],"musicas":[{"id":2,"nome":"Todo Poderoso Deus","author":"Marquinhos Gomes","tom":"D","link":"https:\/\/www.youtube.com\/watch?v=QF_cDeQdRqU","pivot":{"escala_id":2,"music_id":2}}],"backs":[{"id":2,"nome":"Maisa","pivot":{"escala_id":2,"back_id":2}},{"id":5,"nome":"Thais","pivot":{"escala_id":2,"back_id":5}}]}]);
