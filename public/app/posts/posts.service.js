angular.module('post.service', []).factory('PostService', ['$http', ($http) => {

  return {
    getPosts: function(url){
      return $http.get(url).then((res)=> {
				return res.data;
			});
		},
		getPost: function(slug){
      return $http.get(`/api/post/${slug}`).then((res)=> {
				return res.data;
			});
		},
		getCategories: function(){
      return $http.get('/api/categories/list').then((res)=> {
				return res.data;
			});
    },
    getCategoryPosts: function(id){
      return $http.get(`/api/categories/${id}`).then((res)=> {
				return res.data;
			});
    },
  }
}]);
