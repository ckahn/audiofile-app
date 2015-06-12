json.extract! @user, :id, :username
json.uploaded_tracks @user.uploaded_tracks, :title, :source
json.liked_tracks @user.liked_tracks, :title, :source
