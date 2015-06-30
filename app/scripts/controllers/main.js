'use strict';

/**
 * @ngdoc function
 * @name saggezzaDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the saggezzaDemoApp
 */
angular.module('saggezzaDemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
