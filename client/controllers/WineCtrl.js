// 'use strict';

// app.controller('WineCtrl', function($scope, WineFact){
//   WineFact.getAllWines()
//   .then( ( wines ) => {
//     $scope.wineArr = [];
//     $scope.wines = wines
//     angular.forEach($scope.wines, function(wine){
//       $scope.wineArr.push(wine);
//     });
//     console.log("$scope.cheeseArr", $scope.wineArr);
//   })
//   .catch( ( err ) => {
//     console.log("whoope", err);
//   });
// });


'use strict';

app.controller('WineCtrl', function($scope, $window, WineFact){

  
  WineFact.getAllWines()
  .then( ( wines ) => {
    $scope.wineArr = [];
    $scope.wines = wines
    angular.forEach($scope.wines, function( wine ){
      $scope.wineArr.push( wine );
    });
  })
  .catch( ( err ) => {
    console.log("whoope", err);
  });


  $scope.getWinePair = (id) => {
    $window.location.href = `#!/winePair/${id}`;
  };

  $scope.getAllWins = (id) => {
    $window.location.href = `#!/wineeDetail/${id}`
  }
 

  
});