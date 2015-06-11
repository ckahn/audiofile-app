class Track < ActiveRecord::Base
  validates :title, :source, :uploader_id, presence: true
  belongs_to(
    :uploader,
    class_name: 'User',
    foreign_key: :uploader_id,
  )

  has_many :likes

  has_many(
    :likers,
    through: :likes,
    source: :user
  )
end
