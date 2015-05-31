angular.module('resource.user', ['angular-md5'])
.factory('User', function ($http, md5, $q, $log, $location) {
	var service = {
		login : function  (user) {
			var deferred = $q.defer();
			//user.password = md5.createHash(user.password);
			$http({
				url: "http://localhost:8080/xws/api/user/login", 
				method: "POST",
				data: user
			}).success(function (data) {
				deferred.resolve(data);
			});
			return deferred.promise;
		},
		logout : function () {
			$http({
				url: "http://localhost:8080/xws/api/user/logout",
				method: "GET",
			}).success(function () {
				$location.path("login");
			});
		}
	};

	return service;
})