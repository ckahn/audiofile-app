AudioFileApp.Views.Track = Backbone.CompositeView.extend({
  initialize: function () {
    var likeWidgetView = new AudioFileApp.Views.TrackLikeWidget({
      model: this.model
    })
    this.addSubview("#like-widget", likeWidgetView);
    this.listenTo(this.model, 'sync', this.sync_);
  },

  sync_: function () {
    console.log('SYNC');
  },

  className: 'list-group-item',

  events: {
    'click #like-widget': 'toggleLike',
    'click button': 'test',
  },

  tagName: 'li',

  template: JST['tracks/track'],

  render: function () {
    var content = this.template({ track: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  test: function () {
    this.$el.find('.progress').removeClass('hide');
    this.$el.find('.glyphicon-play')
      .removeClass('glyphicon-play')
      .addClass('glyphicon-pause');
    $('#audio-player').removeClass('hide');
  },

  toggleLike: function (event) {
    event.preventDefault();
    this.model.toggleLike();
  }
});
