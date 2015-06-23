AudioFileApp.Views.UsersList = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.collection, 'add', this.addUserSubview);
    this.listenTo(this.collection, 'sort', this.sort);
  },

  template: JST['users/users_list'],

  addUserSubview: function (user) {
    var userSubview = new AudioFileApp.Views.User({
      model: user,
      collection: this.collection
    });
    this.addSubview("ul#users-list", userSubview);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  sort: function (tracks) {
    this.eachSubview(function (userView) {
      userView.remove();
    });
    this.collection.each(function (user) {
      this.addUserSubview(user);
    }.bind(this));
  },
})
