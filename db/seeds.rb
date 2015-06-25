pw = 'password'

def img_rand()
 "http://lorempixel.com/200/200/abstract/#{rand(10)}"
end

guest = User.new(
  username: 'guest',
  password: pw,
  location: 'San Francisco, California',
  image: 'http://lorempixel.com/200/200/people/9/'
)

guest.save

songs = [
  {
    title: 'Not in Love - Crystal Castles',
    source: 'https://dl.dropboxusercontent.com/u/848790/Guest/Not%20In%20Love%20-%20Crystal%20Castles%20%28ft.%20Robert%20Smith%29.mp3',
    image: 'https://hustlemagazine.files.wordpress.com/2011/11/3173381.jpg'
  },
  {
    title: 'Sail - AWOLNATION',
    source: 'https://dl.dropboxusercontent.com/u/848790/Guest/SAIL%20-%20AWOLNATION%20%28Unofficial%20Video%29.mp3',
    image: 'http://lyrics.songonlyrics.net/wp-content/uploads/2011/06/Megalithic-Symphony-Album-cover.jpg'
  },
  {
    title: 'Breathing Underwater - Metric',
    source: 'https://dl.dropboxusercontent.com/u/848790/Guest/Metric%20-%20Breathing%20Underwater.mp3',
    image: 'http://ecx.images-amazon.com/images/I/81njEpZ0aWL._SY355_.jpg'
  },
  {
    title: 'Such Great Heights - Postal Service',
    source: 'https://dl.dropboxusercontent.com/u/848790/Guest/The%20Postal%20Service%20-%20Such%20Great%20Heights%20%28OFFICIAL%20VIDEO%29.mp3',
    image: 'http://cdn.pitchfork.com/media/6432-give-up.jpg'
  }
]

songs.each do |song|
  song = Track.new(song)
  guest.uploaded_tracks << song
end

guest.save

bjork = User.new(
  username: 'Bjork',
  password: pw,
  location: 'Reykjavík, Iceland',
  image: 'https://33.media.tumblr.com/avatar_d6dea210f630_128.png'
)

bjork.save

songs = [
  {
    title: 'Hunter',
    source: 'https://dl.dropboxusercontent.com/u/848790/Bjork%20-%20Homogenic/01%20Hunter.mp3',
    image: 'http://assets.rollingstone.com/assets/images/album_review/c16c7eb513594e8ed38c887363647daee805dbe7.jpg'
  },
  { title: 'Joga',
    source: 'https://dl.dropboxusercontent.com/u/848790/Bjork%20-%20Homogenic/02%20J%C3%B3ga.mp3',
    image: 'http://assets.rollingstone.com/assets/images/album_review/c16c7eb513594e8ed38c887363647daee805dbe7.jpg'
  },
]

songs.each do |song|
  song = Track.new(song)
  bjork.uploaded_tracks << song
end

bjork.save

radiohead = User.new(
  username: 'Radiohead',
  password: pw,
  location: 'Oxfordshire, England',
  image: 'http://33.media.tumblr.com/avatar_ef7954350373_128.png'
)

radiohead.save

songs = [
  {
    title: 'Paranoid Android',
    source: 'https://dl.dropboxusercontent.com/u/848790/Radiohead%20OK%20Computer/02%20Paranoid%20Android.mp3',
    image: 'http://assets.rollingstone.com/assets/images/list/fd08d3d60d7c485b72f0e7116690f84be3e73e8d.jpg'
  },
  {
    title: 'Karma Police',
    source: 'https://dl.dropboxusercontent.com/u/848790/Radiohead%20OK%20Computer/06%20Karma%20Police.mp3',
    image: 'http://assets.rollingstone.com/assets/images/list/fd08d3d60d7c485b72f0e7116690f84be3e73e8d.jpg'
  },
  { title: 'No Surprises',
    source: 'https://dl.dropboxusercontent.com/u/848790/Radiohead%20OK%20Computer/10%20No%20Surprises.mp3',
    image: 'http://assets.rollingstone.com/assets/images/list/fd08d3d60d7c485b72f0e7116690f84be3e73e8d.jpg'
  }
]

songs.each do |song|
  song = Track.new(song)
  radiohead.uploaded_tracks << song
end

radiohead.save

phantogram = User.new(
  username: 'Phantogram',
  password: pw,
  location: 'Greenwich, New York',
  image: 'http://www.archasung.com/wp-content/uploads/phantogram-chalkboard.jpg'
)

phantogram.save

songs = [
  {
    title: 'Mouthful of Diamonds',
    source: 'https://dl.dropboxusercontent.com/u/848790/Phantogram/Mouthful%20Of%20Diamonds.mp3',
    image: 'http://www.undergroundhiphop.com/store/covers_large/GI104LP.jpg?width=400&height=400&quality=100'
  },
  { title: 'When I\'m Small',
    source: 'https://dl.dropboxusercontent.com/u/848790/Phantogram/When%20Im%20Small.mp3',
    image: 'http://www.undergroundhiphop.com/store/covers_large/GI104LP.jpg?width=400&height=400&quality=100'
  },
]

songs.each do |song|
  song = Track.new(song)
  phantogram.uploaded_tracks << song
end

phantogram.save

aphex_twin = User.new(
  username: 'Aphex Twin',
  password: pw,
  location: 'Cornwall, United Kingdom',
  image: 'http://i.guim.co.uk/static/w-620/h--/q-95/sys-images/' +
    'Guardian/Pix/arts/2001/10/04/aphex1.jpg'
)

aphex_twin.save

songs = [
  { title: 'Xtal', source: 'https://dl.dropboxusercontent.com/u/848790/Aphex%20Twin%20-%20Selected%20Ambient%20Works%2085-92/01%20Xtal.mp3', image: 'http://www.clashmusic.com/sites/default/files/legacy/files/AphexTwin300.jpg' },
  { title: 'Pulsewidth', source: 'https://dl.dropboxusercontent.com/u/848790/Aphex%20Twin%20-%20Selected%20Ambient%20Works%2085-92/03%20Pulsewidth.mp3', image: 'http://www.clashmusic.com/sites/default/files/legacy/files/AphexTwin300.jpg' },
  { title: 'Heliospan', source: 'https://dl.dropboxusercontent.com/u/848790/Aphex%20Twin%20-%20Selected%20Ambient%20Works%2085-92/07%20Heliosphan.mp3', image: 'http://www.clashmusic.com/sites/default/files/legacy/files/AphexTwin300.jpg' }
]

songs.each do |song|
  song = Track.new(song)
  aphex_twin.uploaded_tracks << song
end

aphex_twin.save

massive_attack = User.new(
  username: 'Massive Attack',
  password: pw,
  location: 'Bristol, England',
  image: 'http://41.media.tumblr.com/tumblr_lsgc67DqA21qbmla3o1_500.png'
)
massive_attack.save

songs = [
  { title: 'Teardrop', source: 'https://dl.dropboxusercontent.com/u/848790/Massive%20Attack%20-%20Mezzanine/03.%20Teardrop.mp3', image: 'http://blog.kexp.org/blog/wp-content/uploads/2008/03/massiveattic.jpg' },
  { title: 'Exchange', source: 'https://dl.dropboxusercontent.com/u/848790/Massive%20Attack%20-%20Mezzanine/05.%20Exchange.mp3', image: 'http://blog.kexp.org/blog/wp-content/uploads/2008/03/massiveattic.jpg' },
]

songs.each do |song|
  song = Track.new(song)
  massive_attack.uploaded_tracks << song
end

massive_attack.save

users = User.all
track_count = Track.all.size

users.each do |user|
  users_id = users.map { |user| user.id }
  users_id.delete(user.id)
  users_id.shuffle
  2.times do |i|
    user.followed_users << User.find(users_id[i])
  end

  indexes = (1..track_count).to_a.sample(5)
  indexes.each { |idx| user.liked_tracks << Track.find(idx) }

  user.save
end

Track.all.each do |track|
  track.created_at = Time.now - rand(9000000)
  track.save
end

#   user = User.new(
#     username: "User-#{i+1}",
#     password: 'password',
#     image: "http://lorempixel.com/200/200/people/#{rand(10)}"
#   )
#
#   user.save
#
#   2.times do |j|
#     track = Track.new(
#       title: "Uploaded by #{user.username}",
#       source: 'http://res.cloudinary.com/dhowpobqx/video/upload/' +
#         'v1434605298/Mouthful_Of_Diamonds_p3qdq3.mp3',
#       image: "http://lorempixel.com/200/200/abstract/#{rand(10)}"
#     )
#     user.uploaded_tracks << track
#   end
#
#   2.times do |j|
#     track = Track.new(
#       title: "Liked by #{user.username}",
#       source: 'http://res.cloudinary.com/dhowpobqx/video/upload/' +
#         'v1434605298/Mouthful_Of_Diamonds_p3qdq3.mp3',
#       uploader_id: 2,
#       image: "http://lorempixel.com/200/200/abstract/#{rand(10)}"
#     )
#     user.liked_tracks << track
#   end
#   user.save
# end
#
# 5.times do |i|
#   user = User.find(i+1)
#   5.times do |j|
#     next if i == j
#     user.followed_users << User.find(j+1)
#   end
#   user.save
# end
