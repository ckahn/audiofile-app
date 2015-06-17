AudioFileApp.Views.Collection = Backbone.CompositeView.extend({
  initialize: function () {

    likedTracksSubview = new AudioFileApp.Views.LikedTracks({
      collection: new AudioFileApp.Collections.LikedTracks()
    });

    this.addSubview("#liked-tracks", likedTracksSubview);

    followedUsersView = new AudioFileApp.Views.FollowedUsers({
      collection: new AudioFileApp.Collections.FollowedUsers()
    });

    this.addSubview("#followed-users", followedUsersView);

    //
    // this.listenTo(this.collection, 'add', this.addTrackSubview);
    //
    // this.collection.each(function (track) {
    //   this.addTrackSubview(track);
    // }.bind(this));
  },

  className: 'container',

  id: 'collection-view',

  template: JST['collection/collection'],
  //
  // addCollectionSubview: function (track) {
  //   var trackSubview = new AudioFileApp.Views.Track({
  //     model: track,
  //     collection: this.collection
  //   });
  //   this.addSubview("ul.tracks-index", trackSubview);
  // },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },
});
