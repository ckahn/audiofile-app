module Api
  class UsersController < ApplicationController
    before_filter :require_logged_in, except: [:create, :new]

    def index
      @users = User.all.includes(:followers, uploaded_tracks: [:likes])
        .order(:username)
      @follows_hash = current_user.follows_hash
      render 'index'
    end

    def liked_tracks
      user = User.find(params[:id])
      @tracks = user.liked_tracks.includes(:uploader, :likes)
      @likes_hash = current_user.track_likes_hash
      render 'liked'
    end

    def followed_users
      @users =
        User.find(params[:id]).followed_users.includes(uploaded_tracks: [:likes])
      @follows_hash = current_user.follows_hash
      render 'index'
    end

    def followers
      @users =
        User.find(params[:id]).followers.includes(uploaded_tracks: [:likes])
      @follows_hash = current_user.follows_hash
      render 'index'
    end

    def show
      @user = User.find(params[:id])
      @followers = @user.followers
      render 'show'
    end

    def stream
      user = User.find(params[:id])
      @likes_hash = user.track_likes_hash
      @tracks = []
      followed_users = user.followed_users.includes(
        uploaded_tracks: [:likes, :uploader]
      )
      followed_users.each { |fuser| @tracks.concat(fuser.uploaded_tracks) }
      @tracks.sort! { |t1, t2| t2.created_at <=> t1.created_at }
      render 'stream'
    end

    def update
      user = User.find(params[:id])
      if user.update(user_params)
        render json: user
      else
        render json: user.errors.full_messages, status: :unprocessable_entity
      end
    end

    def uploaded
      user = User.find(params[:id])
      @tracks = user.uploaded_tracks.includes(:uploader, :likes)
      @likes_hash = current_user.track_likes_hash
      render 'uploaded'
    end

    private

    def user_params
      params.require(:user).permit(:username, :password, :location, :image)
    end
  end
end
