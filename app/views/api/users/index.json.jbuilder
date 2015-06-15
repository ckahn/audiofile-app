json.array! @users do |user|
  json.id user.id
  json.username user.username
  json.image user.image
  json.follow user.follows.find_by(follower_id: current_user.id)
 end
