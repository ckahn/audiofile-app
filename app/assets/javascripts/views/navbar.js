AudioFileApp.Views.NavbarView = Backbone.View.extend({
  initialize: function (options) {
    this.listenTo(this.user, 'change', this.render)
  },

  events: {
    'click #navbar li': 'makeActive'
  },

  template: JST['navbar'],

  makeActive: function (event) {
    $('#navbar li').removeClass('active');
    $(event.currentTarget).addClass('active');
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
})
