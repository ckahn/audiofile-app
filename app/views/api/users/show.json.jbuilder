json.extract! @user, :id, :username, :image
json.uploaded_tracks @user.uploaded_tracks, :title, :source
json.liked_tracks @user.liked_tracks, :id, :title, :source
json.followed_users @user.followed_users, :id, :username, :image
