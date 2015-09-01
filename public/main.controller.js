'use strict';

app.config(function($stateProvider) {
	$stateProvider.state('main', {
		url: '/',
		templateUrl: '/main.html',
		controller: 'MainController',
			resolve: {
			// users: function(Users, $stateParams){
			// 	return Users.findAll();
			// }
			posts: function(Post, $stateParams){
				return Post.findAll().then(function (posts) {
					return Promise.all(posts.map(function(post) { 
						return Post.loadRelations(post,['users'])
					}))
				})
			}
		}
	})
})

app.controller('MainController', function($scope, posts) {
	console.log(posts);
	$scope.allPosts = posts;
	 	/*
		TODOS: 
		1 - use js-data to retrieve all users and all posts
		(HINT: if you want to be fancy, add a resolve block to this state 
		and retrieve the data there)

 	*/
})


