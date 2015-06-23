AudioFileApp.Views.HomeExplore = Backbone.CompositeView.extend({
  initialize: function () {
    this.allTracks = new AudioFileApp.Collections.TracksIndex();
    this.allTracks.fetch();
    this.tracksIndexView = new AudioFileApp.Views.TracksList({
      collection: this.allTracks
    });
    this.addSubview("#tracks-index", this.tracksIndexView);

    this.allUsers = new AudioFileApp.Collections.Users()
    this.allUsers.fetch();
    var usersIndexView = new AudioFileApp.Views.UsersList({
      collection: this.allUsers
    });
    this.addSubview("#all-users", usersIndexView);
  },

  events: {
    'click a#track-sort-recent': 'sortTrackByRecent',
    'click a#track-sort-likes': 'sortTrackByLikes',
    'click a#track-sort-title': 'sortTrackByTitle',
    'click a#user-sort-name': 'sortUserByName',
    'click a#user-sort-followers': 'sortUserByFollowers',
    'click a#user-sort-likes': 'sortUserByLikes',
  },

  id: 'explore-view',

  template: JST['home/explore'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

   sortTrackByRecent: function (e) {
     e.preventDefault();
     $('#track-sort-option').text('recent');
     console.log('SORT BY RECENT');
   },

   sortTrackByLikes: function (e) {
     e.preventDefault();
     $('#track-sort-option').text('likes');
     this.allTracks.comparator = function (track1, track2) {
       if (track1.get('num_likes') > track2.get('num_likes')) {
         return -1;
       } else if (track1.get('num_likes') < track2.get('num_likes')) {
         return 1;
       } else {
         return 0;
       }
     };
     this.allTracks.sort();
   },

   sortTrackByTitle: function (e) {
     e.preventDefault();
     $('#track-sort-option').text('title');
     this.allTracks.comparator = 'title';
     this.allTracks.sort();
   },

   sortUserByName: function (e) {
     e.preventDefault();
     $('#user-sort-option').text('name');
     this.allUsers.comparator = 'username';
     this.allUsers.sort();
   },

   sortUserByFollowers: function (e) {
     e.preventDefault();
     $('#user-sort-option').text('followers');
     this.allUsers.comparator = function (user1, user2) {
       if (user1.get('num_followers') > user2.get('num_followers')) {
         return -1;
       } else if (user1.get('num_followers') < user2.get('num_followers')) {
         return 1;
       } else {
         return 0;
       }
     };
     this.allUsers.sort();
   },

   sortUserByLikes: function (e) {
     e.preventDefault();
     $('#user-sort-option').text('likes');
     this.allUsers.comparator = function (user1, user2) {
       if (user1.get('num_likes') > user2.get('num_likes')) {
         return -1;
       } else if (user1.get('num_likes') < user2.get('num_likes')) {
         return 1;
       } else {
         return 0;
       }
     };
     this.allUsers.sort();
   }
});
