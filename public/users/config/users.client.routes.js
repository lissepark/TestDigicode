angular.module('users').config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/users', {
		templateUrl: 'users/views/list-users.client.view.html'
	}).when('/users/create', {
		templateUrl: 'users/views/create-user.client.view.html'
	}).when('/users/:userId', {
		templateUrl: 'users/views/view-user.client.view.html'
	}).when('/users/:userId/edit', {
		templateUrl: 'users/views/edit-user.client.view.html'
	}).when('/users/:userId/delete', {
		templateUrl: 'users/views/delete-users.client.view.html'
	}).when('/', {
		templateUrl: 'users/views/start.client.view.html'
	});;
}
]);