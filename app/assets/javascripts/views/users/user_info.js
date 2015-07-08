AudioFileApp.Views.UserInfo = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  edit: function (e) {
    e.preventDefault();
    var editView = new AudioFileApp.Views.UserEdit({
      model: this.model
    });
    editView.render().$el.modal('show');
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
