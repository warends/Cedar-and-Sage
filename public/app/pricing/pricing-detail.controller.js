angular.module('pricing-detail.controller', []).controller('PricingDetailController', ['$scope', '$rootScope', '$window', '$stateParams', 'Meta', 'PricingFactory', ($scope, $rootScope, $window, $stateParams, Meta, PricingFactory) => {
	
	$scope.level = $stateParams.level;

	$scope.services = PricingFactory.list()
		.filter(service => service.level.includes($scope.level));

  $scope.selectedService = undefined;

  $scope.showSlide = function(slug) {
    $scope.selectedService = slug;
  }

  $scope.close = function() {
    $scope.selectedService = undefined;
  }

  $scope.contactUs = function() {
    $rootScope.toggleContact();
  }

  $scope.videoHeight = ($scope.screenW < 768) ? '50%' : '90%';
  $scope.showRendering = false;
  $scope.toggleRendering = function() {
    $scope.showRendering = true;
  }

  $scope.bookShow = false;
  $scope.toggleBook = function(){
    $scope.bookShow = true;
  }

      var getClosest = function ( elem, selector ) {
          for ( ; elem && elem !== document; elem = elem.parentNode ) { // Get closest match
              if ( elem.matches( selector ) ) return elem;
          }
          return null;
      };

      $scope.nextPage = function(){
          angular.element(document.querySelectorAll('.active'))
              .removeClass('active')
              .addClass('flipped')
              .next(document.querySelector('.page'))
              .addClass('active');
      }

      $scope.prevPage = function(){
          $('.flipped')
            .last()
            .removeClass('flipped')
            .addClass('active')
            .siblings('.page')
            .removeClass('active');
              // var elem = document.querySelector('.flipped');
              //.last()
              // elem.removeClass('flipped')
              // .addClass('active')
              // .next(document.querySelector('.page'))
              // .removeClass('active');
      }

      $scope.currentPage = 0;

      $scope.brandingContact = function() {
        $scope.showRendering = false;
        $scope.bookShow = false;
        $scope.contactUs();
      }

}]);
