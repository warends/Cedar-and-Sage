angular.module('pricing.factory', []).factory('PricingFactory', () => {
  var services = [
		{
      name: 'IN-HOME DESIGN',
      slug: 'the-works',
      img: 'img/pricing/the-works.png',
      imgAlt: 'The Works',
      banner: 'img/services/floor-plan.png',
      subHead: 'making your space functional',
			desc: "I will come to your home or commercial space to gather information regarding the design. The design process will be conceptualized, furniture, finishes and decor will be selected and approved by the client, and installation will occur.  Concierge design is a move-in service for obtaining necessary items, such as kitchen and bath accessories like dishes and shower curtains.",
			level: ['personal', 'all'],
      price: '$150/HR',
      button: {
        type: 'contact',
        text: 'contact to get started',
        link: 'contact'
      }
		},
    {
      name: 'STAGING CONSULTATION',
      slug: 'staging',
      img: 'img/pricing/staging-consult.png',
      imgAlt: 'Staging Consultation',
      banner: 'img/services/floor-plan.png',
      subHead: 'making your space functional',
      included: ['Staging Consulation', '3D Renderings', 'Branding'],
      desc: "This one's for my realtor friends. Do you have a client with a bad design? I give design advice to your client to create a welcoming environment for your open house.",
			price: '$150/HR',
			level: ['professional', 'all'],
      button: {
        type: 'contact',
        text: 'contact to get started',
        link: 'contact'
      }
		},
		{
      name: 'THE CURATOR',
      slug: 'curator',
      img: 'img/pricing/curator.png',
      imgAlt: 'The Curator',
      banner: 'img/services/master-br.png',
      subHead: 'amplifying client spaces',
      included: ['Curator', 'The Works', 'Professional Option', "Client`s Choice"],
      desc: "The client works with me remotely by sending photos of the space to be designed, dimensions, and any inspiration. Cedar + Sage Design provides a mood board, floor plan, and purchase list. This is a very flexible program and allows the client to make their design come to life on their time.",
			price: '$10/Sq Ft',
			level: ['personal', 'all'],
      button: {
        type: 'link',
        text: 'Learn More',
        link: 'curator'
      }
		},
		{
      name: 'THE PROFESSIONAL OPINION',
      slug: 'professional',
      img: 'img/pricing/professional-opinion.png',
      imgAlt: 'The Professional Option',
      banner: 'img/services/floor-plan.png',
      subHead: 'making your space functional',
      desc: "I come to the client's home or retail space to give design tips and recommendations regarding the client's current design and possible future design.",
			price: '$150/HR',
			level: ['personal', 'all'],
      button: {
        type: 'contact',
        text: 'contact to get started',
        link: 'contact'
      }
		},
		{
      name: '3D RENDERINGS',
      slug: '3d-renderings',
      img: 'img/pricing/3d-renderings.png',
      imgAlt: '3D Renderings',
      banner: 'img/services/floor-plan.png',
      subHead: 'making your space functional',
      desc: "Set your listing apart from the competition with 3D Renderings. With my help, you can gain an edge in digital marketing. You can even save time and money by having your clients visit listings virtually first. 3D renderings are also a great way for clients to visualize properties under construction.",
			price: 'Price: To Be Determined',
			level: ['professional', 'all'],
      button: {
        type: 'modal',
        text: 'View',
        link: 'viewRendering'
      }
		},
		{
      name: 'BRANDING',
      slug: 'branding',
      img: 'img/pricing/branding.png',
      imgAlt: 'Branding Booklet',
      banner: 'img/services/floor-plan.png',
      subHead: 'making your space functional',
      desc: "It is important for businesses to stand out. By creating branding tools that potential clients or architects can get their hands on, I will help move your business to the front of the line. I can develop business tools that reflect your vision and reach your specific audience, such as portfolio booklets.",
			price: 'Starting at: $500',
			level: ['professional', 'all'],
      button: {
        type: 'modal',
        text: 'View',
        link: 'viewBooklet'
      }
		},
		{
      name: 'CLIENT\'S CHOICE',
      slug: 'clients-choice',
      img: 'img/pricing/clients-choice.png',
      imgAlt: 'Client\'s Choice',
      banner: 'img/services/floor-plan.png',
      subHead: 'making your space functional',
      desc: "A personally tailored design service can be created for you if these services do not align with what you are looking for in your project. This could be a shopping partner at your favorite furniture store to help make decisions, help selecting pillows or accessories, or even assistance determining the best paint color for your space.",
			price: 'Price: To Be Determined.',
			level: ['personal', 'all'],
      button: {
        type: 'contact',
        text: 'contact to get started',
        link: 'contact'
      }
    }
  ];


  return {
    list: function(){
      return services;
    },
    find: function(slug){
        return services.find(function(service) {
            return service.slug === slug;
        });
    }
  }
})
