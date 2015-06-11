AudioFileApp.Views.UserProfile = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
  },

  id: 'profile-view',

  template: JST['user_profile'],

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  },
});
