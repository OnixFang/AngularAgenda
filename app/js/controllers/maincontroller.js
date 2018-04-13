(function () {
    const app = angular.module('angularAgenda');

    function mainController($scope) {
        $scope.agenda = [
            {
                "description": "Testing",
                "time": "1970-01-01T17:00:00.000Z"
            }
        ];
        $scope.newTask = {};

        $scope.addTask = function addTask() {
            const item = $scope.newTask;
            $scope.agenda.push(item);
        }
    }

    app.controller('mainController', mainController);
}());