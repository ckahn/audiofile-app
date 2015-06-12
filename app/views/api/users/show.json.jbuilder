json.extract! @user, :id, :username
json.uploaded_tracks @user.uploaded_tracks, :title, :source
