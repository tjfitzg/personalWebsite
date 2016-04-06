angular.module("tylerFitzgerald").controller('meController',['$scope','$location','$routeParams','$route','$window',function($scope,$location,$route,$routeParams,$window){
		$window.scrollTo($window.width/2, 0);

		$scope.tabs = ['About Me','Experience','Resume','Contact','Example Web App'];

		
		switch($location.$$path){
			case "/":
				$scope.activeTab = 0;
			break;
			case "/experience":
				$scope.activeTab = 1;
			break;
			case "/resume":
				$scope.activeTab = 2;
			break;
			case "/contact":
				$scope.activeTab = 3;
			break;
			case "/activeTab":
				$scope.activeTab = 4;
			break;
			default:
				$scope.activeTab = 0;
		}

		$scope.navSwitch = function(tabId){
			switch(tabId){
				case 0:
					$scope.activeTab = 0;
					$location.path('/');
				break;
				case 1:
					$scope.activeTab = 1;
					$location.path('/experience');
				break;
				case 2:
					$scope.activeTab = 2;
					$location.path('/resume');
				break;
				case 3:
					$scope.activeTab = 3;
					$location.path('/contact');
				break;
				case 4:
					$scope.activeTab = 4;
					$location.path('/webapp');
				break;
			}
		}

}]);

