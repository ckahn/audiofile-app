window.AudioFileApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  // alert('Hello from Backbone!');
    var router = new AudioFileApp.Routers.Router($('#main'));
    var navbar = new AudioFileApp.Views.NavbarView({
      user: CURRENT_USER_ID
    });
    $('#navbar').html(navbar.render().$el);
    Backbone.history.start();
  }
};
