var angApp = angular.module('myLittleWorldApp',['ngRoute']);

angApp.config([ '$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.when('/inicio', {
            templateUrl : 'index.html'
        });
        $routeProvider.when('/quienessomos', {
            templateUrl : 'quienessomos.html'
        });
        //$locationProvider.html5Mode(true); //Remove the '#' from URL.
    }
]);

applog.controller("LoginController", function($scope, $location) {
    $scope.login = function() {
        var username = $scope.user.name;
        var password = $scope.user.password;
        if (username == "admin" && password == "admin") {
            $location.path("/home" );
        } else {
            alert('invalid username and password');
        }
    };
});

applog.controller("HomeController", function($scope, $location) {

});
