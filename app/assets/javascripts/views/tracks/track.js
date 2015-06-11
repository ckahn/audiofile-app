AudioFileApp.Views.Track = Backbone.View.extend({
  className: 'list-group-item',

  tagName: 'li',


  template: JST['tracks/track'],

  render: function () {
    var content = this.template({ track: this.model });
    this.$el.html(content);
    return this;
  }
});
