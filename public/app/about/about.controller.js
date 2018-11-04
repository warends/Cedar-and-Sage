angular.module('about.controller', []).controller('AboutController', ['$scope', 'Meta', ($scope, Meta) => {

    Meta.setTitle('About your interior designer | Cedar + Sage Design | Online Interior Design Studio');
    Meta.setDesc(' I’m a neurophysiologist turned interior designer with a rustic eclectic style.  I love to surround myself with soft, organic elements and greenery.');

}]);
