json.array! @users do |user|
  json.extract! user, :id, :username, :location, :image
  json.follow @follows_hash[user.id]
  json.num_followers user.followers.size
  num_likes = 0
  user.uploaded_tracks.each do |track|
    num_likes += track.likes.size
  end
  json.num_likes num_likes
end

  # json.id user.id
  # json.username user.username
  # num_likes = 0
  # user.uploaded_tracks.each do |track|
  #   num_likes += track.likes.size
  # end
  # json.num_likes num_likes
  # json.location user.location
  # json.image user.image
  # json.num_followers user.followers.size
  # json.follow current_user.follower_relationships.find_by(followed: user.id)
