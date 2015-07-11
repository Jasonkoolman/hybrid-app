angular.module('filters', [])

.filter('custom', function() {
    return function(data) {
        return data;
    };
});