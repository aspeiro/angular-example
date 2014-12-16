'use strict';

/**
 * @ngdoc directive
 * @name sampleApp.directive:appform
 * @description
 * # appform
 */
angular.module('sampleApp')
  .directive('appform', function () {
    return {
      templateUrl: 'views/directives/appform.html',
      restrict: 'E',
      scope: {
      	 onsave: '=',
      	 fields: '=',
      	 inedition: '='
      },
      link: function postLink($scope) {
      	$scope.onsubmit = function onsubmit(){
      	  $scope.onsave();		
      	};
      }
    };
  });
