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
  PaginationController.$inject = ['$scope', 'userService'];
  // Add pagination controller
  module.controller('paginationController', PaginationController);

  // PaginationController Class
  function PaginationController($scope, userService) {
    // Update AppController properties
    $scope.$parent.headerLogoImgUrl   = '../' + $scope.$parent.headerLogoImgUrl;
    $scope.$parent.navMenus[0].href   = '../' + $scope.$parent.navMenus[0].href;
    $scope.$parent.navMenus[0].active = false;
    $scope.$parent.navMenus[0].icon   = '../' + $scope.$parent.navMenus[0].icon;
    $scope.$parent.navMenus[1].href   = '.';
    $scope.$parent.navMenus[1].active = true;
  }

})();
