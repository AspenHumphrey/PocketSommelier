'use strict';

app.controller('WineDetailCtrl', function($scope, WineFact){
  WineFact.getWineDetails()
  .then( ( wineDetails ) => {
    $scope.wineDetails = wineDetails
  });
});
