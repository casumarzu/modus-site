'use strict';

/**
 * @ngdoc function
 * @name modusSiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the modusSiteApp
 */
angular.module('modusSiteApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
