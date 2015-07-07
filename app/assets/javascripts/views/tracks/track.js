AudioFileApp.Views.Track = Backbone.CompositeView.extend({
  className: 'list-group-item',

  events: {
    'click #like-widget': 'toggleLike',
    'click button.play': 'playSong',
    'click button.stop': 'stopPlayingSong'
  },

  id: 'track-view',

  tagName: 'li',

  template: JST['tracks/track'],

  initialize: function () {
    var likeWidgetView = new AudioFileApp.Views.TrackLikeWidget({
      model: this.model
    })
    this.addSubview("#like-widget", likeWidgetView);
  },

  beginAudioStream: function () {
    $('#audio-player audio')
      .attr('src', this.model.escape('source'))[0]
      .play();
  },

  isPlaying: function () {
    return this.model.id === AudioFileApp.Models.currentlyPlaying.id;
  },

  playSong: function () {
    this.beginAudioStream();
    AudioFileApp.Models.currentlyPlaying.set('id', this.model.id);
    this.updateTrackDisplay();
    this.showPlayerWidget();
  },

  removePlayDisplay: function () {
    this.stopListening(AudioFileApp.Models.currentlyPlaying);
    this.toggleClasses();
    this.$el.find('.progress-bar').attr('style', 'width: 0%');
  },

  render: function () {
    var content = this.template({ track: this.model });
    this.$el.html(content);
    if (this.isPlaying()) {
      this.updateTrackDisplay();
    }
    this.attachSubviews();
    return this;
  },

  showPlayerWidget: function () {
    $('#song-icon').attr('src', this.model.escape('image'));
    $('#song-uploader-sm a')
      .attr('href', this.model.escape('uploader_link'))
      .text(this.model.escape('uploader_name'));
    $('#song-title-sm').text(this.model.get('title'));
    $('#audio-player').removeClass('hidden');
  },

  stopPlayingSong: function () {
    $('#audio-player').addClass('hidden');
    $('#audio-player audio')[0].pause();
    clearInterval(this.playIntId);
    AudioFileApp.Models.currentlyPlaying.set('id', null);
  },

  syncPlayProgress: function () {
    var view = this;
    var player = $('#audio-player audio')[0];
    this.playIntId = window.setInterval(function () {
      var progress = player.currentTime / player.duration * 100;
      view.$el.find('.progress-bar').attr('style', 'width: ' + progress + '%');
    }, 1000);
  },

  toggleClasses: function () {
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

  updateTrackDisplay: function () {
    this.toggleClasses();
    this.syncPlayProgress();
    this.listenToOnce(
      AudioFileApp.Models.currentlyPlaying, 'change:id', this.removePlayDisplay
    );
  },
});
