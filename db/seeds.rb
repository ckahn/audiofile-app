3.times do |i|
  user = User.new(
    username: "User-#{i+1}",
    password: 'password'
  )

  user.save

  2.times do |j|
    track = Track.new(
      title: "Uploaded by #{user.username}",
      source: 'http://res.cloudinary.com/dhowpobqx/video/' +
        'upload/v1434054398/1._R_A_G_E_-_QuadkilleR_2013_mq669p.mp3',
    )
    user.uploaded_tracks << track
  end

  2.times do |j|
    track = Track.new(
      title: "Liked by #{user.username}",
      source: 'http://res.cloudinary.com/dhowpobqx/video/' +
        'upload/v1434054398/1._R_A_G_E_-_QuadkilleR_2013_mq669p.mp3',
      uploader_id: 2
    )
    user.liked_tracks << track
  end

  user.followed_users << User.find(i) if i > 0

  user.save
end
