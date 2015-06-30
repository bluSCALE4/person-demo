'use strict';

describe('Unit Testing: Config', function () {

  beforeEach(module('ts5App'));

  var scope;

  beforeEach(inject(function ($route, $location, $rootScope, $httpBackend, $templateCache) {
    scope = $rootScope.$new();
    $templateCache.put('people')
  }));

  beforeEach(function () {
    $httpBackend.expectGET('/people').respond(200, {});
  });

  afterEach(function () {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  describe('RouteProvider', function () {

    spyOn(personService, 'getPersonList').andReturn('');

    $location.path('/people');
    scope.$digest();
    expect($route.current).toBeDefined();

  });
});