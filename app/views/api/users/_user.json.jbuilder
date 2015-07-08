json.extract! user, :id, :username, :location, :image
json.follow follows_hash[user.id]
json.num_followers user.followers.size
num_likes = 0
user.uploaded_tracks.each do |track|
  num_likes += track.likes.size
end
json.num_likes num_likes
