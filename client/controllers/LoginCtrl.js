'use strict';

app.controller('LoginCtrl', function($scope, $location, AuthFact) {

  $scope.login = function() {
    AuthFact.login($scope.user)
      .then(function(response) {
        localStorage.setItem('username', $scope.user.username);
        localStorage.setItem('token', response.data.token);
        $location.url('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };
});