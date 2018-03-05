angular.module('banner.dir', []).directive('pageBanner', () => {
  return {
    restrict: 'E',
    templateUrl: '/partials/home/banner',
    replace: true,
    scope: { bgImage: '@' }
  };
});
