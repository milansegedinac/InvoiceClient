'use strict';

/**
 * @ngdoc function
 * @name invoiceClientApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the invoiceClientApp
 */
angular.module('about',[])

.controller('AboutCtrl', function ($scope, $modalInstance) {
	$scope.ok = function () {
		$modalInstance.close();
	};
});
