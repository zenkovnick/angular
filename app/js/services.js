angular.module('phonecatServices', ['ngResource']).
    factory('Phone', function($resource){
        return $resource('http://localhost/angular/test/proxy/phones/:phoneId', {}, {
            list: {method:'GET', isArray:true},
            details: {method:'GET', params:{phoneId:'@phoneId'}},
            add: {method:'POST'}
        });
    });