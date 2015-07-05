angular.module('comment')

.controller('CommentController', ['$scope', '$http', 'Comment',
    function($scope, $http, Comment) {

        $scope.commentData = {};
        $scope.loading = true;

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
                .success(function(data) {
                    $scope.getComments();
                })
                .error(function(data) {
                    console.log(data);
                });
        };

        /*
         * Submit a comment
         */
        $scope.submitComment = function() {
            $scope.loading = true;

            Comment.store($scope.commentData)
                .success(function(data) {
                    $scope.getComments();
                })
                .error(function(data) {
                    console.log(data);
                });
        };

        /*
         * Delete a comment
         */
        $scope.deleteComment = function(id) {
            $scope.loading = true;

            Comment.destroy(id)
                .success(function(data) {
                    $scope.getComments();
                })
                .error(function(data) {
                    console.log(data);
                });
        };

    }]);