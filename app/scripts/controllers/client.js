'use strict';

/**
 * @ngdoc function
 * @name sampleApp.controller:ClientctrlCtrl
 * @description
 * # ClientctrlCtrl
 * Controller of the sampleApp
 */
angular.module('sampleApp')
  .controller('ClientCtrl', function ($scope, $window, ClientService, $routeParams) {

  	/*
  	 * Column config
  	 */
  	$scope.clientColumns = [
  		{ name: 'nome', displayName: 'Nome completo' },
  		{ name: 'idade', displayName: 'Idade' }
  	];

  	/* 
  	 * Field config
  	 */
  	$scope.clientFields = [
  		{ name: 'nome', displayName: 'Nome', type: 'string', required: true },
  		{ name: 'idade', displayName: 'Idade', type: 'number', required: false }
  	];

  	/*
  	 * Data
  	 */
  	$scope.clientData = [];
  	$scope.loadData = function loadData(){
  		ClientService.findAll(function(data){
  			$scope.clientData = data;
  		});
  	};

  	/*
  	 * Save
  	 */
  	$scope.inedition = {};
  	if ($routeParams.id){
       ClientService.findById($routeParams.id, function(data){
          $scope.inedition = data;
       });
  	}  	
  	$scope.onsave = function onsave(){
  		var action =  $routeParams.id ? 'update' : 'save';
        ClientService[action]($scope.inedition, function(){
           alert('Salvo com sucesso!');
           $window.location = '#/client/list';
        });
  	};

  	/*
  	 * Grid row click
  	 */
  	$scope.rowclick = function rowclick(index){
       $window.location = '#/client/register/'+index;
  	};

  });
