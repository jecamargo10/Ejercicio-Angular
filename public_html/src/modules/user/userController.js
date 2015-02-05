(function () {
	var app = angular.module('userModule', []);
 
	app.controller('userController', ['$scope', function ($scope) {
			$scope.user = {};
                       

                $scope.showForm = false;
			this.showForm = function () {
				$scope.showForm = true;
			};
			this.save = function () 
                        

                {
                    var rta =String($scope.user.nacio);
                    rta  = rta.substr(0,15);
                    
   document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta es: "+ "El usuario: " + $scope.user.firstName + " " + $scope.user.lastName + " nació el " + rta +"</div>";;

                    
			};
		}]);
            

 
	app.directive('userForm', [function () {
			return {
				restrict: 'E',
				templateUrl: 'src/modules/user/userTemplates.html'
			};
		}]);
})();
