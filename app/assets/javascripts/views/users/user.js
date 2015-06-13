AudioFileApp.Views.User = Backbone.View.extend({
  initialize: function () {
  },

  className: 'list-group-item',

  tagName: 'li',

  template: JST['users/user'],

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  }
});
