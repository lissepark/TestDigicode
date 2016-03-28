angular.module('users', ['ui.scroll', 'ui.scroll.jqlite']).factory('datasource', [function () {
			var get = function () {
					function () {
					var result = {};
					for (var i = 1; i <= 50; i++) {
						result.("item #" + i) = i;
					}
					return result;
				};
			};
			return {
				get: get
			};
		}
	]);