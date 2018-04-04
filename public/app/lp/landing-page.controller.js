angular.module('landing-page.controller', []).controller('LandingPageController', ['$scope', '$window', '$http', 'Meta', 'NotifierService', function($scope, $window, $http, Meta, notifier){

    Meta.setTitle('Landing Page');
    $scope.signupForm = {};
    $scope.isMobile = ($window.innerWidth < 768) ? true : false;

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
