angular.module('service.controller', []).controller('ServiceController', ['$scope', '$stateParams', 'ServiceFactory', 'Meta', ($scope, $stateParams, ServiceFactory, Meta) => {

    $scope.services = ServiceFactory.list();

}]);

angular.module('service.detail.controller', []).controller('SelectedServiceController', ['$scope', '$stateParams', 'ServiceFactory', 'Meta', ($scope, $stateParams, ServiceFactory, Meta) => {

    $scope.selectedService = ServiceFactory.find($stateParams.slug);
    $scope.branding = false;
    $scope.branding = ($scope.selectedService.name === 'Branding') ? true : false;

    Meta.setTitle($scope.selectedService.name);

    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function(s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {}
                return i > -1;
            };
        }

    $scope.bookShow1 = false;
    $scope.bookShow2 = false;
    $scope.toggleBook1 = function(){
      $scope.bookShow1 = true;
    }
    $scope.toggleBook2 = function(){
      $scope.bookShow2 = true;
    }

    var getClosest = function ( elem, selector ) {
        // Get closest match
        for ( ; elem && elem !== document; elem = elem.parentNode ) {
            if ( elem.matches( selector ) ) return elem;
        }
        return null;
    };

    $scope.nextPage = function(){
        angular.element(document.querySelectorAll('.active'))
            .removeClass('active')
            .addClass('flipped')
            .next(document.querySelector('.page'))
            .addClass('active');
      // $('.active')
      //   .removeClass('active')
      //   .addClass('flipped')
      //   .next('.page')
      //   .addClass('active')
      //   .siblings();
    }

    $scope.prevPage = function(){
        $('.flipped')
          .last()
          .removeClass('flipped')
          .addClass('active')
          .siblings('.page')
          .removeClass('active');
            // var elem = document.querySelector('.flipped');
            //.last()
            // elem.removeClass('flipped')
            // .addClass('active')
            // .next(document.querySelector('.page'))
            // .removeClass('active');
    }

    $scope.currentPage = 0;

}]);
