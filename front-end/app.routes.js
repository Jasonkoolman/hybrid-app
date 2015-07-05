angular.module('app')

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider

        /**
         * Home module
         */
        .when('/',
        {
            templateUrl: 'modules/home/home.html'
        })

        /**
         * Comment module
         */
        .when('/comment/',
        {
            controller: 'CommentController',
            templateUrl: 'modules/comment/overview.html'
        })
        .when('/comment/:id',
        {
            controller: 'CommentController',
            templateUrl: 'modules/comment/show.html'
        })

        .otherwise({ redirectTo: '/' });
}]);