json.array! @user.followed_users do |followed|
  json.id followed.id
  json.username followed.username
  json.image followed.image
  json.num_follows followed.followers.size
  json.follow @user.follows.find_by(followed: followed.id)
end
