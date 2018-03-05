angular.module('common.nav', []).controller('NavController', ['$scope', '$rootScope', '$http', '$window', 'NotifierService', function($scope, $rootScope, $http, $window, notifier){

    $scope.formData = {};

    $scope.sendContact = function(){
         $http.post('/contact-form', $scope.formData)
           .then(function(message, status, headers, config){
               $rootScope.toggleContact();
               console.log(message);
               notifier.notify('Thank you for your message ' + message.data.name);
               $scope.formData = {};
           }, function(error, status, headers, config){
               console.log(error);
           });
    }

    $scope.selected = false;
    $scope.toggleMenu = function(){
        if($window.innerWidth < 992){
            $scope.selected = !$scope.selected;
        }
    }

    $scope.socialShow = false;
    if($window.innerWidth < 992){
        angular.element($window).bind('scroll', () => {
            if($window.scrollY > 140){
                $scope.socialShow = true;
            } else {
                $scope.socialShow = false;
            }
        });
    }

}]);
