AudioFileApp.Views.TrackUpload = Backbone.View.extend({
  id: 'upload-view',

  template: JST['tracks/upload'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
