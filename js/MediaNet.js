var MediaNetApp = angular.module('MediaNet', ['ui.router']);

MediaNetApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/addBooks');

    $stateProvider

    // HOME STATES AND NESTED VIEWS ========================================
        .state('showBooks', {
            url: '/showBooks',
            templateUrl: 'html/showBooks.html'
        })
    .state('addBooks', {
        url: '/addBooks',
        templateUrl: 'html/addBooks.html'
    })
    .state('favoriteBooks', {
        url: '/favoriteBooks',
        templateUrl: 'html/favouriteBooks.html'
    });

}).run(function($rootScope){
    $rootScope.emitCount = function(){
        $rootScope.$emit('changeCount');
    }
});

MediaNetApp.component('sideBar', {
    templateUrl: 'partials/sidebar/sidebar.html'
});

