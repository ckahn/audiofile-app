module Api
  class UsersController < ApplicationController
    before_filter :require_logged_in, except: [:create, :new]

    def index
      @users = User.all
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
      if params[:id].to_i == current_user.id
        render 'show'
      else
        render json: { username: @user.username }
      end
    end

    def stream
      @tracks = []
      user = User.find(params[:id])
      user.followed_users.each do |followed|
        @tracks += followed.uploaded_tracks
      end
      render 'stream'
    end

    def uploaded
      @tracks = []
      user = User.find(params[:id])
      user.uploaded_tracks.each do |track|
        @tracks << track
      end
      render 'uploaded'
    end
  end
end
