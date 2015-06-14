json.array! @tracks do |track|
  json.extract! track, :id, :image, :title, :source, :uploader_id
  json.uploader_name track.uploader.username
  json.uploader_link api_user_url(track.uploader_id)
  json.like track.likes.find_by(user_id: current_user.id)
  json.num_likes track.likes.size
end
