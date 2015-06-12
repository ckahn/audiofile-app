AudioFileApp.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl,
    this.currentUser = options.currentUser
  },

  routes: {
    '': 'home',
    'collection': 'collection',
    'home': 'home',
    'profile': 'profile',
    'upload': 'upload'
  },

  collection: function () {
    this.currentUser.fetch();
    var collectionView = new AudioFileApp.Views.TracksCollection({
      collection: this.currentUser.likedTracks()
    });
    this.swapView(collectionView)
  },

  home: function () {
    var homeView = new AudioFileApp.Views.Home({
      collection: AudioFileApp.Collections.tracks
    });
    this.swapView(homeView);
  },

  profile: function () {
    var user = new AudioFileApp.Models.User({ id: CURRENT_USER_ID });
    user.fetch();
    var profileView = new AudioFileApp.Views.UserProfile({ model: user });
    this.swapView(profileView);
  },

  upload: function () {
    cloudinary.openUploadWidget({ cloud_name: 'dhowpobqx', upload_preset: 'tyi3ktkx'});
    var uploadView = new AudioFileApp.Views.TrackUpload();
    this.swapView(uploadView);
  },

  swapView: function (view) {
    if (this._currentView) {
      this._currentView.remove();
    }
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
