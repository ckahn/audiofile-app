AudioFileApp.Views.TracksCollection = Backbone.View.extend({
  template: JST['tracks/collection'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
