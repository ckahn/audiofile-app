window.AudioFileApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
  // alert('Hello from Backbone!');
    new AudioFileApp.Routers.Router($('#main'));
    Backbone.history.start();
  }
};

$(document).ready(function(){
  AudioFileApp.initialize();
});
