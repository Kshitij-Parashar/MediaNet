/**
 * Created by socomo on 3/18/18.
 */
MediaNetApp.controller('favoriteBooksController',function ($http, $scope,$rootScope) {
    $scope.bookList = [];
    $scope.favList = [];
    if(localStorage.getItem('bookList')){
        $scope.bookList = JSON.parse(localStorage.getItem('bookList'));
    }
    if(localStorage.getItem('favList')){
        $scope.favList = JSON.parse(localStorage.getItem('favList'));
    }
    $scope.removeBook = function(index){
        $scope.bookList.push($scope.favList[index]);
        localStorage.setItem('bookList',JSON.stringify($scope.bookList));
        $scope.favList.splice(index,1);
        localStorage.setItem('favList',JSON.stringify($scope.favList));
        $rootScope.emitCount();
    };

})
