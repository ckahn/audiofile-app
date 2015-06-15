AudioFileApp.Views.UserProfile = Backbone.CompositeView.extend({
  initialize: function () {
    // this.listenTo(this.model, 'change', this.render);
    // uploadedTracks.fetch();
    var userInfoView = new AudioFileApp.Views.UserInfo({
      model: this.model
    });
    this.addSubview('#user-info', userInfoView);

    uploadedTracks = new AudioFileApp.Collections.UploadedTracks();
    var uploadedTracksView = new AudioFileApp.Views.TracksList({
      collection: uploadedTracks
    });
    this.addSubview('#user-uploaded-list', uploadedTracksView);

    followers = this.model.followers();
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
    var content = this.template({ user: this.model });
    this.$el.html(content);
    this.attachSubviews();
    // var tracksList = new AudioFileApp.Views.TracksList({
    //   collection: uploadedTracks
    // })
    // this.$el.find('#user-uploaded-list').append(tracksList.render().$el);
    return this;
  },
});
