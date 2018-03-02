var ApiUrlPrefix = "/";
app.controller("StatusMasterCtrl", function ($rootScope, loginAuthentication, $scope, $http, $state, $stateParams, $interval, $window, $location, $timeout, $filter) {
$scope.userinfodata = loginAuthentication.getLoggedInUserInfo();
//console.log($scope.userinfodata);
$scope.state = $state;
window.$scope = $scope;

var Id=null;

getStatusList();
function getStatusList() {
$http.get(ApiUrlPrefix + "fetchstatusmasterlist").success(function (data) {
$scope.getStatusList = data;
//console.log(data);
});
}

function SearchCall() {
$http.get(ApiUrlPrefix + "fetchstatusmasterlist").success(function (data) {
$scope.people = data;
//console.log(data);

});
}
SearchCall();

$http.get(ApiUrlPrefix + 'fetchstatusmasterlist').success(function (data) {
$scope.statuslist=data;
},function(data){
console.log(data);
},function(error){
console.log(error);
});

$scope.AddStatus = function () {

if($scope.StatusName== undefined && $scope.Description== undefined) {
  alert("Please enter all the mandatory fields");
  $("#AddStatusModal").modal("show");
} else if($scope.StatusName== null || $scope.StatusName== undefined||$scope.StatusName==""){
    	alert("Please enter Status name");
}else if($scope.Description== null || $scope.Description== undefined||$scope.Description==""){
    	alert("Please enter Description");
} else {
  var statuslist = {
    "StatusName": $scope.StatusName
    , "Description": $scope.Description
    };
    $http.post(ApiUrlPrefix + 'addstatusmasterbyadmin ', statuslist).then(function (response) {
    //  console.log(response);	
	  $("#AddStatusModal").modal("hide");
      alert("Status details added successfully ");
	  
	  
      $location.path( "/statusmaster" );
          },function(error){
      console.log(error);
      });
getStatusList();
$scope.Clear(); 
}

}

$scope.Clear = function () {
  $scope.StatusName = "";
  $scope.Description = "";
}	


$scope.editstatus = function (a, b, c) {
$scope.status = {
"StatusName": b
, "Description": c
}
$scope.updateStatus = function () {
	
	if($scope.status.StatusName== undefined && $scope.status.Description== undefined) {
  alert("Please enter all the mandatory fields");
  
} else if($scope.status.StatusName== null || $scope.status.StatusName== undefined||$scope.status.StatusName==""){
    	alert("Please enter Status name");
}else if($scope.status.Description== null || $scope.status.Description== undefined||$scope.status.Description==""){
    	alert("Please enter Description");
}
	
else{
	
var updateStatus = {
"Id": a
, "StatusName": $scope.status.StatusName
, "Description": $scope.status.Description
};
//console.log(updateStatus);
$http.put(ApiUrlPrefix + 'upadatestatusmasterbyadmin', updateStatus).success(function (data) {
$('#exampleModaladd').modal('hide');
$http.get(ApiUrlPrefix + 'fetchstatusmasterlist').success(function (data) {
alert("Status updated successfully");
$scope.getStatusList = data;
});
}).error(function (data) {
$scope.error = "An error has occured while updating! " + data;                
});
}
}
}

$scope.subStatusModal = function () {
$scope.statusname = null;
$scope.statusnameDescription = null;
}

$scope.AddStatusModaldata = function () {
$scope.StatusName = null;
$scope.Description = null;
}
});