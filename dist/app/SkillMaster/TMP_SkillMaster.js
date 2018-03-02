var ApiUrlPrefix = "/";
app.controller("SkillMasterCtrl", function ($rootScope, loginAuthentication, $scope, $http, $state, $stateParams, $interval, $window, $location, $timeout, $filter) {
$scope.userinfodata = loginAuthentication.getLoggedInUserInfo();
//console.log($scope.userinfodata);
$scope.state = $state;
window.$scope = $scope;

var CategoryId=null;

//Fetch All category list for admin
getCategoryList();
function getCategoryList() {
$http.get(ApiUrlPrefix + "fetchcategorylist").success(function (data) {
$scope.getCategoryList = data;
//console.log(data);
});
} 

//Fetch all skills list based on category Id
$scope.getskilllist = function(a){
$http.get(ApiUrlPrefix + 'fetchskillslist/'+a).success(function (data) {
$scope.skilllist=data;
//console.log(data);
},function(error){
console.log(error);
});
}

//Search for Current employee data 
function SearchCall() {
$http.get(ApiUrlPrefix + "fetchCurrentEmployeeDataByHR").success(function (data) {
$scope.people = data;
//console.log(data);
});
}
SearchCall();

$http.get(ApiUrlPrefix + 'fetchcategorylist').success(function (data) {
$scope.categorylist=data;
},function(data){
console.log(data);
},function(error){
console.log(error);
});

//add category data for admin
$scope.AddCategory = function () {

if($scope.CategoryName== undefined && $scope.Description== undefined) {
alert("Please enter all the mandatory fields");
$("#exampleModal").modal("show");
} else if($scope.CategoryName== null || $scope.CategoryName== undefined||$scope.CategoryName==""){
alert("Please enter Category name");
}else if($scope.Description== null || $scope.Description== undefined||$scope.Description==""){
alert("Please enter Description");
} else {
var assessment = {
"CategoryName": $scope.CategoryName
, "Description": $scope.Description
};
//console.log(assessment);
$http.post(ApiUrlPrefix + "addskillcategoryforadmin", assessment).then(function (response) {
//console.log(response);	
$("#exampleModal").modal("hide");
$http.get(ApiUrlPrefix + 'fetchcategorylist').success(function (data) {
alert("Successfully added skill category details");
$scope.getCategoryList = data;
});


},function(error){
console.log(error);
});
$scope.Clear(); 
}
}

$scope.Clear = function () {
$scope.CategoryName = "";
$scope.Description = "";
}	

//Edit and Update category data for admin
$scope.editcategory = function (a, b, c) {
$scope.category = {
"CategoryName": b
, "Description": c
}
$scope.updateCategory = function () {
if($scope.category.CategoryName== undefined && $scope.category.Description== undefined) {
alert("Please enter all the mandatory fields");

} else if($scope.category.CategoryName== null || $scope.category.CategoryName== undefined||$scope.category.CategoryName==""){
alert("Please enter Category name");
}else if($scope.category.Description== null || $scope.category.Description== undefined||$scope.category.Description==""){
alert("Please enter Description");

}
else{

var updateUser = {
"CategoryId": a
, "CategoryName": $scope.category.CategoryName
, "Description": $scope.category.Description
};
//console.log(updateUser);
$http.put(ApiUrlPrefix + 'updateskillcategoryforadmin', updateUser).success(function (data) {
$('#exampleModaladd').modal('hide');
$http.get(ApiUrlPrefix + 'fetchcategorylist').success(function (data) {
alert("Skill category updated successfully");
$scope.getCategoryList = data;
});
}).error(function (data) {
$scope.error = "An error has occured while updating! " + data;                
});
}}
}

$scope.subCategoryModal = function () {
$scope.SkillName = "";
$scope.Description = "";
/*$scope.skillname = null;
$scope.skillnameDescription = null;*/
}
$scope.AddCategoryModaldata = function () {
$scope.CategoryName = null;
$scope.Description = null;
}

/*view sub category*/
$scope.viewSubCategory = function (a,b) {
$scope.CategoryName = a;
$scope.CategoryID = b;
$http.get(ApiUrlPrefix + "fetchskillslist/" + $scope.CategoryID).success(function (data) {
$scope.getCategorySubList = data;
//console.log(data);
});

/*view sub category*/
/*Add sub skill Category*/
$scope.addSubCategory = function () {

if($scope.SkillName== undefined && $scope.Description== undefined) {
alert("Please enter all the mandatory fields");
} else if($scope.SkillName== null || $scope.SkillName== undefined||$scope.SkillName==""){
alert("Please enter Skill name");
} else if($scope.Description== null || $scope.Description== undefined||$scope.Description==""){
alert("Please enter Description");
} else {

var assessment = {
"CategoryId" : $scope.CategoryID 
,"Categoryname":$scope.CategoryName
,"SkillName": $scope.SkillName
, "Description":$scope.Description
};
//console.log(assessment);
$http.post(ApiUrlPrefix + 'addsubskillcategoryforadmin', assessment).then(function (response) {
//console.log(response);	
$('#AddsubSkillModal').modal('hide');
alert("Skill details added successfully ");

$scope.subCategoryModal();
},function(error){
console.log(error);
});
$scope.viewSubCategory($scope.CategoryName,$scope.CategoryID);
}
}
/*Add sub skill Category*/

/*Update Skill category*/

/*Update Skill category*/
$scope.editSubcategory = function (a, b,c) {
//alert('editSubcategory');
$scope.sub = {
"SkillName": b,
"Description":c
}
$scope.updateSubCategory = function () {
if($scope.sub.SkillName== null || $scope.sub.SkillName== undefined||$scope.sub.SkillName==""){
alert("Please enter Skill name");
} else if($scope.sub.Description== null || $scope.sub.Description== undefined||$scope.sub.Description==""){
    alert("Please enter Description");
}
else{

var Subcategory = {
"CategoryId": $scope.CategoryID
,"Categoryname":$scope.CategoryName
, "SkillName": $scope.sub.SkillName
,"Description":$scope.sub.Description
, "SkillId": a

};
//console.log(Subcategory);

$http.put(ApiUrlPrefix + 'updatesubskillcategoryforadmin', Subcategory).then(function (response) {
//console.log(response);

$('#EditSkillModal').modal('hide');
$('#viewSubcategory').modal('show');
$http.get(ApiUrlPrefix + 'fetchcategorylist').success(function (data) {
alert("Sub skill category updated successfully");
$scope.getCategoryList = data;
$scope.viewSubCategory($scope.CategoryID,$scope.CategoryID);
});

})
, function (Error) {
console.log(Error);
};
}
}
}
}
});