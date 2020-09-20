var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

weatherApp.config(function ($routeProvider) {
    $routeProvider.when('/', {
            templateUrl: 'pages/home.html',
            controller: 'homeController'
        })

        .when('/forecast', {
            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })

});



weatherApp.controller("homeController", ['$scope', '$log', function ($scope, $log) {
    $scope.name = "hoa";

}]);


weatherApp.controller("forecastController", ['$scope', '$log', function ($scope, $log) {
    $scope.name = "hoaaaaa";

}]);
