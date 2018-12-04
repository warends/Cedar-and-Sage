angular.module('style-quiz.factory', []).factory('StyleQuizFactory', () => {

	const answerArr = ['bohemian', 'contemporary', 'eclectic', 'industrial', 'modern', 'scandanavian', 'traditional', 'travel'];

    var questions = [
        {
			id: 'Q1',
			key: 'bath',
            type: 'radio',
            question: 'Where would you want to start your mornings?',
            cols: 'col-3',
            answers: answerArr,
            response: ''
        },
        {
			id: 'Q2',
			key: 'bed',
            type: 'radio',
            question: 'Where would you want to lay your head at night?',
            cols: 'col-3',
            answers: answerArr,
            response: ''
        },
        {
			id: 'Q3',
			key: 'dining',			
            type: 'radio',
            question: 'Where would you want to dine with your guests?',
            cols: 'col-3',
            answers: answerArr,
            response: ''
		},
		{
			id: 'Q4',
			key: 'fire',			
            type: 'radio',
            question: 'Which fireplace would you like to cozy up to?',
            cols: 'col-3',
            answers: answerArr,
            response: ''
		},
		{
			id: 'Q5',
			key: 'home',			
            type: 'radio',
            question: 'Which home feels the most welcoming to you?',
            cols: 'col-3',
            answers: answerArr,
            response: ''
		},
		{
			id: 'Q6',
			key: 'kitchen',
            type: 'radio',
            question: 'Where would you like to spend your time cooking?',
            cols: 'col-3',
            answers: answerArr,
            response: ''
		},
		{
			id: 'Q7',
			key: 'living',
            type: 'radio',
            question: 'In which space would you like to spend your time relaxing?',
            cols: 'col-3',
            answers: answerArr,
            response: ''
		},
        {
            id: 'Q8',
            type: 'text'
        }
    ];

    return {
      list: function(){
        return questions;
      }
    }

});
