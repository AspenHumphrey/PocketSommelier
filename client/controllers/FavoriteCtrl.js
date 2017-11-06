'use strict';

app.controller('FavoriteCtrl', function($scope, FavoriteFact){

 
  $scope.savePair = (cheeseId, wineId) => {
    console.log("cheeseId, wineId", cheeseId, wineId);
    let userId = localStorage.getItem('username');
    let cheeseId = localStorage.getItem(cheeseId);
    let wineId = localStorage.getItem(wineId)
  
    FavoriteFact.saveUserPair(username, cheeseId, wineId); 
    
  }

}); 