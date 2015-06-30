AudioFileApp.Models.Track = Backbone.Model.extend(
  _.extend({}, AudioFileApp.Mixins.Likable, {
    urlRoot: 'api/tracks',

    likableOptions: {
      foreignKey: 'track_id'
    },

    parse: function (payload) {
      this.parseLike(payload);
      return payload;
    }
  })
);

AudioFileApp.Models.currentlyPlaying = new AudioFileApp.Models.Track({ id: null });
