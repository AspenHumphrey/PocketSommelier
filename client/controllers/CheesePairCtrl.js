'use strict';

app.controller('CheesePairCtrl', function($scope, $routeParams, CheeseFact){

  $scope.isLoggedIn = localStorage.getItem("isLoggedIn");
  
    CheeseFact.getOneCheeseAllWines($routeParams.id)
    .then( ( cheesePair ) => {
      $scope.cheesePair = cheesePair
      $scope.cheesePair.id
    })
    .catch( ( err ) => {
      console.log("whoope", err);
    });

  

});