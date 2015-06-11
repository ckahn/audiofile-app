AudioFileApp.Views.NavbarView = Backbone.View.extend({
  initialize: function (options) {
    this.listenTo(this.user, 'change', this.render)
  },

  events: {
    'click #navbar li': 'makeCurrentActive',
    'click a.navbar-brand': 'makeHomeActive'
  },

  template: JST['navbar'],

  makeCurrentActive: function (event) {
    $('#navbar li').removeClass('active');
    $(event.currentTarget).addClass('active');
  },

  makeHomeActive: function () {
    $('#navbar li').removeClass('active');
    $('#home-tab').addClass('active');
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
})