AudioFileApp.Views.User = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.model, 'change:num_follows', this.render);
  },

  className: 'list-group-item',

  events: {
    'click button': 'toggleFollow'
  },

  tagName: 'li',

  template: JST['users/user'],

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  },

  toggleFollow: function (event) {
    event.preventDefault();
    this.model.toggleFollow();
  },
});
