# AudioFile
AudioFile is a social website for sharing music. It uses a RESTful Rails API on the 
backend, which interacts with Backbone.js on the frontend. View it [here](http://audio-file.us).

You can upload songs, as well as listen to and "like" the songs of others. By
"following" other users, you also create a stream that displays all the latest
songs they have uploaded.

## Main functionality
* Hand-rolled user authentication, with only encrypted passwords saved to the
database.
* A stream page to display only songs uploaded by followed users.
* A collection page to display only liked songs and followed users.
* An explore page to display sortable lists of all songs and users.
* Uploading of music directly from your browser to the cloud using Cloudinary's
API.
* User profiles that show how popular users are in terms of like and follow
counts, and also let you see all of a user's followers and uploaded songs.
* A persistent audio player that keeps playing while you to explore the site and 
visit different pages.

## Additional features
* If a track is currently playing, it will be displayed differently on any page 
where it is shown.

   ```javascript
   render: function () {
      var content = this.template({ track: this.model });
      this.$el.html(content);
      if (this.isPlaying()) {
        this.updateTrackDisplay();
      }
      this.attachSubviews();
      return this;
   },

   updateTrackDisplay: function () {
      this.toggleClasses();
      this.syncPlayProgress();
      this.listenToOnce(
        AudioFileApp.Models.currentlyPlaying, 'change:id', this.removePlayDisplay
      );
   },
   ```

   The added UI elements will include a progress bar that is synchronized using a
repeating callback passed to `setInterval`:

   ```javascript
   syncPlayProgress: function () {
      var view = this;
      var player = $('#audio-player audio')[0];
      this.playIntId = window.setInterval(function () {
        var progress = player.currentTime / player.duration * 100;
        view.$el.find('.progress-bar').attr('style', 'width: ' + progress + '%');
      }, 1000);
   },
   ```

* Sorting on the explore page is done by setting the comparator for a
collection and then sorting the collection accordingly:

   ```javascript
   sortUserByLikes: function (e) {
      e.preventDefault();
      $('#user-sort-option').text('likes');
      this.allUsers.comparator = function (user1, user2) {
        if (user1.get('num_likes') > user2.get('num_likes')) {
          return -1;
        } else if (user1.get('num_likes') < user2.get('num_likes')) {
          return 1;
        } else {
          return 0;
        }
      };
      this.allUsers.sort();
   }
``` 
   The associated view listens for a `sort` event on its collection, and when
such an event occurs it removes the current view items and then adds them back
according to the new order:

   ```javascript
   initialize: function () {
      this.collection.fetch();
      this.listenTo(this.collection, 'add', this.addTrackSubview);
      this.listenTo(this.collection, 'sort', this.sort);
   },
   
   sort: function (tracks) {
      this.eachSubview(function (userView) {
        userView.remove();
      });
      this.collection.each(function (user) {
        this.addUserSubview(user);
      }.bind(this));
   }
```
