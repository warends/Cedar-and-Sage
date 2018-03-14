angular.module('post-detail.controller', []).controller('PostDetailController', ['$scope', '$stateParams', '$http', 'Meta', 'NotifierService', function($scope, $stateParams, $http, Meta, notifier){

    Meta.setTitle('Post Detail');
    $scope.post;
    const slug = $stateParams.slug;

    $http.get(`/api/post/${slug}`).then((res)=> {
        $scope.post = res.data;
        console.log(res.data);
    });

}]);
