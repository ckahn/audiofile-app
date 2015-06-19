AudioFileApp.Views.AudioPlayer = Backbone.View.extend({
  template: JST['audio_player'],
  
  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
})
