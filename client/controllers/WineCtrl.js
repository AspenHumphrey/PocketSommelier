'use strict';

app.controller('WineCtrl', function($scope, WineFact){
  WineFact.getAllWines()
  .then( ( wines ) => {
    $scope.wines = wines
  });
});

  // hello 