json.array! @user.followed_users do |followed|
  json.id followed.id
  json.location followed.location
  json.username followed.username
  json.image followed.image
  num_likes = 0
  followed.uploaded_tracks.each do |track|
    num_likes += track.likes.size
  end
  json.num_likes num_likes
  json.num_follows followed.followers.size
  json.follow @user.follower_relationships.find_by(followed: followed.id)
end
