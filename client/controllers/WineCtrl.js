'use strict';

app.controller('WineCtrl', function($scope, WineFact){
  WineFact.getAllWines()
  .then( ( wines ) => {
    $scope.wineArr = [];
    $scope.wines = wines
    angular.forEach($scope.wines, function(wine){
      $scope.wineArr.push(wine);
    });
    console.log("$scope.cheeseArr", $scope.wineArr);
  })
  .catch( ( err ) => {
    console.log("whoope", err);
  });
});