'use strict';

app.factory('Post', function(DS, $state) {
    var Post = DS.defineResource({
        basePath: '/api',
        idAttribute: '_id',
        name: 'posts',
        belongsTo: {
            user: {
                localField: 'user',
                localKey: 'author'
            }
        },
        methods: {
            go: function () {$state.go('post',{postId: this._id});}
        }
    });
    return Post;
});
