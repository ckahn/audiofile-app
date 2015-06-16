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
