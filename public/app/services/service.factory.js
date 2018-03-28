angular.module('service.factory', []).factory('ServiceFactory', () => {
  var services = [
    {
      name: 'Interior Design',
      slug: 'interior-design',
      logo: 'img/icons/home.svg',
      banner: 'img/services/master-br.png',
      subHead: 'amplifying client spaces',
      desc: "Local to the Bend, Oregon area? We are here to assist you in your design needs. We want you to feel at home in your home. We’d love to get to know you to develop a style that is all your own. A design package with concepts and a floor plan will be created all the way through installation. Contact us for a free consultation!",
      img1: 'img/services/kitchen.png',
      img1Alt: 'Kitchen designed with locally sourced wood',
      img2: 'img/services/interior-design.png',
      img2Alt: 'Interior design finishes and fabrics'
    },
    {
      name: 'Branding',
      slug: 'branding',
      logo: 'img/icons/finger-print.svg',
      banner: 'img/services/branding.jpg',
      subHead: 'Helping your customers get to know you',
      desc: "For businesses, it is important to be able to stand out. By creating branding tools that potential clients or architects can get their hands on, we will help move you to the front of the line. We can develop business tools that reflect your vision and reach your specific audience, such as portfolio booklets and business cards.",
      img1: 'img/services/branding1.png',
      img1Alt: 'Post 31 Interiors marketing booklet',
      img2: 'img/services/branding2.png',
      img2Alt: 'Billy Ceglia marketing booklet'
    },
    {
      name: 'Space Planning',
      slug: 'space-planning',
      logo: 'img/icons/measurement.svg',
      banner: 'img/services/floor-plan.png',
      subHead: 'making your space functional',
      desc: "What is space planning? It is creating a highly functional furniture arrangement. Would you like assistance arranging the layout of your space? We are here to help! We will organize your existing or new furniture in a way that creates a more natural and functional flow with a customized floor plan that you will love.",
      img1: 'img/services/floorplan-spaceplanning.jpg',
      img1Alt: 'Floor plan created in photoshop',
      img2: 'img/services/floorplan.png',
      img2Alt: 'Open floor plan'
    },
    {
      name: '3D Renderings',
      slug: '3D-renderings',
      logo: 'img/icons/chair1.svg',
      banner: 'img/services/website-kitchen-rendering.png',
      subHead: 'creating individualized products',
      desc: "Set your listing apart from the competition with 3D Renderings. With our help, you can gain an edge in digital marketing. Visually engaging content gets more views than standard content.  We can give you that advantage.  You can even save time and money by having your clients visit listings virtually first.  3D renderings are also a great way for clients to visualize properties under construction.",
      img1: 'img/services/downing-rendering.png',
      img1Alt: 'Downing Street 3D Rendering',
      img2: 'img/services/living-room-rendering.png',
      img2Alt: "Living Room 3D Rendering"
    }
  ];


  return {
    list: function(){
      return services;
    },
    find: function(slug){
        return services.find(function(service) {
            return service.slug == slug;
        });
    }
  }
})
