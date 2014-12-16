'use strict';

/**
 * @ngdoc service
 * @name sampleApp.ClientService
 * @description
 * # ClientService
 * Service in the sampleApp.
 */
angular.module('sampleApp')
  .service('ClientService', function ClientService() {
    /*
     * FIXME http request
     */
     return {
        list: [
                { nome: 'Misael Braga de Bitencourt', idade: 25 },
                { nome: 'Ronaldo Donida', idade: 27 }
        ],
     	findAll: function FindAll(callback){
     		callback(this.list);
     	},
        save: function save(data, callback){
            this.list.push(data);
            callback();
        },
        update: function update(data, callback){
            callback();
        },
        findById: function findById(id, callback){
            callback(this.list[id]);
        }
     };
  });
