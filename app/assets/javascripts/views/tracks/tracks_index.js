AudioFileApp.Views.TracksIndex = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.collection, 'add', this.addTrackSubview);

    this.collection.each(function (track) {
      this.addTrackSubview(track);
    }.bind(this));
  },

  template: JST['tracks/index'],

  addTrackSubview: function (track) {
    var trackSubview = new AudioFileApp.Views.Track({
      model: track,
      collection: this.collection
    });
    this.addSubview("ul.tracks-index", trackSubview);
  },

  render: function () {
    var content = this.template({ tracks: this.collection });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },
});
