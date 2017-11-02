'use strict';

app.controller('PairCtrl', function($scope, PairFact){
  PairFact.getAllPairs()
  .then( ( allPairs ) => {
    $scope.allPairs = allPairs
  });
});