'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function($scope, $http) {
      $http.jsonp('http://localhost:3000/list?callback=JSON_CALLBACK').success(function(data) {
          $scope.phones = data;
      });
      $scope.orderProp = 'age';
}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
      $scope.phoneId = $routeParams.phoneId;
      $http.jsonp('http://localhost:3000/details?model='+$scope.phoneId+'&callback=JSON_CALLBACK').success(function(data) {
          $scope.phone = data;
      });

}]);