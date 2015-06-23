json.array! @tracks do |track|
  json.extract! track, :title, :source, :created_at, :id, :image, :uploader_id
  json.time_ago time_ago_in_words(track.created_at)
  json.uploader_name track.uploader.username
  json.uploader_link "#/users/#{track.uploader_id}"
  json.like track.likes.find_by(user_id: current_user.id)
  json.num_likes track.likes.size
end
