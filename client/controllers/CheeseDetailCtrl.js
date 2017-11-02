'use strict';

app.controller('CheeseDetailCtrl', function($scope, CheeseFact){
  console.log('cheeseFact', CheeseFact);
  CheeseFact.getCheeseDetails()
  .then( ( cheeseDetails ) => {
    $scope.cheeseDetails = cheeseDetails
  });

});
