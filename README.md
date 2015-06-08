# AudioFile
<!-- Add link when available -->

## Minimum Viable Product
AudioFile is an audio-sharing web application built with Ruby on Rails on the
backend and Backbone.js on the front. It is based on
[SoundCloud](https://soundcloud.com).

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

<!-- [Details][phase-one] -->

### Phase 2: Track storage and Backbone views (~3 days)
I'll use AWS to store audio files and create views for showing user info,
viewing all stored tracks, and viewing stored tracks for followed users. By the
end of this phase the user should be able to view (but not yet upload or play)
these tracks, as well as view and update their info.

<!-- [Details][phase-two] -->

### Phase 3: Uploading and playing songs (~3 days)

I'll use jPlayer in a Backbone view to implement track playing, and I'll
implement a simple file uploading system. I'll also add the ability to like a
track, and I'll show the number of likes the track has in the track player. By
the end of this phase, users should be able to upload, play (including repeat
and shuffle) and like tracks.  When a track is playing, the "next" and
"previous" tracks will be those after and before the list it was accessed from.

<!-- [Details][phase-three] -->

[phase-one]:   ./docs/phases/phase1.md
[phase-two]:   ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md

## Bonus Features

- [ ] Add images to tracks
- [ ] Create and like playlists
- [ ] Comment on tracks and playlists
- [ ] Share tracks
- [ ] Mobile-friendly design

