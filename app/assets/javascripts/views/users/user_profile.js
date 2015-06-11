AudioFileApp.Views.UserProfile = Backbone.CompositeView.extend({
  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
  },

  id: 'profile-view',

  template: JST['users/profile'],

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    var tracksIndexView = new AudioFileApp.Views.TracksIndex({
      collection: AudioFileApp.Collections.tracks
    });
    this.$el.find('#user-uploaded-list').append(tracksIndexView.render().$el);
    return this;
  },
});
