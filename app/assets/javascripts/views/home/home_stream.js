AudioFileApp.Views.HomeStream = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, 'add', this.render);
  },

  id: 'stream-view',

  template: JST['tracks/stream'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.collection.fetch();
    var tracksIndexView = new AudioFileApp.Views.TracksIndex({
      collection: this.collection
    });
    this.$el.append(tracksIndexView.render().$el);
    return this;
  }
});
