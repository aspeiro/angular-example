'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
angular
  .module('sampleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'appfield'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      
      .when('/client/register', {
        event: 'client.register',
        templateUrl: 'views/client/register.html',
        controller: 'ClientCtrl'
      })

      .when('/client/register/:id', {
        event: 'client.register',
        templateUrl: 'views/client/register.html',
        controller: 'ClientCtrl'
      })

      .when('/client/list', {
        event: 'client.list',
        templateUrl: 'views/client/list.html',
        controller: 'ClientCtrl'
      })

      .otherwise({
        redirectTo: '/client/register'
      });
  });
