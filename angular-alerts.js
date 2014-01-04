(function() {
	'use strict';

	var alerts = angular.module('drahak.alerts', []);
	alerts.factory('$alert', ['$rootScope', function($rootScope) {
		return function(message, type) {
			if (!type) type = 'success';

			$rootScope.$broadcast('$alert:add', {
				'message': message,
				'type': type
			});
		}
	}]);

	alerts.directive('alerts', function() {
		return {
			scope: {},
			replace: true,
			restrict: 'AE',
			templateUrl: 'drahak/alerts.html',
			link: function(scope) {
				scope.alerts = [];
				scope.$on('$alert:add', function(evt, message) {
					scope.alerts.push(message);
				});
				scope.$on('$alert:remove', function(evt) {
					scope.alerts.length = 0;
				});

				scope.close = function(index) {
					scope.alerts.splice(index, 1);
				};
			}
		}
	});

})();