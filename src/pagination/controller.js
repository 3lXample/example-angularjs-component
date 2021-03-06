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
    $scope.$parent.navMenus[2].href   = '../' + $scope.$parent.navMenus[2].href;
    $scope.$parent.navMenus[2].active = false;
    $scope.$parent.navMenus[3].href   = '../' + $scope.$parent.navMenus[3].href;
    $scope.$parent.navMenus[3].active = false;

    $scope.title = 'Pagination Example [Component]';
    $scope.menus = ['Previous', 'Next'];
    $scope.info  = 'Page';
    $scope.users = [];
    $scope.page  = 1;

    // Get data users for current page from userService
    function updateTableUser() {
      userService.getByPage($scope.page, function updateTableUserCallback(userList) {
        $scope.users = userList.users;
      });
    }

    // Reset and update table user to page 1
    function reset() {
      $scope.page = 1;
      updateTableUser();
    }

    // Goto next page and update table user
    // max page is 100, if current page is 100 next page will be page 1
    function nextPage() {
      $scope.page++;
      if ($scope.page > 100) {
        $scope.page = 1;
      }
      updateTableUser();
    }

    // Goto prev page and update table user
    // max page is 100, if current page is 1 prev page will be page 100
    function prevPage() {
      $scope.page--;
      if ($scope.page < 1) {
        $scope.page = 100;
      }
      updateTableUser();
    }

    // function for bind to child component
    function onClickMenu(menu) {
      switch (menu) {
        case 'reset':
          reset();
          break;
        case 'Previous':
          prevPage();
          break;
        case 'Next':
          nextPage();
          break;
      }
    }

    // expose this function, so it can be called from ng-click
    $scope.onClickMenu = onClickMenu;

    // Initialize page
    reset();
  }

})();
