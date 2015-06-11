class UsersController < ApplicationController
  before_filter :require_logged_in, except: [:create, :new]

  def create
    @user = User.new(user_params)
    if @user.save
      log_in(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def index
    render json: User.all
  end

  def new
    @user = User.new()
  end

  def show
    user = User.find(params[:id])
    if params[:id].to_i == current_user.id
      render json: user
    else
      render json: { username: user.username }
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
