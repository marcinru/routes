angular.module('routes', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider.when('/view1', {
        templateUrl: 'view1.html'
    }).when('/view2', {
        templateUrl: 'view2.html'
    }).when('/', {
        templateUrl: 'view1.html'
    });
});