json.array! @user.liked_tracks do |track|
  json.extract! track, :title, :uploader_id
  json.like track.likes.find_by(user_id: current_user.id)
  json.num_likes track.likes.size
end
