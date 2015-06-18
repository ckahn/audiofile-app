5.times do |i|
  user = User.new(
    username: "User-#{i+1}",
    password: 'password',
    image: "http://lorempixel.com/200/200/people/#{rand(10)}"
  )

  user.save

  2.times do |j|
    track = Track.new(
      title: "Uploaded by #{user.username}",
      source: 'http://res.cloudinary.com/dhowpobqx/video/upload/' +
        'v1434586474/tihhwcq5eq1vh7uqzw0f.mp3',
      image: "http://lorempixel.com/200/200/abstract/#{rand(10)}"
    )
    user.uploaded_tracks << track
  end

  2.times do |j|
    track = Track.new(
      title: "Liked by #{user.username}",
      source: 'http://res.cloudinary.com/dhowpobqx/video/' +
        'upload/v1434054398/1._R_A_G_E_-_QuadkilleR_2013_mq669p.mp3',
      uploader_id: 2,
      image: "http://lorempixel.com/200/200/abstract/#{rand(10)}"
    )
    user.liked_tracks << track
  end
  user.save
end

5.times do |i|
  user = User.find(i+1)
  5.times do |j|
    next if i == j
    user.followed_users << User.find(j+1)
  end
  user.save
end
