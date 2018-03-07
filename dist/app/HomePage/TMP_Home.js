var ApiUrlPrefix = "/";

app.controller('homeCtrl', function ($rootScope, $scope, $http, $state, $stateParams,loginAuthentication, $interval, $window, $location, $timeout,$filter) {

$scope.userinfodata = loginAuthentication.getLoggedInUserInfo();
console.log($scope.userinfodata);
console.log($scope.userinfodata.EmployeeId);
console.log($scope.userinfodata.BuId);
//console.log($scope.userinfodata.currentUser);
$scope.state = $state;
window.$scope = $scope;

//fetch all Employees datalist using PCC Application Server
// Fetch All Employee Data in the home with the HR login

    $scope.allemployeeList = function(){
        var employeedata= confirm("Do you really want to fetch data from PCC Application server?");
        if (employeedata== true){
            alert("Started processing...");
            $http.get(ApiUrlPrefix + "externalemployeeRepository").success(function (data) {
                // $scope.allemployeeList = data;
                // console.log( $scope.allemployeeList);
                console.log(data);
            })
        }else{
            //alert("No update from PCC Application");
            return false;
        }
    }


  /*  $scope.allemployeeList = function(){

    $http.get(ApiUrlPrefix + "externalemployeeRepository").success(function (data) {
        // $scope.allemployeeList = data;
        // console.log( $scope.allemployeeList);
        console.log(data);
    });
}
// allemployeeList(); */


   //Reset Button
    $scope.reset  = function(){
        $http.get(ApiUrlPrefix + "fetchAllEmployeeDataByHR").success(function (data) {
            $scope.currentEmployeeList = data;
        });
    }
    // allemployeeList();



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
//$scope.employeedata=data;
$scope.currentEmployeeList = data;
//$scope.managerEmployeeList = data;

},function(data){
console.log(data);
},function(error){
console.log(error);
});

/*if( $scope.ratings){
    $http.get(ApiUrlPrefix + 'searchEmployeeResourceSkillsAllRatingForHR/CategoryId='+q + "/SkillId="+ r  +"/Availability="+t).success(function (data) {
       // $scope.employeedata=data;
       $scope.managerEmployeeList = data;
       $scope.currentEmployeeList = data;
        },function(data){
        console.log(data);
        },function(error){
        console.log(error);
        }); 
    } */
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
               // $scope.buEmployeeList = data;
            },function(data){
                console.log(data);
            },function(error){
                console.log(error);
            });

            $http.get(ApiUrlPrefix + 'searchEmployeeResourceSkillsForBU/CategoryId='+q + "/SkillId="+ r + "/Rating=" + s + "/Availability="+ t + "/BuId=" +$scope.userinfodata.BuId).success(function (data) {
               // $scope.managerEmployeeList = data;
                $scope.buEmployeeList = data;
            },function(data){
                console.log(data);
            },function(error){
                console.log(error);
            });


        }

    }

//Fetch all employee tracking skills for HR
$http.get(ApiUrlPrefix + "fetchtrackingskillsforhr").success(function (data) {
    $scope.trackingdata=data;
},function(data){
console.log(data);
},function(error){
console.log(error);
});

// Fetch All Employee Data in the home with the HR login
function DataCall() {
$http.get(ApiUrlPrefix + "fetchAllEmployeeDataByHR").success(function (data) {
$scope.currentEmployeeList = data;

//console.log(data);
});
}
DataCall();

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


//Fetch all Skill list for search

$scope.getskilllist = function(a){
    $http.get(ApiUrlPrefix + 'fetchskillslist/'+a).success(function (data) {
    $scope.skilllist=data;
    //console.log(data);
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
    $scope.AddResourceClear();
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

    $scope.AddResourceClear = function () {
        $scope.category1 = "";
        $scope.skill1 = "";
        $scope.Rating = "";
    }


  // Add Employee Tracking Profile
  $scope.addTracking = function(a,b,c,d,e,ci,fn,ln) {
    // c = $filter('date')($scope.FromDate, 'yyyy-MM-dd');
    // e = $filter('date')($scope.ToDate, 'yyyy-MM-dd');
 
     $("#AddTrakingModal").modal("show");
     if(a == undefined && b== undefined && e== undefined){
     alert("Please select all the mandatory fields");
     }
     else if(a== null ||a== undefined||a==""){
     alert("Please enter Project Name");
     }
     else if(e== null || e== undefined||e==""){
         alert("Please Select Availability Type");
     }
     else if(b== null || b== undefined||b==""){
     alert("Please enter Company Name");
     }
     else if(c== null ||c== undefined|| c==""){
     
     alert("Please select From Date");
     }
     else
     {
     var newTracking = {
     "UserId": UserId
     , "ProjectName":a
     , "CompanyName": b
     , "FromDate":c
     , "ToDate":d
     , "type": e
     };
     
   $scope.CurEmployeeId =ci ;
     $scope.Employee_First_Name=fn;
     $scope.Employee_Last_Name =ln;
     
     //console.log(newSkills);
     $http.post(ApiUrlPrefix + 'addtrackingemployee ', newTracking).then(function (response) {
     //console.log(response);
         if(response.toDate == null){
             response.toDate == '';
         } else {
             response.toDate == response.toDate;
         }
     alert("Employee Tracking data added successfully");
    // $location.path( "/home" );
     //alert(response.data);
 
     $("#AddTrakingModal").modal("hide");
     $http.get(ApiUrlPrefix + 'fetchemployeetracking/'+UserId).success(function (data) {
         $scope.trackdata=data;
         console.log( $scope.trackdata);
         //$scope.AddTrackClear();
         //console.log(data);
         });
     },function(error){
         console.log(error);
         });
        // $scope.skillUpdate(UserId,ci,fn,ln);
         $scope.trackUpdate(UserId,ci,fn,ln);
         }
         } 

//Fetch all resource skills data based on userId

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


    //Fetch all track profile data based on userId

    $scope.trackUpdate = function (a,b,c,d,i){

        UserId = a;
        $scope.CurEmployeeId = b;
        $scope.Employee_First_Name=c;
        $scope.Employee_Last_Name=d;

        $scope.Role=i;
        $http.get(ApiUrlPrefix + 'fetchemployeetracking/'+UserId).success(function (data) {
            $scope.trackdata=data;
        },function(data){
            console.log(data);
        },function(error){
            console.log(error);
        });

    }
    $scope.AddTrackClear = function () {
        // $scope.trackUpdate={}
    }
//Edit Employee Resource skills based on userId
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

// Fetch All Employee Data for Reporting Manager with manager login
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
    
    console.log(response);
    });
    }
    employeeBuList();

//Search for Employee Data 
function SearchCall() {
$http.get(ApiUrlPrefix + "fetchAllEmployeeDataByHR").success(function (data) {
$scope.people = data;
//console.log(data);

});
}
SearchCall();

//Fetch all roles in the employee updation
$http.get(ApiUrlPrefix + "roleslistforhr").success(function (data) {
$scope.roles=data;
});

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
/*
//Fetch all roles in the employee updation
$http.get(ApiUrlPrefix + "fetchqualificationList").success(function (data) {
    $scope.qualifications=data;
    });
    
    $scope.qualificationchanged = function () {
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

    //Fetch all designation in the employee updation
$http.get(ApiUrlPrefix + "fetchdesignationlist").success(function (data) {
    $scope.designations=data;
    });
    
    $scope.designationchanged = function () {
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
 */
//Fetch all reporting heads in the employee updation
$http.get(ApiUrlPrefix + "fetchAllReportingHeads").success(function (data) {
$scope.managers=data;
$scope.managers = [
    {value: 'null', name: 'No Reporting'}
   
  ];
 
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

//Fetch employee status in the employee updation
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

    //Fetch employee business unit in the employee updation
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

//Fetch primary skills in the employee updation
$http.get(ApiUrlPrefix + "skillmasterlist").success(function (data) {
$scope.skillmasterlist=data;
});
$scope.rhChange=function(a){
	console.log(a);
}
$scope.psChange=function(b){
	console.log(b);
}

$scope.rChange=function(c){
	console.log(c);
}
$scope.aChange=function(d){
    console.log(d);
}
$scope.statusChange=function(e){
    console.log(e);
}

$scope.repChange=function(f){
    console.log(f);
}

$scope.qChange=function(g){
	console.log(g);
}

$scope.dChange=function(h){
	console.log(h);
}
$scope.buChange=function(i){
    console.log(i);
}
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


//Tracking Employee Profile Data

$scope.editTracking = function (a,b,c,d,e,f,g,h,i){
   
    UserId = a;
   $scope.CurEmployeeId = b;
   $scope.Employee_First_Name=c;
    $scope.Employee_Last_Name=d;
    $scope.BusinessUnit = f;
    $scope.integraExperience = g;
    $scope.totalExperience = h;
    $scope.Branch = i;
   
    $scope.reportingmanager = e;
    //$scope.Role=i;
    $http.get(ApiUrlPrefix + 'fetchemployeetracking/'+a).success(function (data) {
        $scope.trackdata=data;
        
        $scope.trackdata[0].addAction = 0;
console.log($scope.trackdata.length);
    for(i=0;i < $scope.trackdata.length;i++ ){

        if($scope.trackdata[i].Action == 1){
            $scope.trackdata[0].addAction = 1


        }
        
    }
    
    console.log( $scope.trackdata);
    
    //console.log(data);
    },function(data){
    console.log(data);
    },function(error){
    console.log(error);
    });
    
    }

//Edit and Updated Employee Data
$scope.editEmployee = function (EmployeeId) {
$scope.AvailabilityStatuses = ['Yes','No'];
$scope.IsReportingHeads = [{name:"Yes",value:1},{name:"No",value:0}];
//console.log(EmployeeId);
 

$http.get(ApiUrlPrefix + "fetchAllReportingHeadsupdate/" +EmployeeId).success(function (data) {
$scope.managers=data;
//console.log("managerlist1"+$scope.managers);
$("#EditTrackModal").modal("hide");
});

$http.get(ApiUrlPrefix + "fetchEmployeeMasterDetailsBasedOnEmpId/" + EmployeeId).success(function (response) {
$scope.employee = response[0];
$("#EditTrackModal").modal("hide");

 $scope.employee.DateOfBirth = new Date($scope.employee.DateOfBirth);
$scope.employee.DateOfJoining = new Date($scope.employee.DateOfJoining);

/*if($scope.employee.DateOfLeaving!=null){

$scope.employee.DateOfLeaving = new Date($scope.employee.DateOfLeaving);
} */


//console.log(response);
//console.log($scope.employee.ReportingManager);

});


$scope.updateEmployee = function () {

  /*   $scope.firstDate = $filter('date')($scope.employee.DateOfBirth, 'yyyy-MM-dd');
     $scope.secondDate = $filter('date')($scope.employee.DateOfJoining, 'yyyy-MM-dd');*/
    // $scope.thirdDate = $filter('date')($scope.employee.DateOfLeaving, 'yyyy-MM-dd');

    // console.log($scope.firstDate);
	 /*if($scope.employee.ContactNo.length<10){
        alert("Contact Number must be 10 digits");
    } else if($scope.employee.EmployeeId== null || $scope.employee.EmployeeId== undefined||$scope.employee.EmployeeId==""){
    	alert("Please enter Employee Id");
    } else if($scope.employee.RoleId== null || $scope.employee.RoleId== undefined||$scope.employee.RoleId==""){
    	alert("Please select Role"); */
    /*} else if($scope.employee.BuId== null || $scope.employee.BuId== undefined||$scope.employee.BuId==""){
    	alert("Please select Business Unit");
    
    }} else if($scope.employee.ContactNo== null || $scope.employee.ContactNo== undefined||$scope.employee.ContactNo==""){
    	alert("Please enter Contact No.");
    /*}else if($scope.employee.PriorExprience== null || $scope.employee.PriorExprience== undefined||$scope.employee.PriorExprience==""){
    	        alert("Please enter Prior Exprience");*/
   /* } else if(i== null || i== undefined||i==""){
    	alert("Please select Availability Status"); */
   /* } else if($scope.firstDate== null || $scope.firstDate== undefined||$scope.firstDate==""){
    	alert("Please enter Date of Birth");
    } else if($scope.secondDate== null || $scope.secondDate== undefined||$scope.secondDate==""){
    	alert("Please enter Date of Joining");
    } else */ if($scope.employee.PrimarySkill== null || $scope.employee.PrimarySkill== undefined|| $scope.employee.PrimarySkill==""){
    	alert("Please select Primary Skill");
    } /*else if($scope.employee.FirstName== null || $scope.employee.FirstName== undefined||$scope.employee.FirstName==""){
        alert("Please enter First Name");
   }*/
   /*else if($scope.employee.Password== null || $scope.employee.Password== undefined||$scope.employee.Password==""){
        alert("Please enter Password");
   } */
    else {

var employee = {
/*"FirstName": $scope.employee.FirstName,*/
"EmployeeId": $scope.employee.EmployeeId,
/*"LastName" : $scope.employee.LastName,*/
/*"BuId":$scope.employee.BuId,*/
//"ContactNo":$scope.employee.ContactNo,
/*"PriorExprience":$scope.employee.PriorExprience,*/
//"AvailabilityStatus":i,
/*"DateOfBirth":$scope.firstDate,
"DateOfJoining":$scope.secondDate,*/
//"DateOfLeaving":$scope.thirdDate,
//"ProfilePhoto":m,
"RoleId":$scope.employee.RoleId,
"PrimarySkill":$scope.employee.PrimarySkill,
/*"ReportingManager":$scope.employee.ReportingManager,*/
"integraExperience":$scope.employee.integraExperience,
"ModifiedBy":$scope.userinfodata.Username,
//"Password":$scope.employee.Password,
"Availability":$scope.employee.Availability,
"IsReportingHead":$scope.employee.IsReportingHead
};



$http.put(ApiUrlPrefix + 'updateEmployeeDataByHR', employee).success(function (data) {
alert("Employee details updated successfully"); 
$("#editEmployee").modal("hide");

$http.get(ApiUrlPrefix + "fetchAllEmployeeDataByHR").success(function (data) {
$scope.currentEmployeeList = data;
});
}).error(function (data) {
$scope.error = "An error has occured while updating! " + data;                
});
}
}
}
$scope.editEmployeeStatus = function (EmployeeId) {
//console.log(EmployeeId);
$scope.AvailabilityStatuses = ['Yes','No'];
$http.get(ApiUrlPrefix + "fetchEmployeeMasterDetailsBasedOnEmpId/" + EmployeeId).success(function (response) {
$scope.employee = response[0];
//console.log(response);
});


$scope.updateEmployeeStatus = function (a,b) {

var employee = {
"EmployeeId": a,
"Availability":b 
};
console.log(employee)
$http.put(ApiUrlPrefix + 'addEmployeeStatusByManager', employee).success(function (data) {
alert("Employee details updated successfully");
$("#editEmployeeStatus").modal("hide");
$http.get(ApiUrlPrefix + "fetchEmployeeMasterdetailsByManager/" + $scope.userinfodata.EmployeeId).success(function (data) {

$scope.managerEmployeeList = data;

//alert("Updated successfully!!"); 
});
}).error(function (data) {
$scope.error = "An error has occured while updating! " + data;                
});
}
}


//Edit Project Tracking Profile for update

$scope.updatetrack= function (Id,UserId,ProjectName,CompanyName,FromDate,ToDate,CurEmployeeId,Employee_First_Name,Employee_Last_Name)	{
    
    
    
    $scope.track = {
    "ProjectName":ProjectName,
    "CompanyName":CompanyName,
    "FromDate":FromDate,
    "ToDate":ToDate,
    "Id": Id,
    "UserId": UserId
    };
    $scope.ToDate=ToDate;
    $scope.CurEmployeeId = CurEmployeeId;
    $scope.Employee_First_Name=Employee_First_Name;
    $scope.Employee_Last_Name=Employee_Last_Name;
    
    //console.log($scope.Employee_First_Name);
    console.log($scope.track);
    $scope.editTrackingProject= function (Id,UserId)
    {
        $scope.firstDate = $filter('date')($scope.track.ToDate, 'yyyy-MM-dd');
       //var firstdate = $filter('date')(new Date($scope.track.ToDate, 'dd/mm/yyyy'));
        //$scope.track.ToDate = new Date($scope.track.ToDate);
    if($scope.firstDate == null || $scope.firstDate == undefined || $scope.firstDate  == ""){
    alert("Please select To date");
    } else {
       
    var track = {
       
    "ToDate":$scope.track.ToDate,
    "Id":Id,
    "UserId":  UserId
    }
    console.log(track);
    $http.put(ApiUrlPrefix + 'upadateemployeetracking', track).success(function (data) {
    //console.log(data);
    alert("Project closed successfully");

    
    $("#EditTrackModal").modal("hide");
    $http.get(ApiUrlPrefix + 'fetchemployeetracking/'+UserId).success(function (data) {
    $scope.trackdata=data;
    //alert("Updated successfully!!"); 
    
    });
    }).error(function (data) {
    $scope.error = "An error has occured while deleting! " + data;                
    });
    }  
    }
    }


// Deleting Employee record based on Employee ID in the home 
$scope.deleteEmployeeProfile = function (EmployeeId) {
if (confirm("Are you sure you want to delete this employee record?")) {
var delEmployeeProfile = {
"EmployeeId": EmployeeId
};
$http.put(ApiUrlPrefix + 'deleteEmployeeMasterdetailByHR', delEmployeeProfile).success(function (data) {
alert("Successfully deleted employee details for Employee ID " +EmployeeId);

$http.get(ApiUrlPrefix + "fetchAllEmployeeDataByHR").success(function (data) {
$scope.currentEmployeeList = data;


});
}).error(function (data) {
$scope.error = "An error has occured while deleting! " + data;                
});
}  
}

$scope.Clear = function () {
$scope.FirstName = "";
$scope.LastName = "";
$scope.Designation = "";
$scope.roleid = "";
$scope.branchid = "";
$scope.PriorExprience = "";
$scope.email = "";
$scope.Password = "";
$scope.managerid = "";
$scope.HighestQualification = "";
$scope.ContactNo = "";
$scope.PrimarySkill = "";
$scope.Gender = "";
$scope.IsReportingHead = "";
//$scope.AvailabilityStatus = "";
$scope.firstDate = "";
$scope.secondDate = "";
$scope.ProfilePhoto = "";
$scope.AccessToResourceDatabase = "";
$scope.EmployeeId = "";
}


}); 