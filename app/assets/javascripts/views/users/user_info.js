AudioFileApp.Views.UserInfo = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  edit: function (e) {
    e.preventDefault();
    Backbone.history.navigate(
      '#users/' + this.model.id + '/edit',
      { trigger: true }
    );
  },

  events: {
    'click button': 'edit'
  },

  template: JST['users/user_info'],

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  },
});
