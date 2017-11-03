'use strict';

app.controller('PairDetailCtrl', function($scope, PairFact){

  // console.log('local storage?', localStorage.currentRandomPair);

  let pairObject = JSON.parse(localStorage.getItem('currentRandomPair'));
  console.log('whatttt', pairObject);

  $scope.singlePair = pairObject.pair;
  $scope.singleCheese = pairObject.cheese;
  
  console.log("is this what i want?", $scope.singleCheese, $scope.singlePair);



});