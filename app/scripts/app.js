'use strict';

/**
 * @ngdoc overview
 * @name saggezzaDemoApp
 * @description
 * # saggezzaDemoApp
 *
 * Main module of the application.
 */
angular
  .module('saggezzaDemoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'apiMock'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/people', {
        templateUrl: 'views/person-list.html',
        controller: 'PersonListCtrl',
        controllerAs: 'vm',
        resolve: {
          people: function (personService) {
            return personService.getPersonList().then(function (responseFromAPI) {
              return responseFromAPI.people;
            });
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function (apiMockProvider) {
    apiMockProvider.config({
      mockDataPath: '/person-demo/mock_data',
      apiPath: '/api'
    });
  });
