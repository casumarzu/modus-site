'use strict';

/**
 * @ngdoc function
 * @name modusSiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the modusSiteApp
 */
angular.module('modusSiteApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
