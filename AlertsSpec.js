describe('Alert service', function() {

	var alert = null;
	var scope = null;
	beforeEach(module('drahak.alerts'));
	beforeEach(inject(function($alert, $rootScope) {
		alert = $alert;
		scope = $rootScope;

		spyOn(scope, '$broadcast');
	}));

	it('broadcasts flash message to the scope', function() {
		alert('AngularJS');
		expect(scope.$broadcast).toHaveBeenCalledWith('$alert:add', { message: 'AngularJS', type: 'success' });
	});

	it('uses custom alert type if specified', function() {
		alert('Custom type', 'custom');
		expect(scope.$broadcast).toHaveBeenCalledWith('$alert:add', { message: 'Custom type', type: 'custom' });
	});

});