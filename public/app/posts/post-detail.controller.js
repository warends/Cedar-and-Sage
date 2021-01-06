angular.module('post-detail.controller', []).controller('PostDetailController', ['$scope', '$stateParams', 'Meta', 'PostService', function($scope, $stateParams, Meta, PostService){

    $scope.post;	
	PostService.getPost($stateParams.slug)
		.then(res => {
			$scope.post = res;
			Meta.setTitle($scope.post.title);
			Meta.setSocialImage($scope.post.image.url);
			Meta.setSecureSocialImage($scope.post.image.secure_url);
		});
}]);
