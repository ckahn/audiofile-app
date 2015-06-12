AudioFileApp.Views.HomeStream = Backbone.View.extend({
  initialize: function () {
    this.collection.url = '/api/users/' + CURRENT_USER_ID + '/stream';
    this.collection.fetch();
    this.listenTo(this.collection, 'add', this.render);
  },

  id: 'stream-view',

  template: JST['tracks/stream'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    var tracksIndexView = new AudioFileApp.Views.TracksIndex({
      collection: this.collection
    });
    this.$el.append(tracksIndexView.render().$el);
    return this;
  }
});
