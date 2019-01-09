angular.module('style-quiz-results.controller', []).controller('StyleQuizResultsController', ['$scope', '$state', '$location', '$sce', 'StyleQuizFactory', 'Meta', ($scope, $state, $location, $sce, StyleQuizFactory, Meta) => {

	Meta.setSocialImage('http://res.cloudinary.com/www-cedarandsage-com/image/upload/v1545351821/style-quiz-seo.jpg');

	window.scrollTo(0, 0);

	const src = '//assets.pinterest.com/js/pinit.js';
  const script = document.createElement('script');
	script.setAttribute('src', src);
	document.body.appendChild(script);

	$scope.answers = $state.params.style2 
		? [$state.params.style1, $state.params.style2]
		: [$state.params.style1];
	$scope.formattedAnswers = $state.params.style2 
		? `${$state.params.style1} & ${$state.params.style2}`
		: `${$state.params.style1}`
	$scope.client = $state.params.client;
	$scope.answerList = StyleQuizFactory.answers().filter(answer => {
		if ($scope.answers.indexOf(answer.id) !== -1) {
			return answer;
		}
	});

	$scope.encodedUrl = encodeURIComponent(`https://www.cedarandsagedesign.com/style-quiz`);
	const fbUrl = `https://www.facebook.com/plugins/share_button.php?href=${$scope.encodedUrl}&layout=button&size=large&mobile_iframe=false&appId=1246936782112521&width=73&height=28`;
	$scope.fbShare = $sce.trustAsResourceUrl(fbUrl);

	$scope.title = `My style is ${$scope.formattedAnswers.toUpperCase()} | Cedar + Sage Design Style Quiz | Online Interior Design Studio`;
	Meta.setTitle($scope.title);

}]);
