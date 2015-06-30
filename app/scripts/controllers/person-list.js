'use strict';

/**
 * @ngdoc function
 * @name saggezzaDemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the saggezzaDemoApp
 */
angular.module('saggezzaDemoApp')
  .controller('PersonListCtrl', function ($scope, people) {
    var vm = this;
    vm.isLoading = true;

    setupController();

    function setupController() {
      vm.personList = people;
      vm.isLoading = false;
    };
  });