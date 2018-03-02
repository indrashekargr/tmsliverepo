/*Controller for Home Page Starts Here*/
var ApiUrlPrefix = "/";
app.controller('SkillsController', function ($scope, $http, $state, $stateParams, $window, $location, loginAuthentication, $timeout) {

$scope.userinfodata = loginAuthentication.getLoggedInUserInfo();
//console.log($scope.userinfodata);
//console.log($scope.userinfodata.EmployeeId);

$scope.state = $state;
window.$scope = $scope;
var UserId=null;

// Fetch all category list for search in the resource skill 
$http.get(ApiUrlPrefix + 'fetchcategorylist').success(function (data) {
$scope.categorylist=data;
},function(data){
console.log(data);
},function(error){
console.log(error);
});

// Fetch all status master data for search in the resource skill 
$http.get(ApiUrlPrefix + 'fetchstatusmasterlist').success(function (data) {
$scope.statuslist=data;
},function(data){
console.log(data);
},function(error){
console.log(error);
});

// Fetch all employee resource skills for reporting manager

function employeeManagerList() {

$http.get(ApiUrlPrefix + "fetchEmployeeMasterdetailsByManager/" + $scope.userinfodata.EmployeeId).success(function (response) {
$scope.managerEmployeeList = response;
//console.log(response);
});
}
employeeManagerList();

// Fetch All Employee Data based on Business unit
function employeeBuList() {
    
    $http.get(ApiUrlPrefix + "fetchEmployeeMasterDetailsBasedOnBuId/" + $scope.userinfodata.BuId).success(function (response) {
    $scope.buEmployeeList = response;
    
    //console.log(response);
    });
    }
    employeeBuList();

function roleManagerList() {

$http.get(ApiUrlPrefix + "fetchemployeedatabyadmin/" + $scope.userinfodata.EmployeeId).success(function (response) {
$scope.roleEmployeeList = response;
//console.log(response);
});
}
roleManagerList();


//Fetch all Skill list for search

$scope.getskilllist = function(a){
$http.get(ApiUrlPrefix + 'fetchskillslist/'+a).success(function (data) {
$scope.skilllist=data;
//console.log(data);
},function(error){
console.log(error);
});
}

// Fetch All Employee data in the resource skill

$http.get(ApiUrlPrefix + 'fetchAllEmployeeDataByHR').success(function (data) {
$scope.employeedata=data;
//console.log(data);
},function(data){
console.log(data);
},function(error){
console.log(error);
});

//Update Employee resource skills 
$scope.skillUpdate = function (a,b,c,d,i){
$scope.ratings = [{"RatingID" : 1},{"RatingID" : 2},{"RatingID" : 3},{"RatingID" : 4},{"RatingID" : 5}];
UserId = a;
$scope.CurEmployeeId = b;
$scope.Employee_First_Name=c;
$scope.Employee_Last_Name=d;

$scope.Role=i;
$http.get(ApiUrlPrefix + 'fetchResourceSkillDetailsBasedOnUser/'+UserId).success(function (data) {
$scope.skilldata=data;
 

//console.log(data);
},function(data){
console.log(data);
},function(error){
console.log(error);
});

}

// Add Employee resource skill
$scope.addResourceskills = function(b, c,d,ci,fn,ln) {
console.log(d+" "+b+" "+c);
if(d== undefined && b== undefined && c== undefined){
alert("Please select all the mandatory fields");
$("#AddSkillModal").modal("show");
}
else if(d== null || d== undefined||d==""){
alert("Please select Category");
}
else if(b== null || b== undefined||b==""){
alert("Please select Skill");
}
else if(c== null ||c== undefined|| c==""){

alert("Please select Rating");
}


else
{
var newSkills = {
"UserId": UserId
, "SkillId": b
, "Rating": c
, "CategoryId": d
, "CreatedBy": $scope.userinfodata.Username
};

$scope.CurEmployeeId =ci ;
$scope.Employee_First_Name=fn;
$scope.Employee_Last_Name =ln;

//console.log(newSkills);
$http.post(ApiUrlPrefix + 'addEmployeeResourceSkillsByHR ', newSkills).then(function (response) {
//console.log(response);	
alert(response.data);
$scope.Clear();
$("#AddSkillModal").modal("hide");
$http.get(ApiUrlPrefix + 'fetchResourceSkillDetailsBasedOnUser/'+UserId).success(function (data) {
    $scope.skilldata=data;
    });
},function(error){
console.log(error);
});
$scope.skillUpdate(UserId,ci,fn,ln);
}
} 

$scope.updateskill= function (a,b,c,d,e,j,w)	{

$scope.skill = {
"categoryName":a,
"skillName":b,
"Rating":c
};
$scope.rating=c;
$scope.CurEmployeeId = e;
$scope.Employee_First_Name=j;
$scope.Employee_Last_Name=w;

//console.log($scope.Employee_First_Name);
//console.log($scope.skill);
$scope.editskill= function (f)
{

if(f == null || f == undefined || f == ""){
alert("Please select Rating");
} else {
var skill = {
"Rating": f
, "EmployeeSkillId": d
, "UserId": UserId
,"ModifiedBy":$scope.userinfodata.Username

 
}
//console.log(skill);
$http.put(ApiUrlPrefix + 'updateEmployeeResourceSkillsByHR', skill).success(function (data) {
//console.log(data);
alert(data);
$("#EditSkillModal").modal("hide");
$http.get(ApiUrlPrefix + "fetchResourceSkillDetailsBasedOnUser/" +UserId).success(function (data) {
$scope.skilldata = data;
//alert("Updated successfully!!"); 

});
}).error(function (data) {
$scope.error = "An error has occured while deleting! " + data;                
});
}  
}
}

//Delete employee resource skill
$scope.deleteskills = function(e,ei,fn,ln) {
if (confirm("Are you sure you want to delete this employee's resource skill record?")) {
var deleteSkills = {
"EmployeeSkillId": e
, "UserId": UserId

};
$scope.CurEmployeeId =ei ;
$scope.Employee_First_Name=fn;
$scope.Employee_Last_Name =ln;

console.log(e);
//console.log(UserId);
//console.log(deleteSkills);
$http.put(ApiUrlPrefix + 'deleteEmployeeResourceSkillsByHR', deleteSkills).then(function (response) {
//console.log(response);	
alert(response.data);
$http.get(ApiUrlPrefix + "fetchResourceSkillDetailsBasedOnUser/" +UserId).success(function (data) {
    $scope.skilldata = data;
    //alert("Updated successfully!!"); 
    
    });
},function(error){
console.log(error);
$scope.error = "An error has occured while deleting! " + data; 
});
$scope.skillUpdate(UserId,ei,fn,ln);
}
}

//Search employee resource skills data for hr
$scope.searchskill = function(q,r,s,t)
{
    $scope.ratings = [{"RatingID" : 1},{"RatingID" : 2},{"RatingID" : 3},{"RatingID" : 4},{"RatingID" : 5}];
    $scope.selected = false;
    $scope.selectAll = function() {
        $scope.selectedValues = $scope.values;
      }
console.log(q+" "+r+" "+s+ " "+t);
if(q== undefined && r== undefined && s== undefined && t== undefined){
alert("Please select all the mandatory fields");
}
else if(q== null || q== undefined||q==""){
alert("Please select Category");
}
else if(r== null || r== undefined||r==""){
alert("Please select Skill"); 
}
else if(s== null ||s== undefined|| s==""){
alert("Please select Rating");
} 
else if(t== null ||t== undefined|| t==""){
alert("Please select Availability");
}
/*else if(t== null || t== undefined||t==""){
alert("Please select Availability");
} */
else{

//$http.get(ApiUrlPrefix + 'searchEmployeeResourceSkillsForHR/CategoryId='+q + "/SkillId="+ r + "/Rating=" + s + "/AvailabilityStatus=" + t).success(function (data) {
$http.get(ApiUrlPrefix + 'searchEmployeeResourceSkillsForHR/CategoryId='+q + "/SkillId="+ r + "/Rating=" +s +"/Availability="+t).success(function (data) {
$scope.employeedata=data;
$scope.managerEmployeeList = data;
if( $scope.ratings){
$http.get(ApiUrlPrefix + 'searchEmployeeResourceSkillsAllRatingForHR/CategoryId='+q + "/SkillId="+ r  +"/Availability="+t).success(function (data) {
    $scope.employeedata=data;
   $scope.managerEmployeeList = data;
    },function(data){
    console.log(data);
    },function(error){
    console.log(error);
    }); 
}
},function(data){
console.log(data);
},function(error){
console.log(error);
});




}

}

// Search employee resource skill data for manager login
$scope.searchskillformanager = function(q,r,s,t)
{

console.log(q+" "+r+" "+s+ " "+t);
if(q== undefined && r== undefined && s== undefined && t== undefined){
alert("Please select all the mandatory fields");
}
else if(q== null || q== undefined||q==""){
alert("Please select Category");
}
else if(r== null || r== undefined||r==""){
alert("Please select Skill");
}
else if(s== null ||s== undefined|| s==""){
alert("Please select Rating");
}
else if(t== null || t== undefined||t==""){
alert("Please select Availability");
} 
else{

//$http.get(ApiUrlPrefix + 'searchEmployeeResourceSkillsForManager/CategoryId='+q + "/SkillId="+ r + "/Rating=" + s + "/AvailabilityStatus=" + t + "/ReportingManager=" +$scope.userinfodata.EmployeeId).success(function (data) {
$http.get(ApiUrlPrefix + 'searchEmployeeResourceSkillsForManager/CategoryId='+q + "/SkillId="+ r + "/Rating=" + s + "/Availability="+ t + "/ReportingManager=" +$scope.userinfodata.EmployeeId).success(function (data) {
$scope.managerEmployeeList = data;
$scope.buEmployeeList = data;
},function(data){
console.log(data);
},function(error){
console.log(error);
});

$http.get(ApiUrlPrefix + 'searchEmployeeResourceSkillsForBU/CategoryId='+q + "/SkillId="+ r + "/Rating=" + s + "/Availability="+ t + "/BuId=" +$scope.userinfodata.BuId).success(function (data) {
    $scope.managerEmployeeList = data;
    $scope.buEmployeeList = data;
    },function(data){
    console.log(data);
    },function(error){
    console.log(error);
    }); 


}

}



$scope.searchemployee = function(name)
{
$http.get(ApiUrlPrefix + 'searchEmployeeDataByEname/name=' + name).success(function (data) {
$scope.searchemployee=data;
//console.log(data);
},function(data){
console.log(data);
},function(error){
console.log(error);
});

}

//Clear add employee resource skill 
$scope.Clear = function () {
$scope.skill1 = "";
$scope.Rating = "";
$scope.category1 = "";

}


}); 