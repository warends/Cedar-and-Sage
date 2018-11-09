angular.module('posts.controller', []).controller('PostsController', ['$scope', '$window', '$http', 'Meta', 'NotifierService', function($scope, $window, $http, Meta, notifier){

    Meta.setTitle(' Interior Design Inspiration and Advice Blog | Cedar + Sage Design | Online Interior Design Studio');
    Meta.setDesc('Get some interior design inspiration and design advice and tips on our Monday mood board posts.');
    Meta.setKeywords('Scandinavian inspiration, Pittsburgh inspiration, living room inspiration, kitchen inspiration, patio inspiration, bedroom inspiration, coastal inspiration, nursery inspiration, wood inspiration, wallpaper inspiration');
    $scope.posts;

    $http.get('/api/posts/list').then((res)=> {
        $scope.posts = res.data;
        // console.log(res.data);
    });

}]);
