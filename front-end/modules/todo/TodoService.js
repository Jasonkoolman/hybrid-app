angular.module('todo')

.factory('Task', function($http) {

    return {

        get : function() {
            return $http.get( apiUrl('api/task') );
        },

        store : function(task) {
            return $http({
                method: 'POST',
                url: apiUrl('api/task'),
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(task)
            });
        },

        update : function(task) {
            return $http({
                method: 'PUT',
                url: apiUrl('api/task/' + task.id),
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param(task)
            });
        },

        destroy : function(id) {
            return $http.delete( apiUrl('api/task/' + id) );
        }

    }

});