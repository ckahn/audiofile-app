AudioFileApp.Views.HomeExplore = Backbone.CompositeView.extend({
  initialize: function () {
    this.collection.fetch();
    this.listenTo(this.collection, 'add', this.render);
  },

  id: 'explore-view',

  template: JST['tracks/explore'],

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
