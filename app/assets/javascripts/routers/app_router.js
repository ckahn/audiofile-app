AudioFileApp.Routers.Router = Backbone.Router.extend({
  initialize: function ($rootEl) {
    this.$rootEl = $rootEl
  },

  routes: {
    '': 'home',
    'collection': 'collection',
    'home': 'home',
    'upload': 'upload'
  },

  collection: function () {
    var collectionView = new AudioFileApp.Views.TracksCollection();
    this.swapView(collectionView);
  },

  home: function () {
    var homeView = new AudioFileApp.Views.TracksHome();
    this.swapView(homeView);
  },

  upload: function () {
    console.log('UPLOAD');
  },

  swapView: function (view) {
    if (this._currentView) {
      this._currentView.remove();
    }
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
