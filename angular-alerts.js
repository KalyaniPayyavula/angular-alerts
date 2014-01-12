(function() {
	'use strict';

	var alerts = angular.module('drahak.alerts', []);
	alerts.factory('$alert', ['$rootScope', function($rootScope) {

		/**
		 * @param {String} message
		 * @param {String} type
		 * @constructor
		 */
		var Alert = function(message, type) {
			this.type = type || 'success';
			this.message = message;

			$rootScope.$broadcast('$alert:add', this);
		};

		/**
		 * Removes alert
		 * @returns {Alert} self
		 */
		Alert.prototype.remove = function() {
			$rootScope.$broadcast('$alert:remove', this);
			return this;
		};

		return function(message, type) {
			return new Alert(message, type);
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
				scope.$on('$alert:add', function(evt, alert) {
					scope.alerts.push(alert);
				});
				scope.$on('$alert:remove', function(evt, alert) {
					if (!alert) {
						scope.alerts.length = 0;
					} else {
						scope.close(scope.alerts.indexOf(alert));
					}
				});

				scope.close = function(index) {
					scope.alerts.splice(index, 1);
				};
			}
		}
	});

	alerts.directive('alert', function() {
		return {
			scope: {
				close: '&',
				type: '@'
			},
			replace: true,
			transclude: true,
			restrict: 'AE',
			templateUrl: 'drahak/alert.html'
		}
	});

})();