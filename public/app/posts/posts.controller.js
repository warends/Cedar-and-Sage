angular.module('posts.controller', []).controller('PostsController', ['$scope', '$window', '$http', 'Meta', 'NotifierService', function($scope, $window, $http, Meta, notifier){

    Meta.setTitle('Posts');
    $scope.posts;

    $http.get('/api/posts/list').then((res)=> {
        $scope.posts = res.data;
        console.log(res.data);
    });

}]);
