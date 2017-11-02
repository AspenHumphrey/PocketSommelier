'use strict';

app.controller('CheeseCtrl', function($scope, CheeseFact){
  CheeseFact.getAllCheeses()
  .then( ( cheeses ) => {
    $scope.cheeses = cheeses
  });
});

// need to loop through arr/ do a for each to display all to page