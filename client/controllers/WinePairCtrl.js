'use strict';

app.controller('WinePairCtrl', function($scope, $routeParams, WineFact){
  
    WineFact.getOneWineAllCheeses($routeParams.id)
    .then( ( winePair ) => {
      $scope.winePair = winePair
      $scope.winePair.id
    })
    .catch( ( err ) => {
      console.log("whoope", err);
    });

});