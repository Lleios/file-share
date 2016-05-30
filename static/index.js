'use strict';

require('angular');
require('angular-ui-router');
require('lodash');
require('restangular');


var app = angular.module('file-share', ['ui.router', 'restangular']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/accueil');
    $stateProvider
      .state('accueil', {
        url: '/accueil',
        template: '<div>{{restMessage}}<br>{{restSubtitle}}'+
                    '<button ui-sref=\'accueil.off\'>Fuck off</button>'+
                    '<button ui-sref=\'accueil.this\'>Fuck this</button>'+
                    '<button ui-sref=\'accueil.bye\'>Bye</button>'+
                    '<div ui-view></div>'+
                  '</div>',
      }).state('accueil.off', {
        url: '/off',
        template: '<div>{{restMessage}}<br>{{restSubtitle}}<div ui-view></div></div>',
        resolve: {
           rest : function(Restangular){
             Restangular.setBaseUrl('http://foaas.com/');
             return Restangular.one('off', 'Darth Vader').get();
           }
        },
        controller: function($scope, rest){
          $scope.restMessage = rest.message;
          $scope.restSubtitle = rest.subtitle;
          console.log(rest.message);
          console.log(rest.subtitle);
        }
      });
      
      $stateProvider.state('accueil.this', {
        url: '/this',
        template: '<div>{{restMessage}}<br>{{restSubtitle}}<div ui-view></div></div>',
        resolve: {
           rest : function(Restangular){
             Restangular.setBaseUrl('http://foaas.com/');
             return Restangular.one('this', 'Darth Vader').get();
           }
        },
        controller: function($scope, rest){
          $scope.restMessage = rest.message;
          $scope.restSubtitle = rest.subtitle;
          console.log(rest.message);
          console.log(rest.subtitle);
        }
      });
      
      $stateProvider.state('accueil.bye', {
        url: '/bye',
        template: '<div>{{restMessage}}<br>{{restSubtitle}}<div ui-view></div></div>',
        resolve: {
           rest : function(Restangular){
             Restangular.setBaseUrl('http://foaas.com/');
             return Restangular.one('bye', 'Obi-Wan').get();
           }
        },
        controller: function($scope, rest){
          $scope.restMessage = rest.message;
          $scope.restSubtitle = rest.subtitle;
          console.log(rest.message);
          console.log(rest.subtitle);
        }
      });
});



