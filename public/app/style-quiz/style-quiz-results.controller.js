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

	Meta.setTitle(`Your style is ${$scope.formattedAnswers.toUpperCase()} | Style Quiz | Cedar + Sage Design | Online Interior Design Studio`);

	$scope.shareFB = () => {
		const absUrl = $location.absUrl();
		console.log(absUrl);
		window.open("https://www.facebook.com/sharer/sharer.php?u="+escape(absUrl)+"&t="+document.title, '', 
		'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
		return false;
	}

}]);
