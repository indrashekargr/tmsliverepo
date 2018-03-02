/*Controller for Home Page Starts Here*/
var ApiUrlPrefix = "/";
app.controller('TrackController', function ($scope, $http, $state, $stateParams, $window, $location, loginAuthentication, $timeout) {
	$scope.state = $state;
	window.$scope = $scope;
	
	//Fetch all employee tracking skills for HR
	$http.get(ApiUrlPrefix + "fetchtrackingskillsforhr").success(function (data) {
				$scope.trackingdata=data;
			},function(data){
			console.log(data);
	},function(error){
			console.log(error);
		});


		$scope.searchemployeename = function(name)
	{
	$http.get(ApiUrlPrefix + "searchEmployeeDataByEname/name=" + name).success(function (data) {
				$scope.searchemployeebyname=data;
				//console.log(data);
			},function(data){
			console.log(data);
	},function(error){
			console.log(error);
		});
		
	}
	

}); 