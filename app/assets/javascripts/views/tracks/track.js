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
    'click button.play': 'play',
    'click button.stop': 'stop'
  },

  tagName: 'li',

  template: JST['tracks/track'],

  test: function () {
    var player = $('#audio-player audio')[0];
    var progress = player.currentTime / player.duration * 100;
    this.$el.find('.progress-bar').attr('style', 'width: ' + progress + '%');
  },

  render: function () {
    var content = this.template({ track: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  play: function () {
    this.$el.find('.progress').removeClass('hidden');
    this.$el.find('.glyphicon-play')
      .removeClass('glyphicon-play')
      .addClass('glyphicon-stop');
    this.$el.find('button').removeClass('play').addClass('stop');
    $('#audio-player').removeClass('hidden');
    $('#audio-player audio')
      .attr('src', this.model.escape('source'))[0]
      .play();
    this.playIntId = window.setInterval(this.test.bind(this), 1000);
  },

  stop: function () {
    this.$el.find('.progress').addClass('hidden');
    this.$el.find('.glyphicon-stop')
      .removeClass('glyphicon-stop')
      .addClass('glyphicon-play');
    this.$el.find('button').removeClass('stop').addClass('play');
    $('#audio-player').addClass('hidden');
    $('#audio-player audio')[0].pause();
    this.$el.find('.progress-bar').attr('style', 'width: 0%');

    clearInterval(this.playIntId);
  },

  toggleLike: function (event) {
    event.preventDefault();
    this.model.toggleLike();
  }
});
