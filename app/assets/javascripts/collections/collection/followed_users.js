AudioFileApp.Collections.FollowedUsers = Backbone.Collection.extend({
  model: AudioFileApp.Models.User,

  url: function () {
    return'/api/users/' + CURRENT_USER_ID + '/followed_users'
  }
});
