'use strict'; 

app.config(function($stateProvider) {
	$stateProvider.state('post', {
		url: '/post/:postId',
		templateUrl: 'js/post/post.html',
		controller: 'PostCtrl', 
		resolve: {
			post: function(Post, $stateParams){
				return Post.find($stateParams.postId).then(function (post) {
					return Post.loadRelations(post, ['users'])
				});
			}
		}
	})
});

// add necessary dependencies 
app.controller('PostCtrl', function(User, Post, $stateParams, $state, $scope, post) {
	$scope.post = post;
	$scope.post.author = post.users;
	function findPost () {
		
		/* 1. FIND POST
			use state params to retrieve the post id and attach post object to scope 
			on controller load 
		*/
	};

	function deletePost () {
		/*
			2. DELETE POST 
			create a function that destroys the post, adds an alert that the post has been 
			successfully deleted, and redirects to the main state. 
		*/		
	};

	function editPost () {
		/*
			3. EDIT POST 
			create a function that edits the post, adds an alert that the post has been 
			successfully edited, and displays the edited post.  

		*/	
	};
})

// User.find(10).then(function (user) {
//   // let's assume the server only returned the user
//   user.comments; // undefined
//   user.profile; // undefined
  
//   return User.loadRelations(user, ['comment', 'profile']);
// }).then(function (user) {
//   user.comments; // array
//   user.profile; // object
// });