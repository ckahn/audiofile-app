AudioFileApp.Views.Track = Backbone.CompositeView.extend({
  className: 'list-group-item',

  events: {
    'click #like-widget': 'toggleLike',
    'click button.play': 'playSong',
    'click button.stop': 'stopPlayingSong'
  },

  tagName: 'li',

  template: JST['tracks/track'],

  initialize: function () {
    var likeWidgetView = new AudioFileApp.Views.TrackLikeWidget({
      model: this.model
    })
    this.addSubview("#like-widget", likeWidgetView);
  },

  addPlayDisplay: function () {
    $('#audio-player').removeClass('hidden');
    AudioFileApp.Models.currentTrack.set('id', this.model.id);
    this.listenToOnce(
      AudioFileApp.Models.currentTrack, 'change:id', this.removePlayDisplay
    );
    this.toggleDisplay();
    this.playIntId = window.setInterval(
      this.trackPlayProgress.bind(this), 1000
    );
  },

  isPlaying: function () {
    if (this.model === undefined) {
      return false;
    } else {
      return this.model.id === AudioFileApp.Models.currentTrack.id;
    }
  },

  playSong: function () {
    $('#audio-player audio')
      .attr('src', this.model.escape('source'))[0]
      .play();
    this.addPlayDisplay();
  },

  removePlayDisplay: function () {
    this.stopListening(AudioFileApp.Models.currentTrack);
    this.toggleDisplay();
    this.$el.find('.progress-bar').attr('style', 'width: 0%');
  },

  render: function () {
    var content = this.template({ track: this.model });
    this.$el.html(content);
    if (this.isPlaying()) {
      this.addPlayDisplay();
    }
    this.attachSubviews();
    return this;
  },

  stopPlayingSong: function () {
    $('#audio-player').addClass('hidden');
    $('#audio-player audio')[0].pause();
    clearInterval(this.playIntId);
    this.removePlayDisplay();
  },

  toggleDisplay: function () {
    this.$el.toggleClass('playing');
    this.$el.find('.progress').toggleClass('hidden');
    this.$el.find('#player-button-icon')
      .toggleClass('glyphicon-play glyphicon-stop');
    this.$el.find('#player-button')
      .toggleClass('stop play');
  },

  toggleLike: function (event) {
    event.preventDefault();
    this.model.toggleLike();
  },

  trackPlayProgress: function () {
    var player = $('#audio-player audio')[0];
    var progress = player.currentTime / player.duration * 100;
    this.$el.find('.progress-bar').attr('style', 'width: ' + progress + '%');
  },
});
