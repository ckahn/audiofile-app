AudioFileApp.Views.Track = Backbone.CompositeView.extend({
  initialize: function () {
    var likeWidgetView = new AudioFileApp.Views.TrackLikeWidget({
      model: this.model
    })
    this.addSubview("#like-widget", likeWidgetView);
  },

  className: 'list-group-item',

  events: {
    'click #like-widget': 'toggleLike'
  },

  tagName: 'li',

  template: JST['tracks/track'],

  render: function () {
    var content = this.template({ track: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  toggleLike: function (event) {
    event.preventDefault();
    this.model.toggleLike();
  }
});
