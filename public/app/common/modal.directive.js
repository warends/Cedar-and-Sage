angular.module('common.modal', []).directive('globalModal', ['$rootScope', function($rootScope){

  return{
    restrict: 'E',
    scope: {
      show: '=',
      video: '@'
    },
    replace: true,
    transclude: true,
    link : function(scope, element, attrs){
      scope.dialogStyle = {};
      if(attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;

      scope.hideModal = function(){
        if(scope.video) {
            const vid = document.getElementById('CS-video');
            vid.pause();  
        }
        $rootScope.contactShow = false;
        $rootScope.qShow = false;
        scope.show = false;
      };
    },
    templateUrl: '/uiViews/modal'
  }

}]);
