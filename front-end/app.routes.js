angular.module('app')

.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider

        /**
         * Home module
         */
        .when('/',
        {
            title: 'Hybrid App',
            controller: 'HomeController',
            templateUrl: 'modules/home/home.html'
        })

        /**
         * Comment module
         */
        .when('/comment/',
        {
            title: 'Reacties',
            controller: 'CommentController',
            templateUrl: 'modules/comment/overview.html'
        })

        /**
         * To-do module
         */
        .when('/todo/',
        {
            title: 'Mijn to do\'s',
            controller: 'TodoController',
            templateUrl: 'modules/todo/overview.html'
        })
        .when('/todo/:id',
        {
            title: 'To do',
            controller: 'TodoController',
            templateUrl: 'modules/todo/show.html'
        })

        .otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode(true);
}])

.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        var currentRoute = current.$$route;
        $rootScope.title = (currentRoute !== undefined) ? currentRoute.title : 'Hybrid App';
    });
}]);