AudioFileApp.Views.HomeExplore = Backbone.CompositeView.extend({
  initialize: function () {
    var tracksIndexView = new AudioFileApp.Views.TracksList({
      collection: new AudioFileApp.Collections.TracksIndex()
    });

    this.addSubview("#tracks-index", tracksIndexView);


    var usersIndexView = new AudioFileApp.Views.UsersList({
      collection: new AudioFileApp.Collections.Users()
    });

    this.addSubview("#all-users", usersIndexView);

    // this.listenTo(this.collection, 'add', this.addTrackSubview);
  },

  id: 'explore-view',

  template: JST['home/explore'],

  // addTrackSubview: function (track) {
  //   var trackSubview = new AudioFileApp.Views.Track({
  //     model: track,
  //     collection: this.collection
  //   });
  //   this.addSubview("ul#tracks-list", trackSubview);
  // },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
