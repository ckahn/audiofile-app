AudioFileApp.Views.UserEdit = Backbone.View.extend({
  initialize: function () {
    this.model.fetch();
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    'submit form': 'update'
  },

  template: JST['users/edit'],

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  },

  update: function (event) {
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    this.model.save(params, {
      success: function () {
        console.log('SAVED');
      },
      error: function () {
        console.log('NOT SAVED');
      }
    })
  },
})
