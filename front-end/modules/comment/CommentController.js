angular.module('comment')

.controller('CommentController', ['$rootScope', '$scope', '$http', 'Comment',
    function($rootScope, $scope, $http, Comment) {

        $scope.comment = {}; // The comment form data
        $scope.loading = true; // The loading spinner icon

        /*
         * Get all comments
         */
        $scope.getComments = function() {
            Comment.get()
                .success(function(data) {
                    $scope.comments = data;
                    $scope.loading = false;
                });
        };

        $scope.getComments();

        /*
         * Show a specific comment
         */
        $scope.showComment = function(id) {
            $scope.loading = true;

            Comment.show(id)
                .success(function() {
                    $scope.getComments();
                });
        };

        /*
         * Submit a comment
         */
        $scope.submitComment = function() {
            $scope.loading = true;

            Comment.store($scope.comment)
                .success(function() {
                    $scope.getComments();
                    $scope.comment = {};
                    $scope.form.$setPristine();
                })
                .error(function() {
                    $scope.loading = false;
                });
        };

        /*
         * Delete a comment
         */
        $scope.deleteComment = function(id) {
            $scope.loading = true;

            Comment.destroy(id)
                .success(function() {
                    $scope.getComments();
                });
        };

    }]);