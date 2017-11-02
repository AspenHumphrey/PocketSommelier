'use strict';

app.controller('CheeseCtrl', function($scope, CheeseFact){

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

  function getCheesePair(id) {
    console.log("after 21");
    CheeseFact.getOneCheeseAllWines()
    .then( ( cheesePair ) => {
      $scope.cheesePair = cheesePair
      $scope.cheesePair.id
      // $window.location.href = `#!/cheesePair/${$scope.cheesePair.id}`;
    })
    .catch( ( err ) => {
      console.log("whoope", err);
    });
  };
 
  



$scope.cheeseSearch = () => {
  CheeseFact.getCheeseSearch($scope.search)
};  
  
});

// need to loop through arr/ do a for each to display all to page