'use strict';

app.controller('FavoriteCtrl', function($scope, FavoriteFact){

  $scope.savePair = (cId, wId) => {
    let username = localStorage.getItem('username');
    let cheeseId = localStorage.getItem(cId);
    let wineId = localStorage.getItem(wId)
  
    FavoriteFact.saveUserPair(username, cheeseId, wineId)
    .then( ( userFav ) => {
      console.log("fave ctrl saved pair!!");
    })
    .catch( ( err ) => {
      console.log("oops", err);
    }); 
  }

  FavoriteFact.getUserPair(localStorage.getItem('username'))
  .then( ( userPairData ) => {
    $scope.userPairData = userPairData.data[0]
  })
  .catch( ( err ) => {
    console.log("whoope", err);
  });

}); 