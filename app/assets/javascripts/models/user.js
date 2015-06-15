AudioFileApp.Models.User = Backbone.Model.extend(
  _.extend({}, AudioFileApp.Mixins.Followable, {

    followableOptions: {
      foreignKey: 'followed_id'
    },

    urlRoot: '/api/users',

    parse: function (payload) {
      this.parseFollow(payload);
      return payload;
    },
  })
);
