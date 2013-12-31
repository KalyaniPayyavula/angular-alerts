(function() {
	angular.module('drahak.alerts').run(['$templateCache', function($templateCache) {
		$templateCache.put('drahak/alerts.html',
			'<section ng-show="alerts.length">' +
				'<div data-ng-repeat="alert in alerts" class="alert alert-{{ alert.type }}">' +
					'<button class="close" data-ng-click="close($index)">&times;</button>' +
					'{{ alert.message }}' +
				'</div>' +
			'</section>');
	}])

})();