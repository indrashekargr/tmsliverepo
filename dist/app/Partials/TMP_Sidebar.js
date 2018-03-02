var userInfo;
/*Controller for Home Page Starts Here*/
var LoginPageUrl = "/";
app.controller('SidebarController', function ($rootScope, $scope, $q, $http, $state, $stateParams, $interval, $window, $location, loginAuthentication) {
    $scope.state = $state;
    window.$scope = $scope;
    $scope.userInfo = loginAuthentication.getLoggedInUserInfo();
    //userInfo = loginAuthentication.getLoggedInUserInfo();
	console.log($scope.userInfo.Username);
	
	//Fetch Employee Data based on the Username
	 function employeeHeader() {

        $http.get(ApiUrlPrefix + "fetchEmployeeMasterDetailsBasedOnUsername/" + $scope.userInfo.Username).success(function (response) {
            $scope.EmployeeList = response[0];

            //console.log(response);
        });
      }
   employeeHeader();
	
	
    $scope.logout = function () {
       // alert("logout");
        var deferred = $q.defer();
        userInfo = null;
        $scope.userInfo = null;
        $window.sessionStorage["userInfo"] = null;
        deferred.resolve();
        $window.location.href = LoginPageUrl;
        //$window.location.reload();
        return deferred.promise;
    }
});
/*Controller for Home Page Ends Here*/