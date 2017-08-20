/**
 * example-angularjs-component
 * https://github.com/3lXample/example-angularjs-component
 *
 * Copyright (c) 2017 3lXample (https://github.com/3lXample)
 * Licensed under the MIT license
 */
(function() {
  'use strict';

  var name   = '3XApp';
  var module = angular.module(name);

  // Inject dependencies
  SubtractionController.$inject = ['$scope', 'userService'];
  // Add subtraction controller
  module.controller('subtractionController', SubtractionController);

  // SubtractionController Class
  function SubtractionController($scope, userService) {
    // Update AppController properties
    $scope.$parent.headerLogoImgUrl   = '../' + $scope.$parent.headerLogoImgUrl;
    $scope.$parent.navMenus[0].href   = '../' + $scope.$parent.navMenus[0].href;
    $scope.$parent.navMenus[0].active = false;
    $scope.$parent.navMenus[0].icon   = '../' + $scope.$parent.navMenus[0].icon;
    $scope.$parent.navMenus[1].href   = '../' + $scope.$parent.navMenus[1].href;
    $scope.$parent.navMenus[1].active = false;
    $scope.$parent.navMenus[2].href   = '../' + $scope.$parent.navMenus[2].href;
    $scope.$parent.navMenus[2].active = false;
    $scope.$parent.navMenus[3].href   = '.';
    $scope.$parent.navMenus[3].active = true;
  }

})();
