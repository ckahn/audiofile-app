AudioFileApp.Models.User = Backbone.Model.extend({
  urlRoot: '/api/users',

  followedUsers: function () {
    if (!this._followedUsers) {
      this._followedUsers = new AudioFileApp.Collections.Users(
        [], { user: this }
      );
    }
    return this._followedUsers;
  },

  likedTracks: function () {
    if (!this._likedTracks) {
      this._likedTracks = new AudioFileApp.Collections.Tracks(
        [], { user: this }
      );
    }
    return this._likedTracks;
  },

  parse: function (response) {
    if (response.uploaded_tracks) {
      this.uploadedTracks().set(response.uploaded_tracks);
      delete response.uploaded_tracks;
    }
    if (response.liked_tracks) {
      this.likedTracks().set(response.liked_tracks);
      delete response.liked_tracks;
    }
    if (response.followed_users) {
      this.followedUsers().set(response.followed_users);
      delete response.followed_users;
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
