'use strict';

app.controller('HomeCtrl', function($scope, HomeFact){
  HomeFact.getRandomPairData()
  .then( ( randomPair ) => {
    $scope.randomPair = randomPair
  });
});