phonecatApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/phones', {
                templateUrl: 'partials/phone-list.html',
                controller: 'PhoneListCtrl'
            }).when('/phones/new', {
                templateUrl: 'partials/phone-new.html',
                controller: 'PhoneNewCtrl'
            }).when('/phones/:phoneId', {
                templateUrl: 'partials/phone-detail.html',
                controller: 'PhoneDetailCtrl'
            }).otherwise({
                redirectTo: '/phones'
            });
    }]);