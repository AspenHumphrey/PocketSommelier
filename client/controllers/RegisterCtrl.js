'use strict';

app.controller('RegisterCtrl', function($scope, $location, AuthFact) {

  $scope.register = function() {
    AuthFact.register($scope.user)
      .then(function(response) {
        localStorage.setItem('username', $scope.user.username);
        localStorage.setItem('userId', $scope.user.userId);
        localStorage.setItem('token', response.data.token);
        $location.url('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };
});