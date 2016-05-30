'use strict';
var app = angular.module('file-share', ['ui.router', 'restangular']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/accueil');

  $stateProvider
    .state('accueil', {
      url: '/accueil',
      template: '<div><h1 Accueil></h1></div>'
    });
});
