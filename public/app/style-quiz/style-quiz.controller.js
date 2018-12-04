angular.module('style-quiz.controller', []).controller('StyleQuizController', ['$scope', '$rootScope', '$http', 'StyleQuizFactory', 'NotifierService', 'Meta', ($scope, $rootScope, $http, StyleQuizFactory, notifier, Meta) => {

    Meta.setTitle('Style Quiz | Cedar + Sage Design | Online Interior Design Studio');

    window.scrollTo(0, 0);

	$scope.responses = {
		boho: 0,
		contemp: 0,
		eclectic: 0,
		indusrial: 0,
		modern: 0,
		scand: 0,
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
        $scope.currentQuestion = ($scope.currentQuestion < $scope.questions.length -1) ? ++$scope.currentQuestion : 0;
    }

    $scope.prevQ = () => {
        styleForm.scrollIntoView(true);
        $scope.currentQuestion = ($scope.currentQuestion > 0) ? --$scope.currentQuestion : $scope.questions.length -1;
    }

    $scope.submitQuiz = () => {

        var data = {
            q1: $scope.questions[0].response,
            q2: $scope.drawnToList,
            q3: $scope.furnitureList,
            q4: $scope.questions[3].response,
            q5: $scope.colorList,
            q6: $scope.colorNoList,
            name: $scope.formData.name,
            email: $scope.formData.email,
            phone: $scope.formData.phone,
            note: $scope.formData.note
        }

        // $http.post('/api/questionaire-signup', data)
        //     .then((response) => {
        //         $scope.currentQuestion = 0;
        //         $rootScope.qShow = false;
        //         notifier.notify('Thank you for your message ' + response.data.name);
        //         $scope.qForm.$setPristine();
        //         $scope.colorList = [];
        //         $scope.colorNoList = [];
        //         $scope.drawnToList = [];
        //         $scope.furnitureList = [];
        //         $scope.formData= {};
        //     }, (err) => {
        //         notifier.error('There was an error processing your request. Please try again');
        //         console.log('There was a problem submitting your form ' + err);
        //     });
    }

}]);
