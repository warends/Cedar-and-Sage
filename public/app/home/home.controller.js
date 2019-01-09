angular.module('home.controller', []).controller('HomeController', ['$scope', '$window', '$http', 'ServiceFactory', 'Meta', function($scope, $window, $http, ServiceFactory, Meta){

    Meta.setTitle('Home | Cedar + Sage Design | Online Interior Design Studio');
    Meta.setDesc('Begin your interior design project with our personally tailored services. We create captivating compositions by curating a balanced design.');
		Meta.setKeywords('boutique interior design studio, personally tailored services, virtual interior design, online interior design, interior design for everyone, shop your purchasing list, design style, style quiz, captivating compositions, decorate your home online');
		
		$http.get('/api/home/content').then((res)=> {
			$scope.content = res.data[0];
			if ($scope.content.seoImage) {
				Meta.setSocialImage($scope.content.seoImage.url);
			}
		});

    $scope.screenW = $window.innerWidth;
    $scope.videoShow = false;
    $scope.services = ServiceFactory.list();
    $scope.videoHeight = ($scope.screenW < 768) ? '50%' : '90%';

    $scope.welcome = {
      visible: false,
      offset: -200
    };

    $scope.drawingData = {};

    $scope.toggleVideo = function() {
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
          selector: '.box-container',
          interval: 300
        }
    };

}]);
