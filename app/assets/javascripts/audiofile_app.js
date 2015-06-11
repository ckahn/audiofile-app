window.AudioFileApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new AudioFileApp.Routers.Router($('#main'));
    var navbar = new AudioFileApp.Views.NavbarView();
    $('#navbar').html(navbar.render().$el);
    Backbone.history.start();
  }
};
