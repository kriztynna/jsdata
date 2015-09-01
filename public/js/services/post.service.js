'use strict';

app.factory('Post', function(DS, $state, User) {
    var Post = DS.defineResource({
        basePath: '/api',
        idAttribute: '_id',
        name: 'posts',
        relations: {
          belongsTo: {
            users: {
                localField: 'users',
                localKey: 'author'
                }
            }
         },
        methods: {
            go: function () {$state.go('post', {postId: this._id});}
        }
    });
    return Post;
});
