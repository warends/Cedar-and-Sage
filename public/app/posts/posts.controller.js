angular.module('posts.controller', []).controller('PostsController', ['$scope', '$http', '$location', 'Meta', function($scope, $http, $location, Meta){

    Meta.setTitle(' Interior Design Inspiration and Advice Blog | Cedar + Sage Design | Online Interior Design Studio');
    Meta.setDesc('Get some interior design inspiration and design advice and tips on our Monday mood board posts.');
    Meta.setKeywords('Scandinavian inspiration, Pittsburgh inspiration, living room inspiration, kitchen inspiration, patio inspiration, bedroom inspiration, coastal inspiration, nursery inspiration, wood inspiration, wallpaper inspiration');
	$scope.posts;
	$scope.pageQuery = $location.search().page;

	let url = $location.search().page
		? `/api/posts/list?page=${$scope.pageQuery}`
		: `/api/posts/list`;
    $http.get(url).then((res)=> {
		$scope.posts = res.data;
    });

}]);
