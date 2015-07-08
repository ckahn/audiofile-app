AudioFileApp.Views.Collection = Backbone.CompositeView.extend({
  initialize: function () {

    likedTracksSubview = new AudioFileApp.Views.LikedTracks({
      collection: new AudioFileApp.Collections.LikedTracks()
    });

    this.addSubview("#liked-tracks", likedTracksSubview);

    var followed_users = new AudioFileApp.Collections.Users();
    followed_users.url = 'api/users/' + CURRENT_USER_ID + '/followed_users';
    followed_users.fetch();

    followedUsersView = new AudioFileApp.Views.FollowedUsers({
      collection: followed_users
    });

    this.addSubview("#followed-users", followedUsersView);
  },

  id: 'collection-view',

  template: JST['collection/collection'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },
});
