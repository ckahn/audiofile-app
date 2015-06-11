class Track < ActiveRecord::Base
  validates :title, :source, :uploader_id, presence: true
  belongs_to(
    :uploader,
    class_name: 'User',
    foreign_key: :uploader_id,
  )
end
