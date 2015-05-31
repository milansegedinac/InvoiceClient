'use strict';

angular.module('user', ['resource.user'])

.controller('userCtrl', function ($scope, User, $log, $location) {
	$scope.login = function () {
		var promise = User.login($scope.user);
		$scope.user = {};
		promise.then(function (data) {
			$log.info(data);
			$location.path('invoice-list');
		});
	}
});
