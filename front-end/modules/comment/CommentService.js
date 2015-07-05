angular.module('comment')

.factory('Comment', function($http) {

    return {

        /*
         * Get all comments
         */
        get : function() {
            return $http.get( apiUrl('api/comments') );
        },

        /*
         * Show a specific comment
         */
        show : function(id) {
            return $http.get( apiUrl('api/comments/' + id) );
        },

        /*
         * Submit a comment
         */
        store : function(commentData) {
            return $http({
                method: 'POST',
                url: apiUrl('api/comments'),
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(commentData)
            });
        },

        /*
         * Delete a comment
         */
        destroy : function(id) {
            return $http.delete( apiUrl('api/comments/' + id) );
        }

    }

});