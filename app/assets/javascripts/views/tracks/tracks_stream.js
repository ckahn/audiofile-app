AudioFileApp.Views.TracksStream = Backbone.View.extend({
  render: function () {
    var content = "STREAM";
    this.$el.html(content);
    return this;
  }
});
