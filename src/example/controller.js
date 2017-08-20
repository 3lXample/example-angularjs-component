/**
 * example-angularjs-component
 * https://github.com/3lXample/example-angularjs-component
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
(function() {
  'use strict';

  var name   = '3XApp-example';
  var module = angular.module(name);

  // Add Controller
  module.controller('exampleController', ['$scope',
    function exampleController($scope) {
      $scope.title = 'elpmaxE SJralugnA';
    }
  ]);

})();
