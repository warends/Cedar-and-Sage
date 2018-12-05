angular.module('style-quiz.controller', []).controller('StyleQuizController', ['$scope', '$http', 'StyleQuizFactory', 'NotifierService', 'Meta', ($scope, $http, StyleQuizFactory, notifier, Meta) => {

    Meta.setTitle('Style Quiz | Cedar + Sage Design | Online Interior Design Studio');

    window.scrollTo(0, 0);

	$scope.hasFinished = false;
	$scope.answers = [];
	$scope.formattedAnswers = '';
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
	$scope.formData = {};
	$scope.client = '';

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
		// styleForm.scrollIntoView(true);
		const answer = $scope.questions[$scope.currentQuestion].response;
		$scope.responses[answer]++;
        $scope.currentQuestion = ($scope.currentQuestion < $scope.questions.length -1) ? ++$scope.currentQuestion : 0;
    }

    $scope.prevQ = () => {
        // styleForm.scrollIntoView(true);
        $scope.currentQuestion = ($scope.currentQuestion > 0) ? --$scope.currentQuestion : $scope.questions.length -1;
    }

    $scope.submitQuiz = () => {
		const keys = Object.keys($scope.responses);
		const largest = Math.max.apply(null, Object.keys($scope.responses).map(x => $scope.responses[x]));
		$scope.answers = keys.reduce((result, key) => { 
				if ($scope.responses[key] === largest){ 
					result.push(key); 
				} 
				return result;
			}, []);
		if($scope.answers.length > 2) {
			$scope.answers.length = 2;
		}
		$scope.formattedAnswers = $scope.answers.join(',').replace(/,/g, ' & ');
		const data = {
			firstName: $scope.formData.firstName,
			lastName: $scope.formData.lastName,
            email: $scope.formData.email,
            phone: $scope.formData.phone,
			note: $scope.formData.note,
			answers: $scope.formattedAnswers
		}

        $http.post('/api/style-quiz', data)
            .then((response) => {
				$scope.client = response.data.firstName;
				$scope.hasFinished = true;
            }, (err) => {
                notifier.error('There was an error processing your request. Please try again');
                console.log('There was a problem submitting your form ' + err);
            });
	}
	
	$scope.reset = () => {
		$scope.formData= {};
		$scope.hasFinished = false;
		$scope.questions = $scope.questions.map(q => {
			q.response = '';
			return q;
		});
		$scope.currentQuestion = 0;
		$scope.answers = [];
		$scope.formattedAnswers = '';
		$scope.client = '';
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
	}

}]);
