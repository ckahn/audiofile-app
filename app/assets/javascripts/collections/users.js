AudioFileApp.Collections.Users = Backbone.Collection.extend({
  model: AudioFileApp.Models.User,

  url: '/api/users'
});
