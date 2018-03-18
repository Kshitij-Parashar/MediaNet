/**
 * Created by socomo on 3/18/18.
 */
MediaNetApp.controller('favoriteBooksController',function ($http, $scope,$rootScope) {
    $scope.bookList = [];
    $scope.favList = [];
    $scope.oldFavList = [];

    $scope.$watch('bookSearch',function(newVal,oldVal){
        var tempbookList = [];
        if(newVal.trim() == ''){
            $scope.favList = $scope.oldFavList;
            return;
        }
        if(newVal != oldVal) {
            $scope.favList.filter(function (obj) {
                if(obj.bookName.indexOf(newVal) != -1){
                    tempbookList.push(obj);
                }
            });
        }
        $scope.favList = tempbookList;
    })
    if(localStorage.getItem('bookList')){
        $scope.bookList = JSON.parse(localStorage.getItem('bookList'));
    }
    if(localStorage.getItem('favList')){
        $scope.favList = JSON.parse(localStorage.getItem('favList'));
        $scope.oldFavList =  $scope.favList;
    }
    $scope.removeBook = function(index){
        $scope.bookList.push($scope.favList[index]);
        localStorage.setItem('bookList',JSON.stringify($scope.bookList));
        $scope.favList.splice(index,1);
        localStorage.setItem('favList',JSON.stringify($scope.favList));
        $scope.oldFavList = $scope.favList;
        $rootScope.emitCount();
    };

})
