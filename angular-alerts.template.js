(function() {
	angular.module('drahak.alerts').run(['$templateCache', function($templateCache) {
		$templateCache.put('drahak/alerts.html',
			'<section ng-show="alerts.length">' +
				'<alert data-ng-repeat="alert in alerts" type="{{ alert.type }}" close="close($index)" ttl="{{ options.ttl }}">' +
					'{{ alert.message }}' +
				'</alert>' +
			'</section>');
		$templateCache.put('drahak/alert.html',
			'<div class="alert alert-{{ type }}">' +
				'<button class="close" data-ng-click="close()">&times;</button>' +
				'<span data-ng-transclude=""></span>' +
			'</div>'
		);
	}])

})();