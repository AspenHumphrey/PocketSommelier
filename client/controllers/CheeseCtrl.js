'use strict';

app.controller('CheeseCtrl', function($scope, $window, CheeseFact){

  
  CheeseFact.getAllCheeses()
  .then( ( cheeses ) => {
    $scope.cheeseArr = [];
    $scope.cheeses = cheeses
    angular.forEach($scope.cheeses, function( cheese ){
      $scope.cheeseArr.push( cheese );
    });
  })
  .catch( ( err ) => {
    console.log("whoope", err);
  });


  $scope.getCheesePair = (id) => {
    $window.location.href = `#!/cheesePair/${id}`;
  };

  $scope.getAllCheeses = (id) => {
    $window.location.href = `#!/cheeseDetail/${id}`
  }
 

  
});

// need to loop through arr/ do a for each to display all to page