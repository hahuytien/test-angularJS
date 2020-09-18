var myapp = angular.module('myApp', ['ngMessages', 'ngResource', 'ngRoute']);

myapp.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'pages/main.html',
        controller: 'myController'
    })

        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })

        .when('/second/:test', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })
});

myapp.service('hexafy', function () {
    this.myFunc = function (x) {
        return x;
    }
});

myapp.directive('myCustomer', function() {
    return {
        restrict: 'AECM',
        templateUrl: 'pages/template.html',
        transclude: true,
        scope: {
            customerInfo: '=info'
        }
    }

})

// myapp.directive('myCustomer', function() {
//     return {
//       restrict: 'E',
//       scope: {
//         customerInfo: '=info'
//       },
//       templateUrl: 'pages/template.html'
//     };
// });


myapp.directive('myPane', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        title: '=info'
      },
      templateUrl: 'pages/template.html'
    };
  });
  
myapp.controller("myController", ['$scope', '$log', function ($scope, $log) {
    $scope.name = "hoa";
    $scope.age = "18";
    $scope.len5 = 5;

    $scope.info = function () {
        return "Hoa 18";
    }

    $scope.getInfo = $scope.info();
    console.log($log);
    console.log($scope);

    $scope.$watch('name', function (newValue, oldValue) {
        console.log("new:", newValue, "; old", oldValue);
    });


    setTimeout(() => {

        $scope.$apply(() => {

            $scope.name = "lan";
        });

    }, 3000);
}])


myapp.controller("secondController", ['$scope', '$log', '$routeParams','hexafy', function ($scope, $log, $routeParams, hexafy) {
    $scope.name = "2";
    $scope.age = "2";
    $scope.len5 = 2;

    $scope.test = $routeParams.test;
    $scope.hex = hexafy.myFunc(22322424);

    $scope.person = {
        name: "Hoa Le",
        address: "so 1 thd"
    }

}])
