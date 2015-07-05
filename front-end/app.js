(function() {
    'use strict';

    angular.module('app', [
        'ngRoute',
        'ngResource',
        'filters',

        'home',
        'comment'
    ]);
})();