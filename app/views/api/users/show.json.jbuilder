json.extract! @user, :id, :username, :image
json.uploaded_tracks @user.uploaded_tracks, :title, :source
json.liked_tracks @user.liked_tracks, :id, :title, :source
num_likes = 0
@user.uploaded_tracks.each do |track|
  num_likes += 1 if track.likes.size > 0
end
json.num_likes num_likes
json.followed_users @user.followed_users, :id, :username, :image
json.follow @user.followed_relationships.find_by(follower_id: current_user.id)
json.num_follows @user.followers.size
json.num_followers @user.followers.size
json.followers @user.followers do |follower|
  json.id follower.id
  json.username follower.username
  json.image follower.image
end
