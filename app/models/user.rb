class User < ActiveRecord::Base
  attr_reader :password

  validates :username, :location, :password_digest, :session_token,
            presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  has_many(
    :uploaded_tracks,
    class_name: "Track",
    foreign_key: :uploader_id,
    primary_key: :id
  )

  has_many :likes

  has_many(
    :liked_tracks,
    through: :likes,
    source: :track
  )

  has_many(
    :follower_relationships,
    class_name: "Follow",
    foreign_key: :follower_id
  )

  has_many(
    :followed_relationships,
    class_name: "Follow",
    foreign_key: :followed_id
  )

  has_many(
    :followed_users,
    through: :follower_relationships,
    source: :followed
  )

  has_many(
    :followers,
    through: :followed_relationships,
    source: :follower
  )

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && user.has_password?(password)
    nil
  end

  def has_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
end
