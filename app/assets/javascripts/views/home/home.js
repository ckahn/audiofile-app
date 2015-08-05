AudioFileApp.Views.Home = Backbone.View.extend({
  initialize: function () {
    this.streamView = new AudioFileApp.Views.HomeStream();
  },

  events: {
    'click #explore-tab': 'showExplore',
    'click #stream-tab': 'showStream'
  },

  id: 'home-view',

  template: JST['home/home'],

  render: function () {
    $('nav li').removeClass('active');
    $('#home-tab').addClass('active');
    var content = this.template();
    this.$el.html(content);
    this.$el.find('#home-view').html(this.streamView.render().$el);
    return this;
  },

  showExplore: function (event) {
    event.preventDefault();
    this.exploreView = new AudioFileApp.Views.HomeExplore();
    this.streamView.remove();
    $target = event.currentTarget;
    if (!$target.classList.contains('active')) {
      $('#explore-tab').addClass('active');
      $('#stream-tab').removeClass('active');
      $('#stream-view').empty();
      this.$el.find('#home-view').html(this.exploreView.render().$el);
    }
  },

  showStream: function (event) {
    event.preventDefault();
    this.streamView = new AudioFileApp.Views.HomeStream();
    this.exploreView.remove();
    $target = event.currentTarget;
    if (!$target.classList.contains('active')) {
      $('#explore-tab').removeClass('active');
      $('#stream-tab').addClass('active');
      $('#explore-view').empty();
      this.$el.find('#home-view').html(this.streamView.render().$el);
    }
  }
});
