var ApiUrlPrefix = "/";

app.controller('addemployeeCtrl', function ($rootScope, $scope, $http, $state, $stateParams,loginAuthentication, $interval, $window, $location, $timeout,$filter) {

//API to fetch the details of roleslistforhr in the Employee Registration
$scope.userinfodata = loginAuthentication.getLoggedInUserInfo();
$http.get(ApiUrlPrefix + "roleslistforhr").success(function (data) {
$scope.roles=data;
}); 

function DataCall() {
$http.get(ApiUrlPrefix + "fetchAllEmployeeDataByHR").success(function (data) {
$scope.currentEmployeeList = data;

//console.log(data);
});
}
DataCall();

//API to fetch the details of roleslist in the Employee Registration
$scope.rolechanged = function () {
$http.get(ApiUrlPrefix + "roleslistforhr").success(function (data) {
angular.forEach(data, function (obj) {
if (obj.RoleID == $scope.RoleID) {
$scope.roleid = obj.RoleID;
}
});
});

if ($scope.RoleID == "null") {
$scope.roleid = null;
}
}

//API to fetch the details of reportingheadslist in the Employee Registration
$http.get(ApiUrlPrefix + "fetchAllReportingHeads").success(function (data) {
$scope.managers=data;
});

$scope.managerchanged = function () {
$http.get(ApiUrlPrefix + "fetchAllReportingHeads").success(function (data) {
angular.forEach(data, function (obj) {
if (obj.ReportingManager == $scope.ReportingManager) {
$scope.ReportingManager = obj.ReportingManager;
}
});
});
if ($scope.ReportingManager == "null") {
$scope.ReportingManager = "null";
}
} 

//API to fetch the details of branchlist in the Employee Registration
$http.get(ApiUrlPrefix + "branchlistforhr").success(function (data) {
$scope.branchlist=data;
});

$scope.branchchanged = function () {
$http.get(ApiUrlPrefix + "branchlistforhr").success(function (data) {
angular.forEach(data, function (obj) {
if (obj.BranchId == $scope.BranchId) {
$scope.branchid = obj.BranchId;
}
});
});
if ($scope.BranchId == "null") {
$scope.branchid = null;
}
}

//API to fetch the details of statusmasterlist in the Employee Registration
$http.get(ApiUrlPrefix + "fetchstatusmasterlist").success(function (data) {
    $scope.statusmaster=data;
    });

$scope.statusmasterchanged = function () {
    $http.get(ApiUrlPrefix + "fetchstatusmasterlist").success(function (data) {
    angular.forEach(data, function (obj) {
    if (obj.Id == $scope.Id) {
    $scope.id = obj.Id;
    }
    });
    });
    if ($scope.Id == "null") {
    $scope.id = null;
    }
    }

    //API to fetch the details of business unit list in the Employee Registration
   $http.get(ApiUrlPrefix + "fetchbusinessunitmasterlist").success(function (data) {
    $scope.bumaster=data;
    });

    $scope.bumasterchanged = function () {
    $http.get(ApiUrlPrefix + "fetchbusinessunitmasterlist").success(function (data) {
    angular.forEach(data, function (obj) {
    if (obj.Id == $scope.Id) {
    $scope.id = obj.Id;
    }
    });
    });
    if ($scope.Id == "null") {
    $scope.id = null;
    }
    }

//fetch qualification master details for employee registration
$http.get(ApiUrlPrefix + "fetchqualificationList").success(function (data) {
$scope.qualificationmaster=data;
});

$scope.qualificationmasterchanged = function () {
$http.get(ApiUrlPrefix + "fetchqualificationList").success(function (data) {
angular.forEach(data, function (obj) {
if (obj.Id == $scope.Id) {
$scope.id = obj.Id;
}
});
});
if ($scope.Id == "null") {
$scope.id = null;
}
}

//fetch qualification master details for employee registration
$http.get(ApiUrlPrefix + "fetchdesignationlist").success(function (data) {
    $scope.designationmaster=data;
    });
    
    $scope.designationmasterchanged = function () {
    $http.get(ApiUrlPrefix + "fetchdesignationlist").success(function (data) {
    angular.forEach(data, function (obj) {
    if (obj.Id == $scope.Id) {
    $scope.id = obj.Id;
    }
    });
    });
    if ($scope.Id == "null") {
    $scope.id = null;
    }
    }
//API to fetch the details of skillmasterlist in the Employee Registration
$http.get(ApiUrlPrefix + "skillmasterlist").success(function (data) {
$scope.skillmasterlist=data;
});

$scope.skillmasterchanged = function () {
$http.get(ApiUrlPrefix + "skillmasterlist").success(function (data) {
angular.forEach(data, function (obj) {
if (obj.SkillId == $scope.SkillId) {
$scope.skillid = obj.SkillId;
}
});
});
if ($scope.SkillId == "null") {
$scope.skillid = null;
}
}

//API to fetch the details of skillmasterlist in the Employee Registration
$http.get(ApiUrlPrefix + "skillmasterlist").success(function (data) {
$scope.skillmasterlist=data;
});

$scope.skillmasterchanged = function () {
$http.get(ApiUrlPrefix + "skillmasterlist").success(function (data) {
angular.forEach(data, function (obj) {
if (obj.SkillId == $scope.SkillId) {
$scope.skillid = obj.SkillId;
}
});
});
if ($scope.SkillId == "null") {
$scope.skillid = null;
}
}
//Register Employee Data            
 
$scope.addEmployeeData = function () {

$scope.firstDate = $filter('date')($scope.DateOfBirth, 'yyyy-MM-dd');
$scope.secondDate = $filter('date')($scope.DateOfJoining, 'yyyy-MM-dd');


if($scope.FirstName== undefined && $scope.LastName== undefined && $scope.DesignationId== undefined
&& $scope.roleid== undefined && $scope.branchid== undefined && $scope.PriorExprience== undefined
&& $scope.email== undefined && $scope.Password== undefined && $scope.ReportingManager== undefined
&& $scope.QualificationId== undefined && $scope.ContactNo== undefined && $scope.SkillId== undefined
&& $scope.Gender== undefined && $scope.IsReportingHead== undefined && $scope.firstDate== undefined && $scope.secondDate== undefined && $scope.AccessToResourceDatabase== undefined && $scope.EmployeeId== undefined){
alert("Please enter all the mandatory fields");
}else if($scope.EmployeeId== null || $scope.EmployeeId== undefined||$scope.EmployeeId==""){
alert("Please enter Employee ID");
}else if($scope.DesignationId== null || $scope.DesignationId== undefined||$scope.DesignationId==""){
alert("Please select Designation");
}else if($scope.roleid== null || $scope.roleid== undefined||$scope.roleid==""){
alert("Please select Role");
}else if($scope.BuId== null || $scope.BuId== undefined||$scope.BuId==""){
alert("Please select Business Unit");
}else if($scope.branchid== null || $scope.branchid== undefined||$scope.branchid==""){
alert("Please select Branch");
}else if($scope.PriorExprience== null || $scope.PriorExprience== undefined||$scope.PriorExprience==""){
alert("Please enter Prior Exprience");
}else if($scope.email== null || $scope.email== undefined||$scope.email==""){
alert("Please enter Email");
}else if($scope.Password== null || $scope.Password== undefined||$scope.Password==""){
alert("Please enter Password");
}else if($scope.ReportingManager== null || $scope.ReportingManager== undefined||$scope.ReportingManager==""){
alert("Please select Reporting Manager");
}else if($scope.Availability== null || $scope.Availability== undefined||$scope.Availability==""){
alert("Please select Availability");
}else if($scope.QualificationId== null || $scope.QualificationId== undefined||$scope.QualificationId==""){
alert("Please select Highest Qualification");
}else if($scope.ContactNo== null || $scope.ContactNo== undefined||$scope.ContactNo==""){
alert("Please enter Contact No.");
}else if($scope.SkillId== null || $scope.SkillId== undefined||$scope.SkillId==""){
alert("Please select Primary Skill");
}else if($scope.Gender== null || $scope.Gender== undefined||$scope.Gender==""){
alert("Please check gender");
}else if($scope.IsReportingHead== null || $scope.IsReportingHead== undefined||$scope.IsReportingHead==""){
alert("Please select whether user is Reporting Head");
/*}else if($scope.AvailabilityStatus== null || $scope.AvailabilityStatus== undefined||$scope.AvailabilityStatus==""){
alert("Please select Availability Status"); */
}else if($scope.firstDate== null || $scope.firstDate== undefined||$scope.firstDate==""){
alert("Please enter Date of Birth");
}else if($scope.secondDate== null || $scope.secondDate== undefined||$scope.secondDate==""){
alert("Please enter Date Of Joining");
}else if($scope.AccessToResourceDatabase== null || $scope.AccessToResourceDatabase== undefined||$scope.AccessToResourceDatabase==""){
alert("Please select Access to Resource Database");
} else if($scope.FirstName== null || $scope.FirstName== undefined||$scope.FirstName==""){
alert("Please enter First Name");
} else if($scope.ContactNo.length<10){
alert("Please enter valid Contact number");
}       
else {

var addEmployeeData = {
"FirstName": $scope.FirstName
, "LastName": $scope.LastName
, "DesignationId": $scope.DesignationId
, "RoleId": $scope.roleid
, "BranchId": $scope.branchid
,"PriorExprience": $scope.PriorExprience
, "email": $scope.email
, "Password": $scope.Password
, "ReportingManager": $scope.ReportingManager
, "QualificationId": $scope.QualificationId
, "ContactNo": $scope.ContactNo
, "PrimarySkill": $scope.SkillId
,"BuId": $scope.BuId
,"Availability": $scope.Availability
, "Gender": $scope.Gender
, "IsReportingHead": $scope.IsReportingHead
//, "AvailabilityStatus": $scope.AvailabilityStatus
, "DateOfBirth": $scope.firstDate
, "DateOfJoining": $scope.secondDate
, "AccessToResourceDatabase": $scope.AccessToResourceDatabase
, "EmployeeId": $scope.EmployeeId
, "CreatedBy": $scope.userinfodata.Username

};
console.log(addEmployeeData);
if($scope.FirstName != null && $scope.EmployeeId != null && !$scope.roleid != null && $scope.email != null && $scope.Password != null && $scope.ContactNo != null && $scope.IsReportingHead != null && $scope.DateOfBirth != null) {
$http.post(ApiUrlPrefix + "addEmployeeDataByHr", addEmployeeData ).then(function (response) {
//console.log(response);
if (response.data == "id already exists") {
alert("Employee ID already exists, try with another Employee ID");
} else if (response.data == "email alraedy exists"){
alert("Email already exists, try with another Email ID");
} else if (response.data == "email ,employeeId and ContactNo  exists"){
alert("Email ,Employee ID and Contact No. already exists");
} else if (response.data == "ContactNo already exists"){
alert("Contact No. already exists");
}
else if (response.data != "") {
alert("Employee details added successfully ");
$location.path( "/home" );
$scope.Clear();

}
else {
alert(response.data);
}
},function (data){
console.log("error data");
});

}
}


//$scope.Clear();
}

//Clearing Employee Data
$scope.Clear = function () {
$scope.FirstName = "";
$scope.BuId = "";
$scope.LastName = "";
$scope.DesignationId = "";
$scope.RoleID = "";
$scope.BranchId = "";
$scope.PriorExprience = "";
$scope.email = "";
$scope.Password = "";
$scope.EmployeeId = 0;
$scope.QualificationId = "";
$scope.ContactNo = "";
$scope.SkillId = "";
$scope.Gender = "";
$scope.IsReportingHead = "";
$scope.Availability = "";
$scope.DateOfBirth = "";
$scope.DateOfJoining = "";
$scope.ProfilePhoto = "";
$scope.AccessToResourceDatabase = "";
$scope.EmployeeId = "";
$scope.ReportingManager = "";
$scope.checkEmail = "";
}

//Check Email validation in the Employee Registration
$scope.checkEmail = function(){
var email = document.getElementById('email');
var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if (!filter.test(email.value)) {
alert('Please provide a valid email address');
email.focus;
return false;
}
}

//Check DateOfBirth validation in the Employee Registration
$scope.checkDob = $(function () {
$('input[data-relmax]').each(function () {
var oldVal = $(this).prop('value');
var relmax = $(this).data('relmax');
var max = new Date();
max.setFullYear(max.getFullYear() + relmax);
$.prop(this, 'max', $(this).prop('valueAsDate', max).val());
$.prop(this, 'value', oldVal);
});
});

/*
$scope.onlyNumbers = function(event){   
    var keys={
        'up': 38,'right':39,'down':40,'left':37,
        'escape':27,'backspace':8,'tab':9,'enter':13,'del':46,
        '0':48,'1':49,'2':50,'3':51,'4':52,'5':53,'6':54,'7':55,'8':56,'9':57
    };
    for(var index in keys) {
        if (!keys.hasOwnProperty(index)) continue;
        if (event.charCode==keys[index]||event.keyCode==keys[index]) {
            return; //default event
        }
    }   
    event.preventDefault();
}; */


}); 