'use strict';

app.controller('PairCtrl', function($scope, $window, $location, PairFact, FavoriteFact){

  $scope.isLoggedIn = localStorage.isLoggedIn;

  PairFact.getAllPairsArr()
  .then( ( pairsArrData ) => {
    $scope.pairsArr = [];
    $scope.pairsArrData = pairsArrData
    angular.forEach($scope.pairsArrData, function(pair){
      $scope.pairsArr.push(pair);
    });
  })
  .catch( ( err ) => {
    console.log("whoope", err);
  });

  $scope.savePair = (cheeseId, wineId) => {
    let username = localStorage.getItem('username');
  
    FavoriteFact.saveUserPair(username, cheeseId, wineId); 
  }

  $scope.getSpokenCheeseName = (cheese) => {
    $window.responsiveVoice.speak(""+ cheese +"");
  }
  
  $scope.getSpokenWineName = (pair) => {
    $window.responsiveVoice.speak(""+ pair +"");
  }
 
  
});

// loop through array and/or do a for each on obj on array to 
// show each one on page.
