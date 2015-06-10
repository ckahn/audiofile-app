AudioFileApp.Views.HomeStream = Backbone.CompositeView.extend({
  id: 'stream-view',

  template: JST['tracks/stream'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
