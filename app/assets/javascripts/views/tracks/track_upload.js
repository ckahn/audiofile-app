AudioFileApp.Views.TrackUpload = Backbone.View.extend({
  initialize: function () {
    this.track = new AudioFileApp.Models.Track({
      uploader_id: CURRENT_USER_ID
    });

    this.listenTo(this.track, 'sync', this.render);

    this.$uploadForm = $.cloudinary.unsigned_upload_tag(
      "notransforms",
      {
        cloud_name: "dhowpobqx",
        resource_type: "raw",
        file: "DATA"
      }
    );

    this.$uploadForm.addClass('hide').attr('id', 'file');

    this.$uploadForm.bind('cloudinarystart', function (e, data) {
      this.fileName = this.$uploadForm.val().replace('C:\\fakepath\\', '');
      $('#file-name').text(this.fileName);
      $('button#save-button').prop("disabled", true);
      $('.progress-bar').addClass('active');
      $('.progress').removeClass('hide');
    }.bind(this));

    this.$uploadForm.bind('fileuploadadd', function(e, data) {
      this.uploadProcess = data.submit();
    }.bind(this));

    this.$uploadForm.bind('cloudinaryprogress', function (e, data) {
      this.progress = Math.round((data.loaded * 100) / data.total) + '%';
      $('.progress-bar')
        .attr('style', 'width: ' + this.progress)
        .text(this.progress);
    }.bind(this));

    this.$uploadForm.bind('cloudinarydone', function (e, data) {
      this.track.set('source', data.result.url);
      $('.progress-bar').removeClass('active').text('Done!');
      $('button').prop("disabled", false);
    }.bind(this));
  },

  className: 'modal fade',

  events: {
    'click #save-button': 'uploadTrack',
    'click a#change-photo': 'updatePhoto'
  },

  id: 'upload-view',

  template: JST['tracks/upload'],

  render: function () {
    var content = this.template({ track: this.track });
    this.$el.html(content);
    this.$el.find('#select-file').prepend(this.$uploadForm);

    this.$el.on('hidden.bs.modal', function () {
      if (this.uploadProcess) {
        this.uploadProcess.abort();
        this.uploadProcess = null;
      }
      this.$el.remove();
    }.bind(this));

    return this;
  },

  updatePhoto: function (e) {
    e.preventDefault();
    var form = this;
    var track = this.track;
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function (error, result) {
      var data = result[0];
      form.imageUrl = data.url;
      $('img#track-photo').attr('src', form.imageUrl);
    });
  },

  uploadTrack: function (e) {
    e.preventDefault();
    $('p.text-danger').remove();
    var title = this.$el.find('form').serializeJSON().track.title;
    this.track.set('image', this.imageUrl);
    this.track.set('title', title);
    this.track.save({}, {
      success: function () {
        $('#upload-view').modal('hide');
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
    });
  },
});
