AudioFileApp.Models.Track = Backbone.Model.extend(
  _.extend({}, AudioFileApp.Mixins.Likable, {
    initialize() {
      this.set('isPlaying', 'false');
    },

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

AudioFileApp.Models.currentTrack = new AudioFileApp.Models.Track({ id: null });
