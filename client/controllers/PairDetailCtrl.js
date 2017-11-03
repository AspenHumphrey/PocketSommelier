'use strict';

app.controller('PairDetailCtrl', function($scope, $routeParams, PairFact){
  
    PairFact.getAllPairsArr($routeParams.id)
    .then( ( singlePair ) => {
      $scope.singePair = singlePair
      // $scope.singlePair.id
    })
    .catch( ( err ) => {
      console.log("whoope", err);
    });

});