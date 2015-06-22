AudioFileApp.Views.TracksList = Backbone.CompositeView.extend({
  initialize: function () {
    this.collection.fetch();
    this.listenTo(this.collection, 'add', this.addTrackSubview);
    this.listenTo(this.collection, 'sort', this.sort);
  },

  template: JST['tracks/tracks_list'],

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

  sort: function (tracks) {
    this.eachSubview(function (trackView) {
      trackView.remove();
    });
    this.collection.each(function (track) {
      this.addTrackSubview(track);
    }.bind(this));
  },
});
