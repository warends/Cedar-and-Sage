angular.module('portfolio.controller', []).controller('PortfolioController', ['$scope', '$http', 'Meta', function($scope, $http, Meta){

	Meta.setTitle(' Interior Design Portfolio | Cedar + Sage Design | Interior Design Studio');
	Meta.setDesc('Get some interior design inspiration and design advice and tips on our Monday mood board posts.');
	Meta.setKeywords('interior design portfolio, interior design project, residential design, commercial design, interior design photos');
	$scope.posts;
	$scope.showCarousel = false;
	$scope.selectedPortfolio = undefined;
	$scope.selectedSlide = undefined;

	$scope.$on('close', function () { 
		$scope.closeModal();
	});

  $http.get('/api/portfolio').then((res)=> {
		$scope.portfolios = res.data;
	});

	$scope.showSlide = function(slug) {
    $scope.selectedSlide = slug;
  }

	$scope.showCarouselModal = function(portfolio) {
		$scope.selectedPortfolio = portfolio;
		$scope.showCarousel = true;
	}

	$scope.closeModal = function() {
		$scope.showCarousel = false;
		$scope.selectedPortfolio = undefined;
	}

	$scope.closeSlide = function() {
		$scope.selectedSlide = undefined;
	}

}]);
