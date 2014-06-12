'use strict';

/**
 * @ngdoc function
 * @name modusSiteApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the modusSiteApp
 */
angular.module('modusSiteApp')
  .controller('GalleryCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
