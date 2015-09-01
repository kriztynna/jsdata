'use  strict';

app.factory('User', function(DS) {
    var User = DS.defineResource({
        basePath: '/api',
        idAttribute: '_id',
        name: 'users',
        relations: {
        hasMany: {posts: {localField: 'posts', foreignKey: 'author'}}
      }
    });
    return User;
});