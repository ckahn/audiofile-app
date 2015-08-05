AudioFileApp.Views.UserProfile = Backbone.CompositeView.extend({
  initialize: function () {
    var userInfoView = new AudioFileApp.Views.UserInfo({
      model: this.model
    });
    this.addSubview('#user-info', userInfoView);

    var uploadedTracks = new AudioFileApp.Collections.TracksIndex();
    uploadedTracks.url = 'api/users/' + this.model.id + '/uploaded';
    uploadedTracks.fetch();

    var uploadedTracksView = new AudioFileApp.Views.TracksList({
      collection: uploadedTracks
    });
    this.addSubview('#user-uploaded-list', uploadedTracksView);

    var followers = new AudioFileApp.Collections.Users();
    followers.url = 'api/users/' + this.model.id + '/followers';
    followers.fetch();

    var followersList = new AudioFileApp.Views.UsersList({
      collection: followers
    });
    this.addSubview('#users-list', followersList);

    var uploadedTracksView;
    var followersView;
  },

  id: 'profile-view',

  template: JST['users/profile'],

  render: function () {
    $('nav li').removeClass('active');
    $('#profile-tab').addClass('active');
    var content = this.template({ user: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },
});
