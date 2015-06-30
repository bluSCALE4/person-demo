'use strict';

/**
 * @ngdoc service
 * @name ts5App.allergensService
 * @description
 * # allergensService
 * Service in the ts5App.
 */
angular.module('saggezzaDemoApp')
  .service('personService', function ($resource, $http) {
    var requestURL = '/api/people';

    function appendTransform(defaults, transform) {
      defaults = angular.isArray(defaults) ? defaults : [defaults];
      return defaults.concat(transform);
    }

    function addPersonData(person) {
      person.photo = person.photo || 'images/' + angular.lowercase(person.firstName) + '.jpg';
      person.fullName = person.fullName || person.firstName + ' ' + person.lastName;
      person.bio = person.bio || 'N/A';
      return person;
    }

    function normalizeArray(personListFromAPI) {
      personListFromAPI.people.forEach(function (person) {
        addPersonData(person);
        return person;
      });

      return personListFromAPI;
    }

    var actions = {
      getPersonList: {
        method: 'GET',
        apiMock: true,
        transformResponse: appendTransform($http.defaults.transformResponse, function (response) {
          return normalizeArray(response);
        })
      }
    };

    var requestResource = $resource(requestURL, null, actions);

    var getPersonList = function (payload) {
      return requestResource.getPersonList(payload).$promise;
    };

    return {
      getPersonList: getPersonList
    };

  });
