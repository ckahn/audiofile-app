AudioFileApp.Views.UsersList = Backbone.CompositeView.extend({
  initialize: function () {
    // this.collection.fetch();
    this.listenTo(this.collection, 'add', this.addUserSubview);
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
})
