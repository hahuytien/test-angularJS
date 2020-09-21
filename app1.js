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

weatherApp.service('cityService', function () {
    this.city = 'ha noi';


})


weatherApp.controller("homeController", ['$scope', '$log', 'cityService', function ($scope, $log, cityService) {
    $scope.name = "hoa";
    $scope.city = cityService.city;

    $scope.$watch('city', function () {
        cityService.city = $scope.city;

    });
}]);


weatherApp.controller("forecastController", ['$scope', '$log', '$resource', 'cityService', function ($scope, $log, $resource, cityService) {
    $scope.name = "hoaaaaa";

    $scope.city = cityService.city;

    $scope.weatherAPI = $resource('https://api.openweathermap.org/data/2.5/forecast/daily');
    
    $scope.weatherResult = $scope.weatherAPI.get({q: 'Ha Noi',mode: 'json', cnt: 2, lang: 'vi', units: 'metric', appid: '279b4be6d54c8bf6ea9b12275a567156'});

    console.log($scope.weatherResult);
}]);
