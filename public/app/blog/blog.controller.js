angular.module('blog.controller', []).controller('BlogController', ['$scope', '$window', '$http', 'Meta', 'NotifierService', function($scope, $window, $http, Meta, notifier){

    Meta.setTitle('Blog');
    $scope.posts;

    $http.get('/api/posts/list').then((res)=> {
        $scope.posts = res.data;
        console.log(res.data);
    });

}]);
