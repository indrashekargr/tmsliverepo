/*Login Controller Starts here*/
app.controller('LoginController', function ($scope, $http, $state, $stateParams, $window, $location, loginAuthentication, $timeout) {
$scope.state = $state;
window.$scope = $scope;
$scope.validateUser = function (username, password) {
$scope.$broadcast('show-errors-check-validity');
if ($scope.Username== null || $scope.Username== undefined||$scope.Username=="") {
alert("Please enter the valid Username and Password");
}
else if ($scope.Password== null || $scope.Password== undefined||$scope.Password=="") {
alert("Please enter the valid Username and Password");
}
else {
loginAuthentication.login(username, password).then(function (result) {
$scope.userInfo = result;
//console.log(result);

if($scope.userInfo.RoleId==1){
$scope.state.go("profile");
} else if($scope.userInfo.RoleId==2 && $scope.userInfo.IsReportingHead==1 || $scope.userInfo.RoleId==4 && $scope.userInfo.IsReportingHead==1 || $scope.userInfo.RoleId==4){
 $scope.state.go("resourceskills");

}else if ($scope.userInfo.RoleId==2){
$scope.state.go("skillmaster");
}
else{
$scope.state.go("home");
}

});
}
$scope.state.go("login");
}
$scope.$on('$locationChangeStart', function (event, next, current) {
event.preventDefault();
});
document.querySelector("form").addEventListener("invalid", function (event) {
event.preventDefault();
}, true);
}); /*Login Controller Ends here*/  