AudioFileApp.Views.UserEdit = Backbone.View.extend({
  initialize: function () {
    this.model.fetch();
    this.listenTo(this.model, 'sync', this.render);
  },

  className: 'modal fade',

  id: 'user-edit-view',

  events: {
    'click a#change-photo': 'updatePhoto',
    'click #save-button': 'updateInfo'
  },

  template: JST['users/edit'],

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);

    this.$el.on('hidden.bs.modal', function () {
      this.$el.remove();
    }.bind(this));

    return this;
  },

  updateInfo: function (event) {
    event.preventDefault();
    $('p.text-danger').remove();
    var params = this.$el.find('form').serializeJSON();
    this.model.save(params, {
      success: function () {
        $('#user-edit-view').modal('hide');
        Backbone.history.navigate(
          'profile',
          { trigger: true }
        )
      },
      error: function (model, response) {
        $('div.modal-footer').prepend('<p class=text-danger>' +
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
