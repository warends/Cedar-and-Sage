angular.module('pricing.factory', []).factory('PricingFactory', () => {
  var services = [
    {
      name: 'THE CURATOR',
      slug: 'curator',
      img: 'img/pricing/curator.png',
      banner: 'img/services/master-br.png',
      subHead: 'amplifying client spaces',
      included: ['Curator', 'The Works', 'Professional Option', "Client`s Choice"],
      desc: "Local to the Bend, Oregon area? We are here to assist you in your design needs. We want you to feel at home in your home. We’d love to get to know you to develop a style that is all your own. A design package with concepts and a floor plan will be created all the way through installation. Contact us for a free consultation!",
      img1: 'img/services/kitchen.png',
      img1Alt: 'Kitchen designed with locally sourced wood',
      img2: 'img/services/interior-design.png',
      img2Alt: 'Interior design finishes and fabrics'
    },
    {
      name: 'STAGING CONSULTATION',
      slug: 'staging',
      img: 'img/pricing/staging-consult.png',
      banner: 'img/services/floor-plan.png',
      subHead: 'making your space functional',
      included: ['Staging Consulation', '3D Renderings', 'Branding'],
      desc: "What is space planning? It is creating a highly functional furniture arrangement. Would you like assistance arranging the layout of your space? We are here to help! We will organize your existing or new furniture in a way that creates a more natural and functional flow with a customized floor plan that you will love.",
      img1: 'img/services/floorplan-spaceplanning.jpg',
      img1Alt: 'Floor plan created in photoshop',
      img2: 'img/services/floorplan.png',
      img2Alt: 'Open floor plan'
		},
		{
      name: 'THE PROFESSIONAL OPINION',
      slug: 'professional',
      img: 'img/pricing/professional-opinion.png',
      banner: 'img/services/floor-plan.png',
      subHead: 'making your space functional',
      desc: "What is space planning? It is creating a highly functional furniture arrangement. Would you like assistance arranging the layout of your space? We are here to help! We will organize your existing or new furniture in a way that creates a more natural and functional flow with a customized floor plan that you will love.",
      img1: 'img/services/floorplan-spaceplanning.jpg',
      img1Alt: 'Floor plan created in photoshop',
      img2: 'img/services/floorplan.png',
      img2Alt: 'Open floor plan'
		},
		{
      name: '3D RENDERINGS',
      slug: '3d-renderings',
      img: 'img/pricing/3d-renderings.png',
      banner: 'img/services/floor-plan.png',
      subHead: 'making your space functional',
      desc: "What is space planning? It is creating a highly functional furniture arrangement. Would you like assistance arranging the layout of your space? We are here to help! We will organize your existing or new furniture in a way that creates a more natural and functional flow with a customized floor plan that you will love.",
      img1: 'img/services/floorplan-spaceplanning.jpg',
      img1Alt: 'Floor plan created in photoshop',
      img2: 'img/services/floorplan.png',
      img2Alt: 'Open floor plan'
		},
		{
      name: 'THE WORKS',
      slug: 'the-works',
      img: 'img/pricing/the-works.png',
      banner: 'img/services/floor-plan.png',
      subHead: 'making your space functional',
      desc: "What is space planning? It is creating a highly functional furniture arrangement. Would you like assistance arranging the layout of your space? We are here to help! We will organize your existing or new furniture in a way that creates a more natural and functional flow with a customized floor plan that you will love.",
      img1: 'img/services/floorplan-spaceplanning.jpg',
      img1Alt: 'Floor plan created in photoshop',
      img2: 'img/services/floorplan.png',
      img2Alt: 'Open floor plan'
		},
		{
      name: 'BRANDING BOOKLETS',
      slug: 'branding-booklets',
      img: 'img/pricing/branding.png',
      banner: 'img/services/floor-plan.png',
      subHead: 'making your space functional',
      desc: "What is space planning? It is creating a highly functional furniture arrangement. Would you like assistance arranging the layout of your space? We are here to help! We will organize your existing or new furniture in a way that creates a more natural and functional flow with a customized floor plan that you will love.",
      img1: 'img/services/floorplan-spaceplanning.jpg',
      img1Alt: 'Floor plan created in photoshop',
      img2: 'img/services/floorplan.png',
      img2Alt: 'Open floor plan'
		},
		{
      name: 'CLIENTS CHOICE',
      slug: 'clients-choice',
      img: 'img/pricing/clients-choice.png',
      banner: 'img/services/floor-plan.png',
      subHead: 'making your space functional',
      desc: "What is space planning? It is creating a highly functional furniture arrangement. Would you like assistance arranging the layout of your space? We are here to help! We will organize your existing or new furniture in a way that creates a more natural and functional flow with a customized floor plan that you will love.",
      img1: 'img/services/floorplan-spaceplanning.jpg',
      img1Alt: 'Floor plan created in photoshop',
      img2: 'img/services/floorplan.png',
      img2Alt: 'Open floor plan'
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
