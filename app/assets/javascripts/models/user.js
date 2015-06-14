AudioFileApp.Models.User = Backbone.Model.extend({
  urlRoot: '/api/users',

  followedUsers: function () {
    if (!this._followedUsers) {
      this._followedUsers = new AudioFileApp.Collections.Users(
        [], { user: this }
      );
    }
    return this._followedUsers;
  },

  parse: function (response) {
    if (response.followed_users) {
      this.followedUsers().set(response.followed_users);
      delete response.followed_users;
    }
    return response;
  },
});
