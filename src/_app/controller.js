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
  AppController.$inject = ['$scope'];

  // Add app controller
  module.controller('appController', AppController);

  // AppController Class
  function AppController($scope) {
    $scope.headerLogoImgUrl = '_assets/3lXample_logo-160x44.png';
    $scope.navMenus = [
      { href: '.',           active: true,  icon: '_assets/3lXample_icon-20x20.png', iconAlt: 'home' },
      { href: 'pagination',  active: false, text: 'Pagination' },
      { href: 'addition',    active: false, text: 'Addition' },
      { href: 'subtraction', active: false, text: 'Subtraction' }
    ];
  }

})();
