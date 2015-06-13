AudioFileApp.Collections.TracksCollection = Backbone.Collection.extend({
  model: AudioFileApp.Models.Track,

  url: function () {
    return'/api/users/' + CURRENT_USER_ID + '/liked'
  }
});
