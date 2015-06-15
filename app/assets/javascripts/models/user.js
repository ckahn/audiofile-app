AudioFileApp.Models.User = Backbone.Model.extend(
  _.extend({}, AudioFileApp.Mixins.Followable, {

    followableOptions: {
      foreignKey: 'followed_id'
    },

    followers: function () {
      if (!this._followers) {
        this._followers = new AudioFileApp.Collections.Users();
      }
      return this._followers
    },

    urlRoot: '/api/users',

    parse: function (payload) {
      this.parseFollow(payload);
      if (payload.followers) {
        this.followers().set(payload.followers);
        delete payload.followers;
      }
      return payload;
    },
  })
);
