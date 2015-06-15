json.array! @users do |user|
  json.id user.id
  json.username user.username
  json.image user.image
  json.num_follows user.followers.size
  json.follow current_user.follower_relationships.find_by(followed: user.id)
 end
