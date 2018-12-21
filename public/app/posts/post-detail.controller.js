angular.module('post-detail.controller', []).controller('PostDetailController', ['$scope', '$stateParams', '$http', 'Meta', function($scope, $stateParams, $http, Meta){

    $scope.post;
    const slug = $stateParams.slug;

    $http.get(`/api/post/${slug}`).then((res)=> {
        $scope.post = res.data;
		Meta.setTitle($scope.post.title);
		Meta.setSocialImage($scope.post.image.url);
		Meta.setSecureSocialImage($scope.post.image.secure_url);
    });

}]);
