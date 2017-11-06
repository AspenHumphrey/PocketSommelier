'use strict';

app.controller('PairCtrl', function($scope, PairFact, FavoriteFact){

  $scope.isLoggedIn = localStorage.isLoggedIn;

  PairFact.getAllPairsArr()
  .then( ( pairsArrData ) => {
    $scope.pairsArr = [];
    $scope.pairsArrData = pairsArrData
    angular.forEach($scope.pairsArrData, function(pair){
      $scope.pairsArr.push(pair);
    });
    console.log("$scope.pairsArr", $scope.pairsArr);
  })
  .catch( ( err ) => {
    console.log("whoope", err);
  });

  $scope.savePair = (cheeseId, wineId) => {
    console.log("cheeseId, wineId", cheeseId, wineId);
    let username = localStorage.getItem('username');
  
    FavoriteFact.saveUserPair(username, cheeseId, wineId); 
    
  }
 
  
});

// loop through array and/or do a for each on obj on array to 
// show each one on page.
