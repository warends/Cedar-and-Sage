angular.module('common.meta', []).factory('Meta', function(){
  var title = 'Cedar + Sage Online Interior Design Studio';
  var desc = 'Where DIY meets professional interior design. We offer online interior design, space planning, branding, residential and furniture design.';
  var keywords = 'boutique interior design studio, personally tailored services, virtual interior design, online interior design, interior design for everyone, shop your purchasing list, design style, style quiz, captivating compositions, decorate your home online';

  return {
    title: function() {return title;},
    setTitle: function(newTitle) {title = newTitle},
    description: function() {return desc;},
    setDesc: function(newDesc) {desc = newDesc},
    keywords: function() { return keywords; },
    setKeywords: function(newKeys) {keywords = newKeys}
  }
})
.controller('MetaController', ['$scope', 'Meta', function($scope, Meta){
  $scope.Meta = Meta;
  $scope.metaDesc = Meta;
}]);
