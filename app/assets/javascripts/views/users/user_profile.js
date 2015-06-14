AudioFileApp.Views.UserProfile = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
    uploadedTracks = new AudioFileApp.Collections.UploadedTracks();
    uploadedTracks.fetch();
  },

  id: 'profile-view',

  template: JST['users/profile'],

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    // var tracksIndexView = new AudioFileApp.Views.TracksIndex({
    //   collection: uploadedTracks
    // });
    // this.$el.find('#user-uploaded-list').append(tracksIndexView.render().$el);
    var tracksList = new AudioFileApp.Views.TracksList({
      collection: uploadedTracks
    })
    this.$el.find('#user-uploaded-list').append(tracksList.render().$el);
    return this;
  },
});
