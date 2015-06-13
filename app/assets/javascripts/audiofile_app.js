window.AudioFileApp = {
  Mixins: {},
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new AudioFileApp.Routers.Router({
      $rootEl: $('#main'),
      currentUser: new AudioFileApp.Models.User({ id: CURRENT_USER_ID })
    });
    var navbar = new AudioFileApp.Views.NavbarView();
    $('#navbar').html(navbar.render().$el);
    Backbone.history.start();
  }
};
