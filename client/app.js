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
  .when('/cheese', {
    templateUrl: '/client/partials/cheese.html',
    controller: 'CheeseCtrl'
  })
  .when('/cheeseDetails',{
    templateUrl: '/client/partials/cheeseDetail.html',
    controller: 'CheeseDetailCtrl'
  })
  .when('/cheesePair/:id', {
    templateUrl: '/client/partials/cheesePair.html',
    controller: 'CheesePairCtrl'
  })
  .when('/wine', {
    templateUrl: '/client/partials/wine.html',
    controller: 'WineCtrl'
  })
  .when('/wineDetails', {
    templateUrl: '/client/partials/wineDetail.html',
    controller: 'WineDetailCtrl'
  })
  .otherwise('');
});