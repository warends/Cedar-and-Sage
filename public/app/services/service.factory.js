angular.module('service.factory', []).factory('ServiceFactory', () => {
  var services = [
    {
      name: 'Interior Design For All',
      slug: 'interior-design',
      logo: 'img/icons/home.svg',
      banner: 'img/services/master-br.png',
			subHead: 'amplifying client spaces',
			link: 'personal',
      included: [
        {
          name: 'Curator',
          link: 'curator'
        },
        {
          name: 'The Works',
          link: 'pricing/personal'
        },
        {
          name: 'Professional Opinion',
          link: 'pricing/personal'
        },
        {
          name: 'Client\'s Choice',
          link: 'pricing/personal'
        }
      ],
      desc: "Local to the Bend, Oregon area? We are here to assist you in your design needs. We want you to feel at home in your home. We’d love to get to know you to develop a style that is all your own. A design package with concepts and a floor plan will be created all the way through installation. Contact us for a free consultation!",
      img1: 'img/services/kitchen.png',
      img1Alt: 'Kitchen designed with locally sourced wood',
      img2: 'img/services/interior-design.png',
      img2Alt: 'Interior design finishes and fabrics'
    },
    {
      name: 'Interior Design for the Pro',
      slug: 'space-planning',
      logo: 'img/icons/measurement.svg',
      banner: 'img/services/floor-plan.png',
			subHead: 'making your space functional',
			link: 'professional',
      included: [
        {
          name: 'Staging Consultation',
          link: 'pricing/professional'
        },
        {
          name: '3D Renderings',
          link: 'pricing/professional'
        },
        {
          name: 'Branding',
          link: 'pricing/professional'
        }
      ],
      desc: "What is space planning? It is creating a highly functional furniture arrangement. Would you like assistance arranging the layout of your space? We are here to help! We will organize your existing or new furniture in a way that creates a more natural and functional flow with a customized floor plan that you will love.",
      img1: 'img/services/floorplan-spaceplanning.jpg',
      img1Alt: 'Floor plan created in photoshop',
      img2: 'img/services/floorplan.png',
      img2Alt: 'Open floor plan'
    }
	];
	
	const homeServices = ['Space Planning', '3D Renderings', 'Furniture Selection', 'Paint Selection', 'Remodels', 'Kitchen and Bath', 'Concierge Design', 'And More']


  return {
    list: function(){
      return services;
		},
		homeList: function(){
      return homeServices;
    },
    find: function(slug){
        return services.find(function(service) {
            return service.slug == slug;
        });
    }
  }
})
