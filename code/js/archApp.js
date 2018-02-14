angular.module('archApp', ['ui.router'])
    .constant('API_BASE', 'http://localhost:3000')
    .config(function($urlRouterProvider){
        /**
         * Set default route for Angular App loading
         */
        $urlRouterProvider.when('', '/list-offers');
        $urlRouterProvider.otherwise('/list-offers');
    });
