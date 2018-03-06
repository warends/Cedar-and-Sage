angular.module('banner.dir', []).directive('pageBanner', () => {
  return {
    restrict: 'E',
    templateUrl: '/uiViews/banner',
    replace: true,
    scope: { bgImage: '@' }
  };
});
