'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
      $scope.phones = Phone.list();
      $scope.orderProp = 'age';
}]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
      $scope.phoneId = $routeParams.phoneId;

      $scope.phone = Phone.details({phoneId: $routeParams.phoneId}, function(phone) {
          $scope.mainImageUrl = phone.images[0];
      });
      $scope.setImage = function(imageUrl) {
          $scope.mainImageUrl = imageUrl;
      }

}]);

phonecatControllers.controller('PhoneNewCtrl', ['$scope', 'Phone',
    function($scope, Phone) {

    }]);

phonecatControllers.controller('formCtrl', ['$scope', 'Phone',
    function($scope, Phone) {
        $scope.submit = function(){
            Phone.add($scope.newPhone, function(data){
            })
        }
    }]);