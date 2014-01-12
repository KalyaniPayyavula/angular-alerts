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
		var message = alert('AngularJS');
		expect(scope.$broadcast).toHaveBeenCalledWith('$alert:add', message);
		expect(message.message).toBe('AngularJS');
		expect(message.type).toBe('success');
	});

	it('uses custom alert type if specified', function() {
		var message = alert('Custom type', 'custom');
		expect(scope.$broadcast).toHaveBeenCalledWith('$alert:add', message);
		expect(message.message).toBe('Custom type');
		expect(message.type).toBe('custom');
	});

	it('removes alert', function() {
		var message = alert('AngularJS', 'success');
		message.remove();
		expect(scope.$broadcast).toHaveBeenCalledWith('$alert:remove', message);
	});

});