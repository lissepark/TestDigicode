angular.module('users').controller('UsersController', ['$scope', '$routeParams', '$location', '$uibModal', 'Users',
	function($scope, $routeParams, $location, $uibModal, Users) {
		
		$scope.create = function() {
			var user = new Users({
				firstName: this.firstName,
				lastName: this.lastName,
				email: this.email,
				age: this.age,
				gender: this.gender,
				check: false
			});
			user.$save(function(response) {
				$location.path('users/' + response._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.find = function() {
			$scope.users = Users.query(function() {
				$scope.showUsers = $scope.users.slice(0, 20);
			});
		};

		$scope.findOne = function() {
			$scope.user = Users.get({
				userId: $routeParams.userId
			});
		};

		$scope.update = function() {
			$scope.user.$update(function() {
				$location.path('users/' + $scope.user._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.delete = function(user) {
			if (user) {
				user.$remove(function() {
					for (var i in $scope.users) {
						if ($scope.users[i] === user) {
							$scope.users.splice(i, 1);
						}
					}
				});
			} else {
				$scope.user.$remove(function() {
					$location.path('users/');
				});
			}
		};

		$scope.predicate = 'lastName';
  		$scope.reverse = false;

  		$scope.order = function(predicate) {
	    	$scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : true;
	    	$scope.predicate = predicate;
  		};

  		$scope.createAuto = function() {
			for (var i = 1; i <106; i++) {		
				var user = new Users({
					firstName: 'Name'+i,
					lastName: 'Surname'+i,
					email: 'email'+i+'@i.ua',
					age: i,
					gender: 'Female',
					check: false				
				});
				if (i %2 == 0) {
					user.gender = 'Male';
				};
				user.$save(function(response) {
					//
				}, function(errorResponse) {
					$scope.error = errorResponse.data.message;
				});				
			};
			$location.path('users/');
		};

		$scope.deleteList = function() {
			for (var i in $scope.users) {
				if ($scope.users[i].check == true) {	
					$scope.users[i].$remove(function() {
						$scope.users.splice(i, 1);
						//!!! update not correct
					});
				}
			}
			//nonsense, but nothing better has not yet invented
			for (var i in $scope.users) {
				if ($scope.users[i].check == true) {	
					$scope.users[i].$remove(function() {
						$scope.users.splice(i, 1);
					});
				}
			}
			$location.path('users/');
		};

	$scope.currentPage = 1;
	$scope.numPerPage = 20;
	$scope.maxSize = 8;
	$scope.$watch('currentPage + numPerPage', function() {
		var begin = (($scope.currentPage - 1) * $scope.numPerPage)
		end = begin + $scope.numPerPage;
		$scope.showUsers = $scope.users.slice(begin, end);
	});

	$scope.getmodal = false;

	$scope.editModalDialog = function () {
        var dailog = $uibModal.open({
            templateUrl: 'users/views/edit-user.client.view.html',
            size: 'lg'
        });
    };

    //don't work. version angular? injected
    //$scope.cancel = function () {
    	//$uibModalInstance.close();
  	//};

}]);