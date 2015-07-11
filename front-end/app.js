(function() {
    'use strict';

    angular.module('app', [
        'ngRoute',
        'ngResource',
        'ngTouch',

        'filters',

        'home',
        'todo',
        'comment'
    ]);
})();