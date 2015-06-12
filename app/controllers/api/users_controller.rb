module Api
  class UsersController < ApplicationController
    before_filter :require_logged_in, except: [:create, :new]

    def show
      @user = User.find(params[:id])
      if params[:id].to_i == current_user.id
        render 'show'
      else
        render json: { username: @user.username }
      end
    end
  end
end
