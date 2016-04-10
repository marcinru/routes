angular.module('routes', ['ngRoute'])
    .controller('appCtrl', function ($scope) {
        $scope.tab1 = {
            isActive: false
        };
        $scope.tab2 = {
            isActive: false
        };
    })
    .config(function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/template.html',
            controller: 'view1Ctrl',
            controllerAs: 'view1'
        }).when('/view2', {
            templateUrl: 'view2/template.html',
            controller: 'view2Ctrl',
            controllerAs: 'view2'
        }).when('/', {
            redirectTo: '/view1'
        });
});