angular.module('pricing.factory', []).factory('PricingFactory', () => {
  var services = [
    {
      name: 'THE CURATOR',
      slug: 'curator',
      img: 'img/pricing/curator.png',
      imgAlt: 'The Curator',
      banner: 'img/services/master-br.png',
      subHead: 'amplifying client spaces',
      included: ['Curator', 'The Works', 'Professional Option', "Client`s Choice"],
      desc: "The client works with us remotely by sending us photos of the space to be designed, dimensions, and any inspiratoin.  Cedar + Sage Design provides a mood board, floor plan, and purchase list.  This is a very flexible program and allows the client to make their design come to life on their time.",
      price: '$6/Sq Ft',
      button: {
        type: 'link',
        text: 'Learn More',
        link: 'curator'
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
      desc: "Do you have a client with bad design? We give deisng advice to your clien to create a welcoming environment for your open house.",
      price: '$100/HR',
      button: {
        type: 'contact',
        text: 'contact to get started',
        link: 'contact'
      }
		},
		{
      name: 'THE PROFESSIONAL OPINION',
      slug: 'professional',
      img: 'img/pricing/professional-opinion.png',
      imgAlt: 'The Professional Option',
      banner: 'img/services/floor-plan.png',
      subHead: 'making your space functional',
      desc: "The designer comes to the client's home/retail space to give design tips and reccomendations regarding the client's curreant design and possible furniture design.",
      price: '$100/HR',
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
      desc: "Set your listing apart from the competition with 3D Renderings. With our help, you can gain an edge in digital marketing. Visually engaging content gets more views than standard content. We can give you that advantage. You can even save time and money by having your clients visit listings virtually first. 3D renderings are also a great way for clients to visualize properties under construction.",
      price: 'Price: To Be Determined',
      button: {
        type: 'modal',
        text: 'View',
        link: 'viewRendering'
      }
		},
		{
      name: 'THE WORKS',
      slug: 'the-works',
      img: 'img/pricing/the-works.png',
      imgAlt: 'The Works',
      banner: 'img/services/floor-plan.png',
      subHead: 'making your space functional',
      desc: "This is a tranditional design service. The Designer will come to the client's home/ retail space to gather information regarding the design.  The design process will be conceptualized, furniture, finishes and decor will be selected and approved by client, and installation will occur.",
      price: '$100/HR',
      button: {
        type: 'contact',
        text: 'contact to get started',
        link: 'contact'
      }
		},
		{
      name: 'BRANDING BOOKLETS',
      slug: 'branding-booklets',
      img: 'img/pricing/branding.png',
      imgAlt: 'Branding Booklet',
      banner: 'img/services/floor-plan.png',
      subHead: 'making your space functional',
      desc: "For businesses, it is important to be able to stand out. By creating branding tools that potential clients or architects can get their hands on, we will help move you to the front of the line. We can develop business tools that reflect your vision and reach your specific audience, such as portfolio booklets.",
      price: 'Starting at: $500',
      button: {
        type: 'modal',
        text: 'View',
        link: 'viewBooklet'
      }
		},
		{
      name: 'CLIENTS CHOICE',
      slug: 'clients-choice',
      img: 'img/pricing/clients-choice.png',
      imgAlt: 'Clients Choice',
      banner: 'img/services/floor-plan.png',
      subHead: 'making your space functional',
      desc: "A personally tailored design service can be created for you if these services don't align wiht that you are looking for in your project. This could be a shopping parner at your favorite furniture store to help make decisions, help selecting pillows or accessories, or even assistance determining the best paint color for your space.",
      price: 'Price: To Be Determined.',
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
