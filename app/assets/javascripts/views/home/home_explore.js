AudioFileApp.Views.HomeExplore = Backbone.View.extend({
  id: 'explore-view',

  template: JST['tracks/explore'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
});
