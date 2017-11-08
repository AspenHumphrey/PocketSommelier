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
      $scope.randomCheese = getRandomCheese();
      let currentPair = { pair: $scope.randomPair, cheese: $scope.randomCheese };
      localStorage.setItem('currentRandomPair', JSON.stringify(currentPair) );
    });
  };
  $scope.newRandomPair();

  $scope.getRandomPairDetails = (id) => {
    $location.url(`/singlePair`);
  };


  $scope.getSpokenWineName = (randomPair) => {
    $window.responsiveVoice.speak(""+ randomPair +"");
  }

  $scope.getSpokenCheeseName = (randomCheese) => {
     $window.responsiveVoice.speak(""+ randomCheese +"");
  }

});
