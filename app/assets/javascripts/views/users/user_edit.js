AudioFileApp.Views.UserEdit = Backbone.View.extend({
  initialize: function () {
    this.model.fetch();
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    'click a#change-photo': 'updatePhoto',
    'submit form': 'updateInfo'
  },

  template: JST['users/edit'],

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  },

  updateInfo: function (event) {
    event.preventDefault();
    $('p.text-danger').remove();
    var params = $(event.currentTarget).serializeJSON();
    this.model.save(params, {
      success: function () {
        Backbone.history.navigate(
          'profile',
          { trigger: true }
        )
      },
      error: function (model, response) {
        $('button.btn').before('<p class=text-danger>' +
          response.responseJSON.toString() +
          '</p>');
      }
    })
  },

  updatePhoto: function (event) {
    event.preventDefault();
    var user = this.model;
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function (error, result) {
      var data = result[0];
      user.save({ image: data.url }, {
        success: function () {
          console.log('SUCCESS');
        }
      });
    });
  }
})
