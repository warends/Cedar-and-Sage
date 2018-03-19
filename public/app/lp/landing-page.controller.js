angular.module('landing-page.controller', []).controller('LandingPageController', ['$scope', '$rootScope', '$http', 'Meta', 'NotifierService', function($scope, $rootScope, $http, Meta, notifier){

    Meta.setTitle('Landing Page');

}]);
