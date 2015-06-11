AudioFileApp.Views.TracksCollection = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, 'add', this.render);
  },

  id: 'collections-view',

  template: JST['tracks/collection'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.collection.fetch();
    var tracksIndexView = new AudioFileApp.Views.TracksIndex({
      collection: this.collection
    });
    this.$el.find('#liked-tracks-list').append(tracksIndexView.render().$el);
    return this;
  }
});
