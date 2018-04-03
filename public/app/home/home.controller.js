angular.module('home.controller', []).controller('HomeController', ['$scope', '$window', '$http', '$rootScope', 'ServiceFactory', 'Meta', 'NotifierService', function($scope, $window, $http, $rootScope, ServiceFactory, Meta, notifier){

    Meta.setTitle('Home');

    $scope.screenW = $window.innerWidth;
    $scope.videoShow = false;
    $scope.services = ServiceFactory.list();

  $scope.welcome = {
      visible: false,
      offset: -200
  };

  $scope.drawingData = {};

  $scope.toggleVideo = function() {
      console.log('toggleVideo');
      $scope.videoShow = !$scope.videoShow;
  }

  $scope.options = {
       origin: 'left',
       distance: '150px',
       easing: 'ease-in-out',
       delay: 30,
       scale: 1,
       duration: 1000,
       // reset: true,
    //    afterReveal: function (domEl) {
    //        document.getElementById("gallery").style.visibility = "visible";
    //    },
       sequence: {
          selector: '.col-md-5',
          interval: 300
        }
    };

}]);
