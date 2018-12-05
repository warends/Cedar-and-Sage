angular.module('style-quiz.factory', []).factory('StyleQuizFactory', () => {

	const answerArr = ['bohemian', 'contemporary', 'eclectic', 'industrial', 'modern', 'scandanavian', 'traditional', 'worldly'];

    const questions = [
        {
			id: 'Q1',
			key: 'bath',
            type: 'radio',
            question: 'Where would you want to start your mornings?',
            cols: 'col-6 col-sm-3',
            answers: answerArr,
            response: ''
        },
        {
			id: 'Q2',
			key: 'bed',
            type: 'radio',
            question: 'Where would you want to lay your head at night?',
            cols: 'col-6 col-sm-3',
            answers: answerArr,
            response: ''
        },
        {
			id: 'Q3',
			key: 'dining',			
            type: 'radio',
            question: 'Where would you want to dine with your guests?',
            cols: 'col-6 col-sm-3',
            answers: answerArr,
            response: ''
		},
		{
			id: 'Q4',
			key: 'fire',			
            type: 'radio',
            question: 'Which fireplace would you like to cozy up to?',
            cols: 'col-6 col-sm-3',
            answers: answerArr,
            response: ''
		},
		{
			id: 'Q5',
			key: 'home',			
            type: 'radio',
            question: 'Which home feels the most welcoming to you?',
            cols: 'col-6 col-sm-3',
            answers: answerArr,
            response: ''
		},
		{
			id: 'Q6',
			key: 'kitchen',
            type: 'radio',
            question: 'Where would you like to spend your time cooking?',
            cols: 'col-6 col-sm-3',
            answers: answerArr,
            response: ''
		},
		{
			id: 'Q7',
			key: 'living',
            type: 'radio',
            question: 'In which space would you like to spend your time relaxing?',
            cols: 'col-6 col-sm-3',
            answers: answerArr,
            response: ''
		},
        {
            id: 'Q8',
            type: 'text'
        }
	];
	
	const answers = [
		{
			id: 'bohemian',
			desc: 'You’re a true free spirit!  You love to incorporate your life experiences, culture, and whimsy into your home.  You embrace a carefree approach to your design.  You love to surround yourself by things such as tapestries, greenery, and unusual objects.  An earthy color palette enhanced by jewel tones along with layered textures and patterns meets your relaxed vibe. You can shop this style best at second-hand stores, flee markets and always when traveling.'
		},
		{
			id: 'contemporary',
			desc: 'You love curved and softened lines with a more minimalist feel, metals and glass.  Your go to colors are found within a neutral color palette, such as black, white, gray and beige.  This blended style was developed in the late 20th century and is created with a mix of traditional, modern and art deco design.  You can shop this style at places like Crate and Barrel and Z Gallerie.'
		},
		{
			id: 'eclectic',
			desc: 'You span the majority of design styles and don’t want to put yourself in just one style category.  You love mixing old and new, different colors, different textures, and different style trends.  This style is best accomplished when it flows throughout your entire home versus in just one location.  You have the ability to shop just about anywhere to achieve this look. Yay!'
		},
		{
			id: 'industrial',
			desc: 'You love the look of brick, aged original hardwood floors and exposed beams and utilities.  Your go to’s are dark metals, steel piping, reclaimed wood and open concept spaces. You truly appreciate something old that can be repurposed into something new.  You can shop this style at a local furniture designers shop, an architectural salvage store or just create your own.',
		},
		{
			id: 'modern',
			desc: 'You truly appreciate mid-century modern and the art deco style.  You have a connection with an earthy feel, warm wood elements, minimalism, and clean architectural lines. You also believe Frank Lloyd Wright did things right!  Furniture with wooden frames and wooly bold colored upholstery are your go to.  You can shop this style at places like West Elm, All Modern and CB2.'
		},
		{
			id: 'scandanavian',
			desc: 'You are drawn to a design with a simple neutral color palette with a minimalistic and simple design.  This Nordic style has come to the forefront in the US by the introduction of Ikea and their Swedish meatballs!  You greatly appreciate the function of furniture in your home.  You can shop this style at places like West Elm, Restoration Hardware and the beloved or hated, depending on who you are, Ikea.'
		},
		{
			id: 'traditional',
			desc: 'You love rich colors that welcome you and your guests like a warm hug.  This style can span from 18th Century England to the French countryside.  You enjoy a good Damask pattern, a Persian rug and still-life artwork.  Crystal chandeliers and an abundance of ornate objects are calling your name.  You can shop this look at places like Thomasville Furniture and Ashley Furniture.'
		},
		{
			id: 'worldly',
			desc: 'Some may call you a globetrotter or claim that you have wanderlust.  Collecting unique artifacts and furnishings from your travels makes you so happy.  Each time you look at those objects, you reflect upon your experiences from that destination.  The world is your oyster or in this case…your go to marketplace!  Get out there and shop!'
		}
	]

    return {
      list: () => {
        return questions;
	  },
	  answers: () => {
		return answers;
	  }
    }

});
