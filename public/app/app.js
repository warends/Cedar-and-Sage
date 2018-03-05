const app = angular.module('hb-interiors', ['home', 'services', 'common', 'ed', 'about.controller', 'ui.router', 'ngScrollReveal']);

app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', ($locationProvider, $stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
          url: '/',
          templateUrl: '/templates/home/home',
          controller: 'HomeController'
      })
      .state('services', {
          url: '/services',
          templateUrl: '/partials/services/services',
          controller: 'ServiceController'
      })
      .state('e-design', {
          url: '/e-design',
          templateUrl: '/partials/ed/ed',
          controller: 'EDesignController'
      })
      .state('about', {
          url: '/about',
          templateUrl: '/partials/about/about',
          controller: 'AboutController'
      })
      .state('services.detail', {
          url: '/:slug',
          templateUrl: '/partials/services/services-detail',
          controller: 'SelectedServiceController'
      });
}]);


app.run(['$rootScope', '$location', function($rootScope, $location){

  $rootScope.toggleContact = function(){
      $rootScope.contactShow = !$rootScope.contactShow;
  }
  $rootScope.qShow = false;
  $rootScope.toggleQForm = () => {
      $rootScope.qShow = !$rootScope.qShow;
  }

  $rootScope.$on("$stateChangeSuccess", function (event, currentRoute, previousRoute) {
      window.scrollTo(0,0);
  });

}]);
