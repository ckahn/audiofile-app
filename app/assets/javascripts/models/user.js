AudioFileApp.Models.User = Backbone.Model.extend({
  urlRoot: '/api/users',

  parse: function (response) {
    if (response.uploaded_tracks) {
      this.uploadedTracks().set(response.uploaded_tracks);
      delete response.uploaded_tracks;
    }
    return response;
  },

  uploadedTracks: function () {
    if (!this._uploadedTracks) {
      this._uploadedTracks = new AudioFileApp.Collections.Tracks(
        [], { user: this }
      );
    }
    return this._uploadedTracks;
  }
});
