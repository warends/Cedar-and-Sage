angular.module('questionaire.factory', []).factory('QFactory', () => {

    var questions = [
        {
            id: 'q1',
            type: 'radio',
            question: 'Which space would you like designed first?',
            cols: 'col-xs-4',
            answers: ['Living', 'Bedroom', 'Dining', 'Bath', 'Kitchen', 'Other'],
            response: ''
        },
        {
            id: 'q2',
            type: 'checkbox',
            question: 'Which image(s) are you drawn to?',
            cols: 'col-xs-6 col-sm-4',
            images: [
                {
                    name: 'img1',
                    selected: false,
                },
                {
                    name: 'img2',
                    selected: false,
                },
                {
                    name: 'img3',
                    selected: false,
                },
                {
                    name: 'img4',
                    selected: false,
                },
                {
                    name: 'img5',
                    selected: false,
                },
                {
                    name: 'img6',
                    selected: false,
                }
            ],
        },
        {
            id: 'q3',
            type: 'checkbox',
            question: 'Where would you shop for furniture?',
            cols: 'col-xs-6 col-sm-4',
            images: [
                {
                    name: 'ikea',
                    selected: false,
                },
                {
                    name: 'pier-1',
                    selected: false,
                },
                {
                    name: 'west-elm',
                    selected: false,
                },
                {
                    name: 'crate-&-barrel',
                    selected: false,
                },
                {
                    name: 'cb2',
                    selected: false,
                },
                {
                    name: 'restoration-hardware',
                    selected: false,
                }
            ],
        },
        {
            id: 'q4',
            type: 'radio',
            question: 'How much money are you budgeting for your project after the design fee, which begins around $1,500 per space?',
            cols: 'col-xs-6 col-sm-4',
            answers: ['1-2', '2-5', '5-10', '10-15', '15-25', '25up'],
            response: ''
        },
        {
            id: 'q5',
            type: 'checkbox',
            question: 'What colors would you like to see in the design',
            cols: 'col-color',
            design: 'colors',
            colors: [
                {   name: 'Black',
                    selected: false
                },
                {   name: 'Grey',
                    selected: false
                },
                {   name: 'Red',
                    selected: false
                },
                {   name: 'Orange',
                    selected: false
                },
                {   name: 'Yellow',
                    selected: false
                },
                {   name: 'Lime',
                    selected: false
                },
                {   name: 'Green',
                    selected: false
                },
                {   name: 'Aqua',
                    selected: false
                },
                {   name: 'Turquoise',
                    selected: false
                },
                {   name: 'Slate',
                    selected: false
                },
                {   name: 'Blue',
                    selected: false
                },
                {   name: 'Purple',
                    selected: false
                },
                {   name: 'Pink',
                    selected: false
                },
                {   name: 'Brown',
                    selected: false
                },
                {   name: 'Cream',
                    selected: false
                },
                {   name: 'White',
                    selected: false
                }
            ]
        },
        {
            id: 'q6',
            type: 'checkbox',
            question: 'Select which colors you would NOT want to see',
            cols: 'col-color',
            colors: [
                {   name: 'Black',
                    selected: false
                },
                {   name: 'Grey',
                    selected: false
                },
                {   name: 'Red',
                    selected: false
                },
                {   name: 'Orange',
                    selected: false
                },
                {   name: 'Yellow',
                    selected: false
                },
                {   name: 'Lime',
                    selected: false
                },
                {   name: 'Green',
                    selected: false
                },
                {   name: 'Aqua',
                    selected: false
                },
                {   name: 'Turquoise',
                    selected: false
                },
                {   name: 'Slate',
                    selected: false
                },
                {   name: 'Blue',
                    selected: false
                },
                {   name: 'Purple',
                    selected: false
                },
                {   name: 'Pink',
                    selected: false
                },
                {   name: 'Brown',
                    selected: false
                },
                {   name: 'Cream',
                    selected: false
                },
                {   name: 'White',
                    selected: false
                }
            ]
        },
        {
            id: 'q7',
            type: 'text'
        }
    ];

    return {
      list: function(){
        return questions;
      }
    }

});
