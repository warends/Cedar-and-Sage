angular.module('post-category.controller', []).controller('PostCategoryController', ['$scope', '$stateParams', '$http', 'Meta', function($scope, $stateParams, $http, Meta){

	$scope.posts;
	$scope.currentCategory;
	$scope.categoryPage = true;

	$http.get('/api/categories/list').then((res)=> {
		$scope.currentCategory = res.data.find(cat => cat._id === $stateParams.id);
		$scope.categories = res.data;
	});

    $http.get(`/api/categories/${$stateParams.id}`).then((res)=> {
		$scope.posts = res.data;
		console.log(res);
		Meta.setTitle($scope.currentCategory.name);
    });

}]);
