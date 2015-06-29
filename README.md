# AudioFile
AudioFile is a social website for sharing music. It uses Rails on the backend
and Backbone on the front.

View it [here](http://audio-file.us).

You can upload songs, as well as listen to and "like" the songs of others. By
"following" other users, you also create a stream that displays all the latest
songs they have uploaded.

## Main functionality
* Hand-rolled user signup and signin, with only encrypted passwords saved to the
  database.
* A stream page to display only songs uploaded by followed users.
* A collection page to display only liked songs and followed users.
* An explore page to display sortable lists of all songs and users.
* Uploading of music directly from your browser to the cloud using Cloudinary's
  API.
* User profiles that show how popular users are in terms of like and follow
  counts, and also let you see all of a user's followers and uploaded songs.
* A persistent audio player that keeps playing while you to explore the site.

## Additional features
* If a track is playing, it is displayed differently on any page where it is
  shown.  

```javascript
render: function () {
  var content = this.template({ track: this.model });
  this.$el.html(content);
  if (this.isPlaying()) {
    this.addPlayDisplay();
  }
  this.attachSubviews();
  return this;
}
```

The added UI elements will include a progress bar that is synchronized using a
repeating callback passed to `setInterval`:

```javascript
this.playIntId = window.setInterval(
  this.trackPlayProgress.bind(this), 1000
);

trackPlayProgress: function () {
  var player = $('#audio-player audio')[0];
  var progress = player.currentTime / player.duration * 100;
  this.$el.find('.progress-bar').attr('style', 'width: ' + progress + '%');
}
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
such an event occurs it removes the current view items and them adds them back
according to the new order:

```javascript
this.listenTo(this.collection, 'sort', this.sort);

sort: function (tracks) {
  this.eachSubview(function (userView) {
    userView.remove();
  });
  this.collection.each(function (user) {
    this.addUserSubview(user);
  }.bind(this));
}
```
<!-- ## Minimum Viable Product AudioFile is an audio-sharing web
application built with Ruby on Rails on the backend and Backbone.js on the
front. It is based on [SoundCloud](https://soundcloud.com).

Users can:

- [ ] Create accounts
- [ ] Create sessions (i.e., log in)
- [ ] View other users' profiles
- [ ] Upload tracks 
- [ ] Listen to tracks
- [ ] View all published tracks
- [ ] View stream of followed users' tracks

## Design Docs
* [Wireframes][views]
* [DB schema][schema]

[views]:  ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User authentication, Rails API and initial deployment (~3 days)
I will implement signup and sign in, as well as set up the backend Rails API to
create/read/updated/destroy user and track data. Finally, I'll push the code to
Heroku and make sure my production environment works properly. By the end up
this phase, I should have a working API.

[Details][phase-one]

### Phase 2: Track storage and Backbone views (~3 days)
I'll use AWS to store audio files and create views for showing user info,
viewing all stored tracks, and viewing stored tracks for followed users. By the
end of this phase the user should be able to view (but not yet upload or play)
these tracks, as well as view and update their info.

[Details][phase-two]

### Phase 3: Uploading and playing songs (~3 days)

I'll use jPlayer in a Backbone view to implement track playing, and I'll
implement a simple file uploading system. I'll also add the ability to like a
track, and I'll show the number of likes the track has in the track player. By
the end of this phase, users should be able to upload, play (including repeat
and shuffle) and like tracks.  When a track is playing, the "next" and
"previous" tracks will be those after and before the list it was accessed from.

[Details][phase-three]

[phase-one]:   ./docs/phases/phase1.md
[phase-two]:   ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md

## Bonus Features

- [ ] Add images to tracks
- [ ] Create and like playlists
- [ ] Comment on tracks and playlists
- [ ] Share tracks
- [ ] Mobile-friendly design
-->
