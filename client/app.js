'use strict';

let app = angular.module("PocketSommelier", ["ngRoute"]);

app.config( ($routeProvider) => {
  $routeProvider
  .when('/', {
    templateUrl: '/client/partials/home.html',
    controller: 'HomeCtrl'
  })
  .when('/introduction', {
    templateUrl: '/client/partials/introduction.html'
  })
  .when('/pairs', {
    templateUrl: '/client/partials/pairs.html',
    controller: 'PairCtrl'
  })
  .when('/singlePair/:id', {
    templateUrl: '/client/partials/pairDetails.html',
    controller: 'PairDetailCtrl'
  })
  .when('/cheese', {
    templateUrl: '/client/partials/cheese.html',
    controller: 'CheeseCtrl'
  })
  .when('/cheesePair/:id', {
    templateUrl: '/client/partials/cheesePair.html',
    controller: 'CheesePairCtrl'
  })
  .when('/wine', {
    templateUrl: '/client/partials/wine.html',
    controller: 'WineCtrl'
  })
  .when('/winePair/:id', {
    templateUrl: '/client/partials/winePair.html',
    controller: 'WinePairCtrl'
  })
  .otherwise('');
});