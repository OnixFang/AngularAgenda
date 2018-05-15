(function () {
    const app = angular.module('angularAgenda');

    function mainController($scope) {
        $scope.agenda = [];

        function task(description, time) {
            this.description = description;
            this.time = time;
        }

        $scope.addTask = function addTask(newTask) {
            const taskObj = new task(newTask.description, newTask.time);
            $scope.agenda.push(taskObj);
        }

        $scope.test = function test() {
            console.log($scope.agenda);
        }
    }

    app.controller('mainController', mainController);
}());