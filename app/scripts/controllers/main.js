'use strict';

/**
 * @ngdoc function
 * @name invoiceClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the invoiceClientApp
 */
angular.module('main',[])
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
