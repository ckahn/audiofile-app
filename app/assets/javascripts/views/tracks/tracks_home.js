AudioFileApp.Views.TracksHome = Backbone.View.extend({
  events: {
    'click #explore-tab': 'showExplore',
    'click #stream-tab': 'showStream'
  },

  template: JST['tracks/home'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  showExplore: function (event) {
    event.preventDefault();
    $target = event.currentTarget;
    if (!$target.classList.contains('active')) {
      $('#explore-tab').addClass('active');
      $('#stream-tab').removeClass('active');
    }
  },

  showStream: function (event) {
    event.preventDefault();
    $target = event.currentTarget;
    if (!$target.classList.contains('active')) {
      $('#explore-tab').removeClass('active');
      $('#stream-tab').addClass('active');
    }
  }
});
