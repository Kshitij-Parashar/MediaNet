/**
 * Created by socomo on 3/18/18.
 */
MediaNetApp.controller('showBooksController',function ($http, $scope,$rootScope) {
    $scope.bookList = [];
    $scope.favList = [];
    if(localStorage.getItem('bookList')){
        $scope.bookList = JSON.parse(localStorage.getItem('bookList'));
    }
    if(localStorage.getItem('favList')){
        $scope.favList = JSON.parse(localStorage.getItem('favList'));
    }
    $scope.deleteBook = function(index){
        $scope.bookList.splice(index,1);
        localStorage.setItem('bookList',JSON.stringify($scope.bookList));
        $rootScope.emitCount();
    };
    $scope.addToFav = function(index){
        $scope.favList.push($scope.bookList[index]);
        localStorage.setItem('favList',JSON.stringify($scope.favList));
        $scope.bookList.splice(index,1);
        localStorage.setItem('bookList',JSON.stringify($scope.bookList));
        $rootScope.emitCount();
    }

})