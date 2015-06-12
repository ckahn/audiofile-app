AudioFileApp.Collections.Tracks = Backbone.Collection.extend({
  model: AudioFileApp.Models.Track,

  url: '/api/tracks'
});

AudioFileApp.Collections.tracks = new AudioFileApp.Collections.Tracks();
