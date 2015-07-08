// Models extending this module must have a `followableOptions` property pointing
// to an object with the following attributes:
//   foreignKey (e.g., "photo_id")

AudioFileApp.Mixins.Followable = {
  follow: function () {
    if (!this._follow) {
      this._follow = new AudioFileApp.Models.Follow;
    }
    return this._follow;
  },

  createFollow: function () {
    this.follow().save({}, {
      success: function () {
        this.updateFollowCount(1);
      }.bind(this)
    });
  },

  destroyFollow: function () {
    this.follow().destroy({
      success: function (model) {
        model.unset("id");
        this.updateFollowCount(-1);
      }.bind(this)
    });
  },

  toggleFollow: function () {
    if (this.follow().isNew()) {
      this.createFollow();
    } else {
      this.destroyFollow();
    }
  },

  updateFollowCount: function (delta) {
    this.set("num_followers", this.get("num_followers") + delta);
  },

  parseFollow: function (payload) {
    // Call this inside the model's #parse method.
    var attrs = {};
    attrs[this.followableOptions.foreignKey] = payload.id;
    this.follow().set(attrs);

    if (payload.follow) {
      this.follow().set(payload.follow);
      delete payload.follow;
    }
  }
}
