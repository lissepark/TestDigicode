var mainApplicationModule = angular.module('mainmodule', 
	['ngRoute', 'ngResource', 'users', 'ui.scroll', 'ui.scroll.jqlite', 'ui.bootstrap', 'ngSanitize', 'ngAnimate', 'angular-loading-bar']);

mainApplicationModule.config(['$locationProvider', function($locationProvider) {
	$locationProvider.hashPrefix('!');
}
]);
//if (window.location.hash === '#_=_') window.location.hash = '#!';
angular.element(document).ready(function() {
	angular.bootstrap(document, ['mainmodule']);
});
