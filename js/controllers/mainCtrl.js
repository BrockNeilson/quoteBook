var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, mainService){

	$scope.showAdds = false;
	$scope.showRemoves = false;
	$scope.showFilters = false;

	$scope.showAdd = function(){
		$scope.showAdds = !$scope.showAdds;
		$scope.showRemoves = false;
		$scope.showFilters = false;
	}

	$scope.showRemove = function(){
		$scope.showRemoves = !$scope.showRemoves;
		$scope.showAdds = false;
		$scope.showFilters = false;
	}

	$scope.showFilter = function(){
		$scope.showFilters = !$scope.showFilters;
		$scope.showAdds = false;
		$scope.showRemoves = false;
	}

	$scope.getData = function(){
		$scope.quotes = mainService.getData();
	};
	$scope.getData();

	$scope.addData = function(){
		mainService.addData($scope.quoteAdd, $scope.authorAdd);
		$scope.quoteAdd = '';
		$scope.authorAdd = '';
	};

	$scope.removeData = function(){
		mainService.removeData($scope.quoteRemove);
		$scope.quoteRemove = '';
	};

});