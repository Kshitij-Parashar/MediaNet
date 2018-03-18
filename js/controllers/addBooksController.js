/**
 * Created by socomo on 3/18/18.
 */
MediaNetApp.controller('addBooksController',function ($http, $scope,$rootScope) {
    $scope.bookList = [];
    $scope.bookName = "";
    $scope.authorName = "";
    $scope.bookPrice = "";
    var tempObj = {};
    if(localStorage.getItem('bookList')){
        $scope.bookList = JSON.parse(localStorage.getItem('bookList'));
    }
    $scope.submit = function() {
            tempObj = {
                bookName : $scope.bookName,
                authorName : $scope.authorName,
                bookPrice : $scope.bookPrice
            };
            console.log($scope.bookList);
            $scope.bookName = "";
            $scope.authorName = "";
            $scope.bookPrice = "";
            $scope.bookList.push(tempObj);
            tempObj = {};
            localStorage.setItem('bookList',JSON.stringify($scope.bookList));
          $rootScope.emitCount();
        }
})