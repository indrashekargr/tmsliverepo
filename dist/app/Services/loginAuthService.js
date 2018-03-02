/*EMS Login Authentication Service Starts Here*/
var ApiUrlPrefix = "/";
app.factory("loginAuthentication", ["$http", "$q", "$window", function ($http, $q, $window, $localStorage) {
    var userInfo;

    //TMS Login
    function login(loginUsername, loginPassword) {
        var deferred = $q.defer();
        var credentials = {
            "username": loginUsername
            , "password": loginPassword
        };
        $http.post(ApiUrlPrefix + "login", credentials).then(function (result) {
            console.log(result);
             if(result.data=="User logged in Successfully"){
                      // $scope.state.go("home");
                   $http.get(ApiUrlPrefix + "fetchEmployeeMasterDetailsBasedOnUsername/"+loginUsername).success(function (data) {
            userInfo = data[0];
            console.log(userInfo);
                        $window.sessionStorage["userInfo"] = JSON.stringify(userInfo);
            deferred.resolve(userInfo);
        });
                    }else{
                        alert(result.data);
                    }
           
        }, function (error) {
            deferred.reject(error);
        });
        return deferred.promise;
    }

    function getLoggedInUserInfo() {
        return userInfo;
    }

    function init() {
        if ($window.sessionStorage["userInfo"]) {
            userInfo = JSON.parse($window.sessionStorage["userInfo"]);
        }
    }
    init();
    return {
        login: login
        , getLoggedInUserInfo: getLoggedInUserInfo
    };
}]);