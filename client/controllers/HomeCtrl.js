'use strict';

app.controller('HomeCtrl', function($scope, $location, $window, HomeFact){

  function getRandomCheese(){
    let cheeseLength = $scope.randomPair.Cheeses.length;
    let numberResult = $scope.randomPair.Cheeses[Math.floor(Math.random() * cheeseLength - 1 )]
    return numberResult;
  }; 

  $scope.newRandomPair = () => {
    HomeFact.getRandomPairData()
    .then( ( randomPair ) => {
      $scope.randomPair = randomPair
      console.log($scope.randomPair);
      $scope.randomCheese = getRandomCheese();
      let currentPair = { pair: $scope.randomPair, cheese: $scope.randomCheese };
      localStorage.setItem('currentRandomPair', JSON.stringify(currentPair) );
    });
  };
  $scope.newRandomPair();

  $scope.getRandomPairDetails = (id) => {
    $location.url(`/singlePair`);
  };


  $scope.getSpokenNames = (randomPair) => {
   
    $window.responsiveVoice.speak(""+ randomPair +"");
  }

});
