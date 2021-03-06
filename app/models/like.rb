class Like < ActiveRecord::Base
  validates :user_id, uniqueness: { scope: :track_id }
  belongs_to :user
  belongs_to :track
end
