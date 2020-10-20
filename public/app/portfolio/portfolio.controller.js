angular.module('portfolio.controller', []).controller('PortfolioController', ['$scope', '$window', '$http', 'Meta', 'NotifierService', function($scope, $window, $http, Meta, notifier){

    Meta.setTitle(' Interior Design Portfolio | Cedar + Sage Design | Online Interior Design Studio');
    Meta.setDesc('Get some interior design inspiration and design advice and tips on our Monday mood board posts.');
    Meta.setKeywords('interior design portfolio, interior design project, residential design, commercial design, interior design photos');
	$scope.posts;
	$scope.showCarousel = false;
	$scope.selectedPortfolio = undefined;
	$scope.selectedSlide = undefined;

  $http.get('/api/portfolio').then((res)=> {
		$scope.portfolios = res.data;
	});

	$scope.showSlide = function(slug) {
		console.log(slug);
    $scope.selectedSlide = slug;
  }

	$scope.showCarouselModal = function(portfolio) {
		$scope.selectedPortfolio = portfolio;
		$scope.showCarousel = true;
		console.log($scope.selectedPortfolio);
	}

	$scope.close = function() {
		$scope.showCarousel = false;
	}

	$scope.closeSlide = function() {
		$scope.selectedSlide = undefined;
	}

}]);
