angular.module('home.controller', []).controller('HomeController', ['$scope', '$window', '$http', 'ServiceFactory', 'Meta', 'NotifierService', function($scope, $window, $http, ServiceFactory, Meta, notifier){

    Meta.setTitle('Home');
    //Meta.setDesc('This is the desc');

    $scope.screenW = $window.innerWidth;

  $scope.services = ServiceFactory.list();

  $scope.welcome = {
      visible: false,
      offset: -200
  };

  $scope.drawingData = {};

  $scope.enterDrawing = function() {
    //   {
    //     "email_address": "urist.mcvankab@freddiesjokes.com",
    //     "status": "subscribed",
    //     "merge_fields": {
    //         "FNAME": "Urist",
    //         "LNAME": "McVankab"
    //     }
    // }
      $http.post('/enter-drawing', $scope.drawingData)
        .then(function(message, status, headers, config){
            console.log(message);
            notifier.notify('Thank you for entering ' + message.data.name + '. We will contact you if you win!');
            $scope.drawingData = {};
        }, function(error, status, headers, config){
            console.log(error);
        });
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
