'use strict';

/**
 * @ngdoc directive
 * @name sampleApp.directive:appgrid
 * @description
 * # appgrid
 */
angular.module('sampleApp')
  .directive('appgrid', function () {
    return {
      templateUrl: 'views/directives/appgrid.html',
      scope:{
      	 columns: '=',
      	 data: '=',
      	 rowclick: '='
      },
      restrict: 'E',
      link: function postLink(scope) {
      }
    };
  });
