angular.module('post-category.controller', []).controller('PostCategoryController', ['$scope', '$stateParams', 'Meta', 'PostService', function($scope, $stateParams, Meta, PostService){

	$scope.posts;
	$scope.currentCategory;
	$scope.categoryPage = true;

	PostService.getCategories()
		.then(res => {
			$scope.currentCategory = res.find(cat => cat._id === $stateParams.id);
			$scope.categories = res;
		});
	
	PostService.getCategoryPosts($stateParams.id)
		.then(res => {
			$scope.posts = res;
			Meta.setTitle($scope.currentCategory.name);
		});

}]);
