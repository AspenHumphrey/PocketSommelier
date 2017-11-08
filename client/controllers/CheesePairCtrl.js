'use strict';

app.controller('CheesePairCtrl', function($scope, $window, $routeParams, CheeseFact, FavoriteFact){

  $scope.isLoggedIn = localStorage.getItem("isLoggedIn");
  
  CheeseFact.getOneCheeseAllWines($routeParams.id)
  .then( ( cheesePair ) => {
    $scope.cheesePair = cheesePair
    $scope.cheesePair.id
  })
  .catch( ( err ) => {
    console.log("whoope", err);
  });

  $scope.savePair = (cheeseId, wineId) => {
   
    let username = localStorage.getItem('username');
    FavoriteFact.saveUserPair(username, cheeseId, wineId); 
  }

  $scope.getSpokenCheeseName = (cheesePair) => {
    $window.responsiveVoice.speak(""+ cheesePair +"");
  }
  
  $scope.getSpokenWineName = (wine) => {
    $window.responsiveVoice.speak(""+ wine +"");
  }
  
});