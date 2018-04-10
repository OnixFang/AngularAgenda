(function () {
    const app = angular.module('angularAgenda');

    function mainController($scope) {
        $scope.message = 'I works';
    }

    app.controller('mainController', mainController);
}());