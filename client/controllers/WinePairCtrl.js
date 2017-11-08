'use strict';

app.controller('WinePairCtrl', function($scope, $window, $routeParams, WineFact, FavoriteFact){
  
    WineFact.getOneWineAllCheeses($routeParams.id)
    .then( ( winePair ) => {
      $scope.winePair = winePair
      $scope.winePair.id
    })
    .catch( ( err ) => {
      console.log("whoope", err);
    });

    $scope.savePair = (cheeseId, wineId) => {
      console.log("cheeseId, wineId", cheeseId, wineId);
      let username = localStorage.getItem('username');
      FavoriteFact.saveUserPair(username, cheeseId, wineId); 
    }

    $scope.getSpokenCheeseName = (cheese) => {
      $window.responsiveVoice.speak(""+ cheese +"");
    }
    
    $scope.getSpokenWineName = (winePair) => {
      $window.responsiveVoice.speak(""+ winePair +"");
    }
   
});