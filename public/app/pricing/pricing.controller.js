angular.module('pricing.controller', []).controller('PricingController', ['$scope', '$rootScope', '$window', '$stateParams', 'Meta', 'PricingFactory', ($scope, $rootScope, $window, $stateParams, Meta, PricingFactory) => {

  Meta.setTitle('Pricing');
  Meta.setDesc("Professional online interior deisgn program guiding the DIY'er.");

	$scope.services = PricingFactory.list();

  $scope.selectedService = $stateParams.slug;
  console.log($scope.selectedService);

  $scope.close = function() {
    $scope.selectedService = undefined;
  }

}]);
