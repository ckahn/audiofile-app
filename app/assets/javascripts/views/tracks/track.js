AudioFileApp.Views.Track = Backbone.CompositeView.extend({
  initialize: function () {
    var likeWidgetView = new AudioFileApp.Views.TrackLikeWidget({
      model: this.model
    })
    this.addSubview("#like-widget", likeWidgetView);
  },

  togglePlay: function () {
    if (this.model.get('isPlaying') === 'false') {
      this.$el.find('.progress').addClass('hidden');
      this.$el.find('.glyphicon-stop')
        .removeClass('glyphicon-stop')
        .addClass('glyphicon-play');
      this.$el.find('button')
        .removeClass('stop')
        .addClass('play');
      $('#audio-player').addClass('hidden');
      this.$el.find('.progress-bar').attr('style', 'width: 0%');
    }
  },

  className: 'list-group-item',

  events: {
    'click #like-widget': 'toggleLike',
    'click button.play': 'play',
    'click button.stop': 'stop'
  },

  tagName: 'li',

  template: JST['tracks/track'],

  notPlaying: function () {
    if (this.model.id !== AudioFileApp.Models.currentTrack.id) {
      this.$el.find('.progress').addClass('hidden');
      this.$el.find('.glyphicon-stop')
        .removeClass('glyphicon-stop')
        .addClass('glyphicon-play');
      this.$el.find('button')
        .removeClass('stop')
        .addClass('play');
      $('#audio-player').addClass('hidden');
      this.$el.find('.progress-bar').attr('style', 'width: 0%');
    }
  },

  playMode: function () {
    var player = $('#audio-player audio')[0];
    var progress = player.currentTime / player.duration * 100;
    this.$el.find('.progress-bar').attr('style', 'width: ' + progress + '%');
  },

  render: function () {
    var content = this.template({ track: this.model });
    this.$el.html(content);
    if (this.model && (this.model.id === AudioFileApp.Models.currentTrack.id)) {
      AudioFileApp.Models.currentTrack.set('id', this.model.id);
      this.listenTo(
        AudioFileApp.Models.currentTrack, 'change:id', this.notPlaying
      );
      this.$el.find('.progress').removeClass('hidden');
      this.$el.find('.glyphicon-play')
        .removeClass('glyphicon-play')
        .addClass('glyphicon-stop');
      this.$el.find('button')
        .removeClass('play')
        .addClass('stop');
      $('#audio-player').removeClass('hidden');
      this.playIntId = window.setInterval(this.playMode.bind(this), 500);
    }
    this.attachSubviews();
    return this;
  },

  play: function () {
    AudioFileApp.Models.currentTrack.set('id', this.model.id);
    this.listenTo(AudioFileApp.Models.currentTrack, 'change:id', this.notPlaying);
    this.$el.find('.progress').removeClass('hidden');
    this.$el.find('.glyphicon-play')
      .removeClass('glyphicon-play')
      .addClass('glyphicon-stop');
    this.$el.find('button')
      .removeClass('play')
      .addClass('stop');
    $('#audio-player').removeClass('hidden');
    $('#audio-player audio')
      .attr('src', this.model.escape('source'))[0]
      .play();
    this.playIntId = window.setInterval(this.playMode.bind(this), 1000);
  },

  stop: function () {
    AudioFileApp.Models.currentTrack.set('id', null);
    this.model.set('isPlaying', 'false');
    this.$el.find('.progress').addClass('hidden');
    this.$el.find('.glyphicon-stop')
      .removeClass('glyphicon-stop')
      .addClass('glyphicon-play');
    this.$el.find('button')
      .removeClass('stop')
      .addClass('play');
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
