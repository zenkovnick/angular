'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
//      $http.jsonp('http://localhost:3000/phones/?callback=JSON_CALLBACK').success(function(data) {
//          $scope.phones = data;
//      });
      $scope.phones = Phone.list();
      $scope.orderProp = 'age';
}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
      $scope.phoneId = $routeParams.phoneId;
//      $http.jsonp('http://localhost:3000/phones/'+$scope.phoneId+'/?callback=JSON_CALLBACK').success(function(data) {
//          $scope.phone = data;
//          $scope.mainImageUrl = data.images[0];
//      });

      $scope.phone = Phone.details({phoneId: $routeParams.phoneId}, function(phone) {
          $scope.mainImageUrl = phone.images[0];
      });
      $scope.setImage = function(imageUrl) {
          $scope.mainImageUrl = imageUrl;
      }

}]);