AudioFileApp.Collections.Tracks = Backbone.Collection.extend({
  model: AudioFileApp.Models.User,

  url: '/api/users'
});
