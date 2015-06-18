AudioFileApp.Views.HomeExplore = Backbone.CompositeView.extend({
  initialize: function () {
    var allTracks = new AudioFileApp.Collections.TracksIndex();
    allTracks.fetch();
    var tracksIndexView = new AudioFileApp.Views.TracksList({
      collection: allTracks
    });
    this.addSubview("#tracks-index", tracksIndexView);

    allUsers = new AudioFileApp.Collections.Users()
    allUsers.fetch();
    var usersIndexView = new AudioFileApp.Views.UsersList({
      collection: allUsers
    });
    this.addSubview("#all-users", usersIndexView);
  },

  id: 'explore-view',

  template: JST['home/explore'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
});
