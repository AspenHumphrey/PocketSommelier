'use strict';

app.controller('FavoriteCtrl', function($scope, FavoriteFact){

  $scope.savePair = (cId, wId) => {
    console.log("cheeseId, wineId", cId, wId);
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

  $scope.hello = "hello";


  // $scope.savePair = (cheeseId, wineId) => {
  //   console.log("cheeseId, wineId", cheeseId, wineId);
  //   let userId = localStorage.getItem('username');
  //   let cheeseId = localStorage.getItem(cheeseId);
  //   let wineId = localStorage.getItem(wineId)
  
  //   FavoriteFact.saveUserPair(username, cheeseId, wineId); 
    
  // }

  FavoriteFact.getUserPair(localStorage.getItem('username'))
  .then( ( userPairData ) => {
    console.log("userPAIR ", userPairData);
    $scope.userPairArr = [];
    $scope.userPairData = userPairData
    angular.forEach($scope.userPairData, function(userPair){
      $scope.userPairArr.push(userPair);
    });
    console.log("$scope.userPairArr", $scope.userPairArr);
  })
  .catch( ( err ) => {
    console.log("whoope", err);
  });

}); 