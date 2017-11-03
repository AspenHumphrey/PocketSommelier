'use strict';

app.controller('CheeseCtrl', function($scope, $window, CheeseFact){

  $scope.search = "";
  $scope.item = 0;
  
  CheeseFact.getAllCheeses()
  .then( ( cheeses ) => {
    $scope.cheeseArr = [];
    $scope.cheeses = cheeses
    angular.forEach($scope.cheeses, function(cheese){
      $scope.cheeseArr.push(cheese);
    });
    console.log("$scope.cheeseArr", $scope.cheeseArr);
  })
  .catch( ( err ) => {
    console.log("whoope", err);
  });


  $scope.getCheesePair = (id) => {
      $window.location.href = `#!/cheesePair/${id}`;
  };
 
  



$scope.cheeseSearch = () => {
  CheeseFact.getCheeseSearch($scope.search)
};  
  
});

// need to loop through arr/ do a for each to display all to page