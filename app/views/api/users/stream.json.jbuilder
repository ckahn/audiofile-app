json.array! @tracks do |track|
  json.extract! track, :id, :title, :uploader_id, :source
  json.like track.likes.find_by(user_id: current_user.id)
  json.likes do
    json.array! track.likes, :id, :track_id, :user_id
  end
  json.num_likes track.likes.size
end
