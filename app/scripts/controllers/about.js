'use strict';

/**
 * @ngdoc function
 * @name saggezzaDemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the saggezzaDemoApp
 */
angular.module('saggezzaDemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
