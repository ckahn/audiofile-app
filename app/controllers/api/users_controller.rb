module Api
  class UsersController < ApplicationController
    before_filter :require_logged_in, except: [:create, :new]

    def index
    end

    def liked
      render text: 'liked'
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
  end
end
