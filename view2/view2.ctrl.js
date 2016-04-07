angular.module('routes').controller('view2Ctrl', function ($scope) {
    var view2 = this;
    view2.title = "View 2";
    $scope.tab1.isActive = false;
    $scope.tab2.isActive = true;
});