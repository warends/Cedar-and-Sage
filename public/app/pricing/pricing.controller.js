angular.module('pricing.controller', []).controller('PricingController', ['$scope', '$rootScope', '$window', '$stateParams', 'Meta', 'PricingFactory', ($scope, $rootScope, $window, $stateParams, Meta, PricingFactory) => {

  Meta.setTitle('Pricing');
  Meta.setDesc("Professional online interior deisgn program guiding the DIY'er.");

	$scope.services = PricingFactory.list();

  $scope.selectedService = undefined;

  $scope.showSlide = function(slug) {
    $scope.selectedService = slug;
  }

  $scope.close = function() {
    $scope.selectedService = undefined;
  }

}]);
