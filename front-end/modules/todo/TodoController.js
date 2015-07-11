angular.module('todo')

.controller('TodoController', ['$rootScope', '$scope', '$http', 'Task',
    function($rootScope, $scope, $http, Task) {

        $rootScope.plusIcon = true; // Display the plus icon

        $scope.loading = true; // The loading spinner icon
        $scope.task = {}; // The task form data

        /*
         * Get all tasks
         */
        $scope.getTasks = function() {
            Task.get()
                .success(function(data) {
                    $scope.tasks = data;
                    $scope.loading = false;
                });
        };

        $scope.getTasks();

        /*
         * Submit a task
         */
        $scope.submitTask = function() {
            $scope.loading = true;

            Task.store($scope.task)
                .success(function() {
                    $scope.getTasks();
                    $scope.task = {};
                    $scope.form.$setPristine();
                    $rootScope.showForm = false;
                })
                .error(function(data) {
                    $scope.loading = false;
                });
        };

        /*
         * Mark a task as completed
         */
        $scope.completeTask = function(task) {
            Task.update(task)
                .success(function(data) {
                    $scope.getTasks();
                });
        };

        /*
         * Delete a task
         */
        $scope.deleteTask = function(id) {
            $scope.loading = true;

            Task.destroy(id)
                .success(function() {
                    $scope.getTasks();
                });
        };

    }]);