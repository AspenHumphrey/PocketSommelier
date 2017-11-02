'use strict';

app.controller('HomeCtrl', function($scope, HomeFact){

  function getRandomCheese(){
    let cheeseLength = $scope.randomPair.Cheeses.length;
    let numberResult = $scope.randomPair.Cheeses[Math.floor(Math.random() * cheeseLength - 1 )]
    return numberResult;
  }; 

  HomeFact.getRandomPairData()
  .then( ( randomPair ) => {
    $scope.randomPair = randomPair
    console.log($scope.randomPair.name);
    $scope.randomCheese = getRandomCheese();
    // console.log("random??", $scope.randomCheese);
  });


});
