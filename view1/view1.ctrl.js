angular.module('routes').controller('view1Ctrl', function ($scope) {
    var view1 = this;
    view1.title = "View 1";
    $scope.tab1.isActive = true;
    $scope.tab2.isActive = false;
});