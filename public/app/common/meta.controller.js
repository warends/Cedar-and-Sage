angular.module('common.meta', []).factory('Meta', function(){
  let title = 'Cedar + Sage Online Interior Design Studio';
  let desc = 'Where DIY meets professional interior design. We offer online interior design, space planning, branding, residential and furniture design.';
	let keywords = 'boutique interior design studio, personally tailored services, virtual interior design, online interior design, interior design for everyone, shop your purchasing list, design style, style quiz, captivating compositions, decorate your home online';
	let socialImage = 'https://www.cedarandsagedesign.com/img/curator/moodboard.png';

  return {
    title: () => title,
    setTitle: (newTitle) => title = newTitle,
    description: () => desc,
    setDesc: (newDesc) => desc = newDesc,
    keywords: () => keywords,
		setKeywords: (newKeys) => keywords = newKeys,
		socialImage: () => socialImage,
		setSocialImage: (newImage) => socialImage = newImage
  }
})
.controller('MetaController', ['$scope', 'Meta', function($scope, Meta){
  $scope.Meta = Meta;
  $scope.metaDesc = Meta;
}]);
