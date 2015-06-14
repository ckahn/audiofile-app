AudioFileApp.Collections.TracksIndex = Backbone.Collection.extend({
  model: AudioFileApp.Models.Track,

  url: '/api/tracks'
});
