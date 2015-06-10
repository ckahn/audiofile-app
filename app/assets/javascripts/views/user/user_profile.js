AudioFileApp.Views.UserProfile = Backbone.CompositeView.extend({
  id: 'profile-view',

  template: JST['user_profile'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
