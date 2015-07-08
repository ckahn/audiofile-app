json.extract! track, :id, :title, :image, :source, :created_at
json.time_ago time_ago_in_words(track.created_at)
json.uploader_name track.uploader.username
json.uploader_link "#/users/#{track.uploader_id}"
json.like likes_hash[track.id]
json.num_likes track.likes.size
