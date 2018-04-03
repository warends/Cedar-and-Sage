angular.module('landing-page.controller', []).controller('LandingPageController', ['$scope', '$rootScope', '$http', 'Meta', 'NotifierService', function($scope, $rootScope, $http, Meta, notifier){

    Meta.setTitle('Landing Page');
    $scope.signupForm = {};

    $scope.signup = function(){
         $http.post('/api/free-room-signup', $scope.signupForm)
           .then(function(message, status, headers, config){
               notifier.notify('Thank you for signing up!');
               $scope.signupForm = {};
           }, function(error, status, headers, config){
               console.log(error);
           });
    }

}]);
