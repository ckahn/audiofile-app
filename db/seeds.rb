2.times do |i|
  user = User.new(
    username: "Name-#{i+1}",
    password: 'password'
  )
  user.save
  2.times do |j|
    track = Track.new(
      title: "Title #{j+1}",
      source: 'http://res.cloudinary.com/dhowpobqx/video/' +
        'upload/v1434054398/1._R_A_G_E_-_QuadkilleR_2013_mq669p.mp3',
      uploader_id: user.id
    )
    track.save
  end
end
