AudioFileApp.Collections.TracksExplore = Backbone.Collection.extend({
  model: AudioFileApp.Models.Track,

  url: 'api/tracks/'
});
