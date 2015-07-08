module Api
  class UsersController < ApplicationController
    before_filter :require_logged_in, except: [:create, :new]

    def index
      @users = User.all.includes(:followers, uploaded_tracks: [:likes])
      @follows_hash = current_user.follows_hash
      render 'index'
    end

    def liked_tracks
      @user = User.find(params[:id])
      render 'liked'
    end

    def followed_users
      @user = User.find(params[:id])
      render 'followed'
    end

    def show
      @user = User.find(params[:id])
      render 'show'
    end

    def stream
      user = User.find(params[:id])
      @likes_hash = user.track_likes_hash
      @tracks = []
      followed_users = user.followed_users.includes(:uploaded_tracks)
      followed_users.each { |user| @tracks.concat(user.uploaded_tracks) }
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
      @tracks = []
      user = User.find(params[:id])
      user.uploaded_tracks.each do |track|
        @tracks << track
      end
      render 'uploaded'
    end

    private

    def user_params
      params.require(:user).permit(:username, :password, :image)
    end
  end
end
