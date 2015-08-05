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
    'users/:id': 'userShow',
  },

  collection: function () {
    var collectionView = new AudioFileApp.Views.Collection();
    this.swapView(collectionView);
  },

  home: function () {
    var homeView = new AudioFileApp.Views.Home();
    this.swapView(homeView);
  },

  profile: function () {
    var user = new AudioFileApp.Models.User({ id: CURRENT_USER_ID });
    user.fetch();
    var profileView = new AudioFileApp.Views.UserProfile({ model: user });
    this.swapView(profileView);
  },

  userShow: function (id) {
    var user = new AudioFileApp.Models.User({ id: id });
    user.fetch();
    var profileView = new AudioFileApp.Views.UserProfile({ model: user });
    this.swapView(profileView);
  },

  swapView: function (view) {
    if (this._currentView) {
      this._currentView.remove();
    }
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  },
});
