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
        for(var i = 0; i < $scope.favList.length; i++) {
            if ($scope.favList[i].bookName == $scope.bookList[index].bookName && $scope.favList[i].authorName == $scope.bookList[index].authorName && $scope.favList[i].bookPrice == $scope.bookList[index].bookPrice) {
                $scope.favList.splice(i,1)
                break;
            }
        }
        $scope.bookList.splice(index,1);
        $scope.oldBookList = $scope.bookList;
        localStorage.setItem('bookList',JSON.stringify($scope.bookList));
        localStorage.setItem('favList',JSON.stringify($scope.favList));
        $rootScope.emitCount();
    };
    $scope.addToFav = function(index){
        $scope.favList.push($scope.bookList[index]);
        localStorage.setItem('favList',JSON.stringify($scope.favList));
        //$scope.bookList.splice(index,1);
        localStorage.setItem('bookList',JSON.stringify($scope.bookList));
        $scope.oldBookList = $scope.bookList;
        $rootScope.emitCount();
    }

})