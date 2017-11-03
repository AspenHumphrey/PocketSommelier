'use strict';

app.controller('PairCtrl', function($scope, PairFact){
  PairFact.getAllPairsArr()
  .then( ( pairsArrData ) => {
    $scope.pairsArr = [];
    $scope.pairsArrData = pairsArrData
    angular.forEach($scope.pairsArrData, function(pair){
      $scope.pairsArr.push(pair);
    });
    console.log("$scope.pairsArr", $scope.pairsArr);
  })
  .catch( ( err ) => {
    console.log("whoope", err);
  });
});

// loop through array and/or do a for each on obj on array to 
// show each one on page.
