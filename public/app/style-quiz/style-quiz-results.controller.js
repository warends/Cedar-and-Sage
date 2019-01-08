angular.module('style-quiz-results.controller', []).controller('StyleQuizResultsController', ['$scope', '$state', '$location', 'StyleQuizFactory', 'Meta', ($scope, $state, $location, StyleQuizFactory, Meta) => {

	Meta.setSocialImage('http://res.cloudinary.com/www-cedarandsage-com/image/upload/v1545351821/style-quiz-seo.jpg');
	Meta.setSecureSocialImage('https://res.cloudinary.com/www-cedarandsage-com/image/upload/v1545351821/style-quiz-seo.jpg');

	window.scrollTo(0, 0);

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

	$scope.absUrl = $location.absUrl();
	$scope.encodedUrl = encodeURIComponent($scope.absUrl);
	console.log($scope.encodedUrl);

	Meta.setTitle(`Your style is ${$scope.formattedAnswers.toUpperCase()} | Style Quiz | Cedar + Sage Design | Online Interior Design Studio`);

}]);
