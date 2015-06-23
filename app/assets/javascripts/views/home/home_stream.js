AudioFileApp.Views.HomeStream = Backbone.CompositeView.extend({
  initialize: function () {
    this.collection = new AudioFileApp.Collections.TracksStream();
    this.collection.fetch();
    this.listenTo(this.collection, 'add', this.addTrackSubview);
  },

  className: 'col-md-8',

  template: JST['home/stream'],

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
  }
});
