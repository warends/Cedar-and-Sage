angular.module('curator.controller', []).controller('CuratorController', ['$scope', '$rootScope', '$http', '$window', 'QFactory', 'NotifierService', 'Meta', ($scope, $rootScope, $http, $window, QFactory, notifier, Meta) => {

    Meta.setTitle('Curator | Cedar + Sage Design | Interior Design Studio');
    Meta.setDesc("Luxury made affordable with our Virtual Interior Design Package.  Work one-on-one with an interior design expert to receive your curated shopping list.");
    Meta.setKeywords('online interior design, inspiration images, quick and fun design, virtual interior design, connect with us remotely, e-design, luxury made affordable, interior design, curator, virtual interior design services, personal style at any budget, online home interior design');

	window.scrollTo(0, 0);
	
	$http.get('/api/curator/content').then((res)=> {
		$scope.content = res.data[0];
		if ($scope.content.seoImage) {
			Meta.setSocialImage($scope.content.seoImage.url);
			Meta.setSecureSocialImage($scope.content.seoImage.secure_url);
		}
	});

    $scope.screenW = $window.innerWidth;

    $scope.colorList = [];
    $scope.colorNoList = [];
    $scope.drawnToList = [];
    $scope.furnitureList = [];
    $scope.formData= {};
    function addToList(answer, list){
        var index = list.indexOf(answer);
        if(index > -1){
            list.splice(index, 1);
        } else {
            list.push(answer);
        }
    }
    $scope.toggleColor = function(answer, question){
        if(question == 'q2'){
            addToList(answer, $scope.drawnToList);
        } else if(question == 'q3'){
            addToList(answer, $scope.furnitureList);
        } else if(question == 'q5'){
            addToList(answer, $scope.colorList);
        } else {
            addToList(answer, $scope.colorNoList);
        }
    }

    $scope.select = function(e){
        var box = angular.element(e.target);
    }

    const qForm = document.getElementById('qFormTitle');
    $scope.questions = QFactory.list();
    $scope.currentQuestion = 0;

    $scope.isCurrentQIndex = (index) => {
        return $scope.currentQuestion === index;
    }

    $scope.nextQ = () => {
        qForm.scrollIntoView(true);
        $scope.currentQuestion = ($scope.currentQuestion < $scope.questions.length -1) ? ++$scope.currentQuestion : 0;
    }

    $scope.prevQ = () => {
        qForm.scrollIntoView(true);
        $scope.currentQuestion = ($scope.currentQuestion > 0) ? --$scope.currentQuestion : $scope.questions.length -1;
    }

    $scope.submitQuestionaire = () => {

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

        $http.post('/api/questionaire-signup', data)
            .then((response) => {
                $scope.currentQuestion = 0;
                $rootScope.qShow = false;
                notifier.notify('Thank you for your message ' + response.data.name);
                $scope.qForm.$setPristine();
                $scope.colorList = [];
                $scope.colorNoList = [];
                $scope.drawnToList = [];
                $scope.furnitureList = [];
                $scope.formData= {};
            }, (err) => {
                notifier.error('There was an error processing your request. Please try again');
                console.log('There was a problem submitting your form ' + err);
            });
    }

    $scope.mySplit = function(string, i) {
        var array = string.split('-');
        if(array[i+1] === undefined){
            return array[i];
        } else if(array[i+2] === undefined){
            return array[i] + ' ' + array[i+1];
        } else {
            return array[i] + ' ' + array[i+1] + ' ' + array[i+2];
        }
    }


}]);
