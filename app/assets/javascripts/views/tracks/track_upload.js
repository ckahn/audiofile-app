AudioFileApp.Views.TrackUpload = Backbone.View.extend({
  initialize: function () {
    this.track = new AudioFileApp.Models.Track({
      uploader_id: CURRENT_USER_ID
    });

    this.$uploadForm = $.cloudinary.unsigned_upload_tag(
      "notransforms",
      { cloud_name: "dhowpobqx" }
    );

    this.$uploadForm.bind('fileuploadstart', function (e, data) {
      $('button').prop("disabled", true);
    }.bind(this));

    this.$uploadForm.bind('cloudinarydone', function (e, data) {
      this.track.set('source', data.result.url);
      $('button').prop("disabled", false);
    }.bind(this));

    this.listenTo(this.track, 'sync', this.render);
  },

  events: {
    'submit form': 'uploadTrack',
    'click a#change-photo': 'updatePhoto'
  },

  id: 'upload-view',

  template: JST['tracks/upload'],

  render: function () {
    var content = this.template({ track: this.track });
    this.$el.html(content);
    this.$el.find('#select-file').html(this.$uploadForm);
    return this;
  },

  updatePhoto: function (e) {
    e.preventDefault();
    var form = this;
    var track = this.track;
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function (error, result) {
      var data = result[0];
      form.imageUrl = data.url;
      $('img').attr('src', form.imageUrl);
    });
  },

  uploadTrack: function (e) {
    e.preventDefault();
    var title = $(e.currentTarget).serializeJSON().track.title;
    this.track.set('image', this.imageUrl);
    this.track.set('title', title);
    this.track.save({}, {
      success: function () {
        console.log('SUCCESS');
      },
      error: function () {
        console.log('FAILURE');
      }
    });
  },
});
