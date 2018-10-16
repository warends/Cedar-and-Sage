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
      desc: "Local to the Bend, Oregon area? We are here to assist you in your design needs. We want you to feel at home in your home. We’d love to get to know you to develop a style that is all your own. A design package with concepts and a floor plan will be created all the way through installation. Contact us for a free consultation!"
    },
    {
      name: 'STAGING CONSULTATION',
      slug: 'staging',
      img: 'img/pricing/staging-consult.png',
      imgAlt: 'Staging Consultation',
      banner: 'img/services/floor-plan.png',
      subHead: 'making your space functional',
      included: ['Staging Consulation', '3D Renderings', 'Branding'],
      desc: "What is space planning? It is creating a highly functional furniture arrangement. Would you like assistance arranging the layout of your space? We are here to help! We will organize your existing or new furniture in a way that creates a more natural and functional flow with a customized floor plan that you will love."
		},
		{
      name: 'THE PROFESSIONAL OPINION',
      slug: 'professional',
      img: 'img/pricing/professional-opinion.png',
      imgAlt: 'The Professional Option',
      banner: 'img/services/floor-plan.png',
      subHead: 'making your space functional',
      desc: "What is space planning? It is creating a highly functional furniture arrangement. Would you like assistance arranging the layout of your space? We are here to help! We will organize your existing or new furniture in a way that creates a more natural and functional flow with a customized floor plan that you will love."
		},
		{
      name: '3D RENDERINGS',
      slug: '3d-renderings',
      img: 'img/pricing/3d-renderings.png',
      imgAlt: '3D Renderings',
      banner: 'img/services/floor-plan.png',
      subHead: 'making your space functional',
      desc: "What is space planning? It is creating a highly functional furniture arrangement. Would you like assistance arranging the layout of your space? We are here to help! We will organize your existing or new furniture in a way that creates a more natural and functional flow with a customized floor plan that you will love."
		},
		{
      name: 'THE WORKS',
      slug: 'the-works',
      img: 'img/pricing/the-works.png',
      imgAlt: 'The Works',
      banner: 'img/services/floor-plan.png',
      subHead: 'making your space functional',
      desc: "What is space planning? It is creating a highly functional furniture arrangement. Would you like assistance arranging the layout of your space? We are here to help! We will organize your existing or new furniture in a way that creates a more natural and functional flow with a customized floor plan that you will love."
		},
		{
      name: 'BRANDING BOOKLETS',
      slug: 'branding-booklets',
      img: 'img/pricing/branding.png',
      imgAlt: 'Branding Booklet',
      banner: 'img/services/floor-plan.png',
      subHead: 'making your space functional',
      desc: "What is space planning? It is creating a highly functional furniture arrangement. Would you like assistance arranging the layout of your space? We are here to help! We will organize your existing or new furniture in a way that creates a more natural and functional flow with a customized floor plan that you will love."
		},
		{
      name: 'CLIENTS CHOICE',
      slug: 'clients-choice',
      img: 'img/pricing/clients-choice.png',
      imgAlt: 'Clients Choice',
      banner: 'img/services/floor-plan.png',
      subHead: 'making your space functional',
      desc: "What is space planning? It is creating a highly functional furniture arrangement. Would you like assistance arranging the layout of your space? We are here to help! We will organize your existing or new furniture in a way that creates a more natural and functional flow with a customized floor plan that you will love."
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
