json.array! @users do |user|
  json.partial! "api/users/user", user: user, follows_hash: @follows_hash
end
