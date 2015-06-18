AudioFileApp.Views.HomeStream = Backbone.CompositeView.extend({
  initialize: function () {
    this.collection = new AudioFileApp.Collections.TracksStream();
    this.collection.fetch();
    this.listenTo(this.collection, 'add', this.addTrackSubview);
  },

  addTrackSubview: function (track) {
    var trackSubview = new AudioFileApp.Views.Track({
      model: track,
      collection: this.collection
    });
    this.addSubview("ul#tracks-list", trackSubview);
  },

  className: 'col-md-8',

  template: JST['home/stream'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
