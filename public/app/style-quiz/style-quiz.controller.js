angular.module('style-quiz.controller', []).controller('StyleQuizController', ['$scope', '$http', 'StyleQuizFactory', 'NotifierService', 'Meta', ($scope, $http, StyleQuizFactory, notifier, Meta) => {

    Meta.setTitle('Style Quiz | Cedar + Sage Design | Online Interior Design Studio');

    window.scrollTo(0, 0);

	$scope.hasFinished = false;
	$scope.answers = '';
	$scope.responses = {
		bohemian: 0,
		contemporary: 0,
		eclectic: 0,
		industrial: 0,
		modern: 0,
		scandanavian: 0,
		traditional: 0,
		travel: 0
	}
    $scope.formData= {};

    $scope.select = function(e){
        var box = angular.element(e.target);
    }

    const styleForm = document.getElementById('style-title');
    $scope.questions = StyleQuizFactory.list();
    $scope.currentQuestion = 0;

    $scope.isCurrentQIndex = (index) => {
        return $scope.currentQuestion === index;
    }

    $scope.nextQ = () => {
		styleForm.scrollIntoView(true);
		const answer = $scope.questions[$scope.currentQuestion].response;
		$scope.responses[answer]++;
        $scope.currentQuestion = ($scope.currentQuestion < $scope.questions.length -1) ? ++$scope.currentQuestion : 0;
    }

    $scope.prevQ = () => {
        styleForm.scrollIntoView(true);
        $scope.currentQuestion = ($scope.currentQuestion > 0) ? --$scope.currentQuestion : $scope.questions.length -1;
    }

    $scope.submitQuiz = () => {
		const keys = Object.keys($scope.responses);
		const largest = Math.max.apply(null, Object.keys($scope.responses).map(x => $scope.responses[x]));
		const answers = keys.reduce((result, key) => { 
				if ($scope.responses[key] === largest){ 
					result.push(key); 
				} 
				return result;
			}, []);
		if(answers.length > 2) {
			answers.length = 2;
		}
		console.log($scope.responses);
		const data = {
			name: $scope.formData.name,
            email: $scope.formData.email,
            phone: $scope.formData.phone,
			note: $scope.formData.note,
			answers: answers
		}
		console.log(data);

        $http.post('/api/style-quiz', data)
            .then((response) => {
				$scope.currentQuestion = 0;
				$scope.answers = data.answers.join(', ');
                // notifier.notify('Thank you for your message ' + response.data.name);
                $scope.styleForm.$setPristine();
				$scope.responses = {
					bohemian: 0,
					contemporary: 0,
					eclectic: 0,
					industrial: 0,
					modern: 0,
					scandanavian: 0,
					traditional: 0,
					travel: 0
				}
				$scope.formData= {};
				$scope.hasFinished = true;
            }, (err) => {
                notifier.error('There was an error processing your request. Please try again');
                console.log('There was a problem submitting your form ' + err);
            });
    }

}]);
