AudioFileApp.Collections.Tracks = Backbone.Collection.extend({
  model: AudioFileApp.Models.Track,

  url: '/tracks'
});

AudioFileApp.Collections.tracks = new AudioFileApp.Collections.Tracks();
