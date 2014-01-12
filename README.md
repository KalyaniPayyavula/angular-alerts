AngularJS alerts
================

Installation & setup
--------------------
Add dependency to your angular module.

```js
angular.module('myAwesomeApp', ['drahak.alerts']);
```

Alerts module has two files: source and template so you can easily replace the template with your own. Just load it to template cache as `drahak/alerts.html` or `drahak/alert.html` (see directives below).

Use
---
Use service `$alert` to add alert. First argument is alert message, second (optional) is alert type (defaults to `success`).

```js
angular.module('myAwesomeApp').controller('App', function($scope, $alert) {
    $scope.send = function() {
        $alert('Message was sent');
    };
});
```

Service broadcasts to the scope event `$alert:add` with alert object `{ message: 'Message was sent', type: 'success' }`.

Directive
---------
Use `alerts` directive as element or attribute to listen to scope events and render sent messages.

Additionally you can use `alert` directive to render just one alert independent on model values. This directive is simple wrapper around repeater and uses `alert` directive for each one

```html
<alert type="info" ttl="5000" close="hidden = true" ng-show="!hidden">
    The 'ttl' attribute is optional.
</alert>
```