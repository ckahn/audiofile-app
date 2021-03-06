AudioFileApp.Views.LikedTracks = Backbone.CompositeView.extend({
  initialize: function () {
    this.collection.fetch();
    this.listenTo(this.collection, 'add', this.addTrackSubview);
  },

  template: JST['collection/liked_tracks'],

  addTrackSubview: function (track) {
    var trackSubview = new AudioFileApp.Views.Track({
      model: track,
      collection: this.collection
    });
    this.addSubview("ul#tracks-list", trackSubview);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },
});
