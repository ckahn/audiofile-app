AudioFileApp.Views.TrackLikeWidget = Backbone.View.extend({
  initialize: function () {
  },

  template: JST['tracks/track_like_widget'],

  render: function () {
    var content = this.template({ track: this.model, like: this.model.like() });
    this.$el.html(content);
    return this;
  },

  toggleLike: function (event) {
    event.preventDefault();
    this.model.toggleLike();
  }
});
