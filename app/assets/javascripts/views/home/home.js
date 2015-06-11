AudioFileApp.Views.Home = Backbone.View.extend({
  initialize: function () {
    this.tracks = new AudioFileApp.Collections.Tracks();
    this.streamView = new AudioFileApp.Views.HomeStream({
      collection: AudioFileApp.Collections.tracks
    });
    this.exploreView = new AudioFileApp.Views.HomeExplore({
      collection: AudioFileApp.Collections.tracks
    });
  },

  events: {
    'click #explore-tab': 'showExplore',
    'click #stream-tab': 'showStream'
  },

  id: 'home-tabs',

  template: JST['tracks/home'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.$el.append(this.streamView.render().$el);
    return this;
  },

  showExplore: function (event) {
    event.preventDefault();
    $target = event.currentTarget;
    if (!$target.classList.contains('active')) {
      $('#explore-tab').addClass('active');
      $('#stream-tab').removeClass('active');
      $('#stream-view').empty();
      this.$el.append(this.exploreView.render().$el);
    }
  },

  showStream: function (event) {
    event.preventDefault();
    $target = event.currentTarget;
    if (!$target.classList.contains('active')) {
      $('#explore-tab').removeClass('active');
      $('#stream-tab').addClass('active');
      $('#explore-view').empty();
      this.$el.append(this.streamView.render().$el);
    }
  },

  showSubtab: function (event) {
    console.log('SUBTAB');
  }
});
