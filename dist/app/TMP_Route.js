/* IMSSPL's EMS App Routing and config Starts Here */
var app = angular.module("ITMS", ['ui.router', 'ngSanitize', 'ngIdle']);
app.config(function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    /*Partial  pages*/
    var partials = {
        header: {
            templateUrl: 'app/partials/TMP_Header.html'
            , controller: 'SidebarController'
        }
        , footer: {
            templateUrl: 'app/partials/TMP_footer.html'
            , controller: ''
        }
        , sidebar: {
            templateUrl: 'app/partials/TMP_LeftSideBar.html'
            , controller: 'SidebarController'
        }
    , };
    /*EMS States are Defined Here*/
    $stateProvider.state('index', {
        url: "/Login"
        , title: "Login"
        , views: {
            "viewlogin": {
                templateUrl: "app/LoginPage/Tmp_Login.html"
                , controller: "LoginController"
            }
        , }
    , }) .state('home', {
        url: "/home"
        , title: "Home"   
        , views: {
            "viewHeader": partials.header
            , "viewSidebar": partials.sidebar
            , "viewFooter": partials.footer
            , "viewBody": {
                templateUrl: "app/HomePage/TMP_Home.html"
                , controller: "homeCtrl"
            }
        , }
    , }).state('newEmployee', {
        url: "/newEmployee"
        , title: "Employee"
       /* , resolve: {
            auth: function ($q, loginAuthentication) {
                var userInfo = loginAuthentication.getLoggedInUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                }
                else {
                    return $q.reject({
                        authenticated: false
                    });
                }
            }
        }*/
        , views: {
            "viewHeader": partials.header
            , "viewSidebar": partials.sidebar
            , "viewFooter": partials.footer
            , "viewBody": {
                templateUrl: "app/EmployeeRegistration/TMP_EmpRegistration.html"
                , controller: "addemployeeCtrl"
            }
        , }
    , }).state('feedback', {
        url: "/feedback"
        , title: "Feedback"
        /*, resolve: {
            auth: function ($q, loginAuthentication) {
                var userInfo = loginAuthentication.getLoggedInUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                }
                else {
                    return $q.reject({
                        authenticated: false
                    });
                }
            }
        }*/
        , views: {
            "viewHeader": partials.header
            , "viewSidebar": partials.sidebar
            , "viewFooter": partials.footer
            , "viewBody": {
                templateUrl: "app/Feedback/TMP_feedback.html"
                , controller: ""
            }
        , }
    , }).state('resourceskills', {
        url: "/resourceskills"
        , title: "ResourceSkills"
        /*, resolve: {
            auth: function ($q, loginAuthentication) {
                var userInfo = loginAuthentication.getLoggedInUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                }
                else {
                    return $q.reject({
                        authenticated: false
                    });
                }
            }
        }*/
        , views: {
            "viewHeader": partials.header
            , "viewSidebar": partials.sidebar
            , "viewFooter": partials.footer
            , "viewBody": {
                templateUrl: "app/ResourceSkills/TMP_ResourceSkills.html"
                , controller: "SkillsController"
            }
        , }
    , }).state('statusmaster', {
        url: "/statusmaster"
        , title: "Statusmaster"
        /*, resolve: {
            auth: function ($q, loginAuthentication) {
                var userInfo = loginAuthentication.getLoggedInUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                }
                else {
                    return $q.reject({
                        authenticated: false
                    });
                }
            }
        }*/
        , views: {
            "viewHeader": partials.header
            , "viewSidebar": partials.sidebar
            , "viewFooter": partials.footer
            , "viewBody": {
                templateUrl: "app/StatusMaster/statusmaster.html"
                , controller: "StatusMasterCtrl"
            }
        , }
    , }).state('skillmaster', {
        url: "/skillmaster"
        , title: "SkillMaster"
        /*, resolve: {
            auth: function ($q, loginAuthentication) {
                var userInfo = loginAuthentication.getLoggedInUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                }
                else {
                    return $q.reject({
                        authenticated: false
                    });
                }
            }
        }*/
        , views: {
            "viewHeader": partials.header
            , "viewSidebar": partials.sidebar
            , "viewFooter": partials.footer
            , "viewBody": {
                templateUrl: "app/SkillMaster/TMP_Skillmaster.html"
                , controller: "SkillMasterCtrl"
            }
        , }
    , }).state('trackingSkills', {
        url: "/trackingSkills"
        , title: "TrackingSkills"
        /*, resolve: {
            auth: function ($q, loginAuthentication) {
                var userInfo = loginAuthentication.getLoggedInUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                }
                else {
                    return $q.reject({
                        authenticated: false
                    });
                }
            }
        }*/
        , views: {
            "viewHeader": partials.header
            , "viewSidebar": partials.sidebar
            , "viewFooter": partials.footer
            , "viewBody": {
                templateUrl: "app/TrackingSkills/TMP_TrackingSkills.html"
                , controller: "TrackController"
            }
        , }
    , }).state('profile', {
        url: "/profile"
        , title: "User Profile"
        /*, resolve: {
            auth: function ($q, loginAuthentication) {
                var userInfo = loginAuthentication.getLoggedInUserInfo();
                if (userInfo) {
                    return $q.when(userInfo);
                }
                else {
                    return $q.reject({
                        authenticated: false
                    });
                }
            }
        }*/
        , views: {
            "viewHeader": partials.header
            , "viewSidebar": partials.sidebar
            , "viewFooter": partials.footer
            , "viewBody": {
                templateUrl: "app/profile/TMP_profile.html"
                , controller: "ProfileCtrl"
            }
        , }
    , });
    // For any unmatched url, redirect to /page1     //
   $urlRouterProvider.otherwise("/Login");
});
/* EMS App Idle Timeout Logic` */
app.run(['Idle', '$location', '$window', function (Idle, $location, $window) {
    Idle.watch();
}]);