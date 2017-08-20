/**
 * example-angularjs-component
 * https://github.com/3lXample/example-angularjs-component
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
'use strict';

// Suite test for module
describe('3XApp-example', function() {

  // Load module 3XApp-example before each test
  beforeEach(module('3XApp-example'));

  // Suite test for controller
  describe('exampleController', function() {
    var header1 = 'header1';
    var scope;
    var ctrl;

    // Mock exampleService1
    beforeEach(module(function($provide) {
      $provide.value('exampleService1', { getHeader: function() { return header1; } });
    }));

    // Create object mock for $scope
    // Initialize object exampleController and inject dependencies into it
    beforeEach(inject(function($controller) {
      scope = {};
      ctrl  = $controller('exampleController', { $scope: scope });
    }));

    // Test
    it('should have $scope.title with value `elpmaxE SJralugnA`', function() {
      expect(scope.title).toEqual('elpmaxE SJralugnA');
    });

    // Test
    it('should have scope.exam1 with value `' + header1 + '`', function() {
      expect(scope.exam1).toEqual(header1);
    });

  });

});
