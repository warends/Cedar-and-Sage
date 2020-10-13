angular.module('about.controller', []).controller('AboutController', ['$scope', '$http', 'Meta', ($scope, $http, Meta) => {

	Meta.setTitle('About your interior designer | Cedar + Sage Design | Online Interior Design Studio');
	Meta.setDesc(' I’m a neurophysiologist turned interior designer with a rustic eclectic style.  I love to surround myself with soft, organic elements and greenery.');
	Meta.setKeywords('Interior designer, tailoring interior design, Bend, OR, design at any income level, interior design Instagram, passion in design, interior architecture and design, Academy of Arts University');
	
	$http.get('/api/about/content').then((res)=> {
		$scope.content = res.data[0];
	});

}]);
