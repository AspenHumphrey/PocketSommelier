'use strict';

let app = angular.module("PocketSommelier", ["ngRoute"]);

app.config( ($routeProvider) => {
  $routeProvider
  .when('/', {
    templateUrl: '/client/partials/home.html',
    controller: 'HomeCtrl'
  })
  .when('/pairs', {
    templateUrl: '/client/partials/pairs.html',
    controller: 'PairCtrl'
  })
  .otherwise('');
});