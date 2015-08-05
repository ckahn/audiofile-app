AudioFileApp.Views.NavbarView = Backbone.View.extend({
  initialize: function (options) {
    this.listenTo(this.user, 'change', this.render)
  },

  events: {
    'click li#upload': 'upload'
  },

  template: JST['navbar'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  upload: function (e) {
    e.preventDefault();
    var $uploadView = new AudioFileApp.Views.TrackUpload();
    var $form = $uploadView.render().$el;
    $form.appendTo('body');
    $form.modal('show');
  }
})
