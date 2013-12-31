AngularJS alerts
================

Installation & setup
--------------------
Add dependency to your angular module.

```js
angular.module('myAwesomeApp', ['drahak.alerts']);
```

Alerts have two files source and template so you can easily replace the template with your own. Just load it to template cache as `drahak/alerts.html`.

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