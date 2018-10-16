const app = angular.module('hb-interiors', ['home', 'services', 'common', 'ed', 'post', 'pricing', 'about.controller', 'landing-page.controller', 'ui.router', 'ngScrollReveal', 'ngSanitize']);

app.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', ($locationProvider, $stateProvider, $urlRouterProvider) => {

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
          url: '/',
          templateUrl: '/uiViews/home',
          controller: 'HomeController'
      })
      .state('services', {
          url: '/services',
          templateUrl: '/uiViews/services',
          controller: 'ServiceController'
      })
      .state('curator', {
          url: '/curator',
          templateUrl: '/uiViews/curator',
          controller: 'EDesignController'
      })
      .state('about', {
          url: '/about',
          templateUrl: '/uiViews/about',
          controller: 'AboutController'
	  })
	  .state('pricing', {
		  url: '/pricing',
		  templateUrl: '/uiViews/pricing',
		  controller: 'PricingController'
	  })
    .state('posts', {
        url: '/posts',
        templateUrl: '/uiViews/posts',
        controller: 'PostsController'
    })
    .state('post-detail', {
      url: '/post/:slug',
      templateUrl: 'uiViews/post-detail',
      controller: 'PostDetailController'
    })
    // .state('landing-page', {
    //   url: '/free-room-giveaway',
    //   templateUrl: 'uiViews/landing-page',
    //   controller: 'LandingPageController'
    // })
    .state('toc', {
      url: '/terms-and-conditions',
      templateUrl: 'uiViews/toc',
      controller: 'TOCController'
    })
    .state('privacy', {
      url: '/privacy-policy',
      templateUrl: 'uiViews/privacy',
      controller: 'PrivacyController'
    })
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
      // window.scrollTo(0,0);
      $rootScope.hideNav = (currentRoute.url === '/free-room-giveaway') ? true : false;
  });

}]);
