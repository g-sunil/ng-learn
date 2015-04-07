var app = angular.module('myApp', [])

app.controller('MyCtrl', ['$scope', '$timeout', function($scope, $timeout){
    $scope.date = new Date()
    function updateLater () {
        $scope.date = new Date()
        $timeout(function(){
            updateLater()
        }, 1000);
    };
    updateLater();
}]);

app.directive('quote1', [function () {
    return {
        restrict: 'E',
        replace: 'true',
        templateUrl: 'quote1.html',
        link: function (scope, iElement, iAttrs) {
            iElement.addClass("col-sm-4")
        }
    };
}]);
app.directive('quote2', [function () {
    return {
        restrict: 'E',
        replace: 'true',
        templateUrl: 'quote2.html',
        link: function (scope, iElement, iAttrs) {
            iElement.addClass("col-sm-4")
        }
    };
}]);
app.directive('quote3', [function () {
    return {
        restrict: 'E',
        replace: 'true',
        templateUrl: 'quote3.html',
        link: function (scope, iElement, iAttrs) {
            iElement.addClass("col-sm-4")
        }
    };
}]);
app.directive('quote4', [function () {
    return {
        restrict: 'E',
        replace: 'true',
        templateUrl: 'quote4.html',
        link: function (scope, iElement, iAttrs) {
            iElement.addClass("col-sm-4")
        }
    };
}]);
app.directive('quote5', [function () {
    return {
        restrict: 'E',
        replace: 'true',
        templateUrl: 'quote5.html',
        link: function (scope, iElement, iAttrs) {
            iElement.addClass("col-sm-4")
        }
    };
}]);
app.directive('quotenew', [function () {
    return {
        restrict: 'E',
        replace: 'true',
        scope:{
            date: '=',
        },
        templateUrl: 'quote_new.html',
        link: function (scope, iElement, iAttrs) {
            iElement.addClass("col-sm-4")
            console.log(scope)
        }
    };
}]);
