angular.module('comment')

.factory('Comment', function($http) {

    return {

        get : function() {
            return $http.get( apiUrl('api/comments') );
        },

        show : function(id) {
            return $http.get( apiUrl('api/comments/' + id) );
        },

        store : function(comment) {
            return $http({
                method: 'POST',
                url: apiUrl('api/comments'),
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(comment)
            });
        },

        destroy : function(id) {
            return $http.delete( apiUrl('api/comments/' + id) );
        }

    }

});