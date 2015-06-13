AudioFileApp.Views.Track = Backbone.View.extend({
  initialize: function () {
  },

  className: 'list-group-item',

  events: {
    'click #like-button': 'toggleLike'
  },

  tagName: 'li',

  template: JST['tracks/track'],

  render: function () {
    var content = this.template({ track: this.model });
    this.$el.html(content);
    return this;
  },

  toggleLike: function (event) {
    event.preventDefault();
    this.model.toggleLike();
  }
});
