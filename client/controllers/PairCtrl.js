'use strict';

app.controller('PairCtrl', function($scope, PairFact){
  PairFact.getAllPairsArr()
  .then( ( pairsArr ) => {
    $scope.pairsArr = pairsArr
  });
});

// loop through array and/or do a for each on obj on array to 
// show each one on page.
