/**
 * Created by socomo on 3/18/18.
 */
MediaNetApp.controller('showBooksController',function ($http, $scope,$rootScope) {
    $scope.bookList = [];
    $scope.oldBookList = [];
    $scope.favList = [];
    $scope.bookSearch = ""

    $scope.$watch('bookSearch',function(newVal,oldVal){
        var tempbookList = [];
        if(newVal.trim() == ''){
            $scope.bookList = $scope.oldBookList;
            return;
        }
        if(newVal != oldVal) {
            $scope.bookList.filter(function (obj) {
                if(obj.bookName.indexOf(newVal) != -1){
                    tempbookList.push(obj);
                }
            });
        }
        $scope.bookList = tempbookList;
    })
    if(localStorage.getItem('bookList')){
        $scope.bookList = JSON.parse(localStorage.getItem('bookList'));
        $scope.oldBookList = JSON.parse(localStorage.getItem('bookList'));
    }
    if(localStorage.getItem('favList')){
        $scope.favList = JSON.parse(localStorage.getItem('favList'));
    }
    $scope.deleteBook = function(index){
        $scope.bookList.splice(index,1);
        $scope.oldBookList = $scope.bookList;
        localStorage.setItem('bookList',JSON.stringify($scope.bookList));
        $rootScope.emitCount();
    };
    $scope.addToFav = function(index){
        $scope.favList.push($scope.bookList[index]);
        localStorage.setItem('favList',JSON.stringify($scope.favList));
        $scope.bookList.splice(index,1);
        localStorage.setItem('bookList',JSON.stringify($scope.bookList));
        $scope.oldBookList = $scope.bookList;
        $rootScope.emitCount();
    }

})