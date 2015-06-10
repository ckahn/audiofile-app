AudioFileApp.Views.NavbarView = Backbone.View.extend({
  initialize: function (options) {
    this.user = options.user;
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
    var content = this.template({user: this.user});
    this.$el.html(content);
    return this;
  }
})
