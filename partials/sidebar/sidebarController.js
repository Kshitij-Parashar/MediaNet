/**
 * Created by socomo on 3/18/18.
 */
MediaNetApp.controller('sideBarController',function ($http, $scope,$rootScope) {
    $scope.bookList = [];
    $scope.favList = [];
    if(localStorage.getItem('bookList')){
        $scope.bookList = JSON.parse(localStorage.getItem('bookList'));
    }
    if(localStorage.getItem('favList')){
        $scope.favList = JSON.parse(localStorage.getItem('favList'));
    }
    
    $rootScope.$on('changeCount',function(){
        if(localStorage.getItem('bookList')){
            $scope.bookList = JSON.parse(localStorage.getItem('bookList'));
        }
        if(localStorage.getItem('favList')){
            $scope.favList = JSON.parse(localStorage.getItem('favList'));
        } 
    });
})