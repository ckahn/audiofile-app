AudioFileApp.Views.FollowedUsers = Backbone.CompositeView.extend({
  initialize: function () {
    this.collection.fetch();
    this.listenTo(this.collection, 'add', this.addUserSubview);

    this.collection.each(function (track) {
      this.addUserSubview(track);
    }.bind(this));
  },

  template: JST['collection/followed_users'],

  addUserSubview: function (track) {
    var userSubview = new AudioFileApp.Views.User({
      model: track,
      collection: this.collection
    });
    this.addSubview("ul#followed-users-list", userSubview);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },
});
