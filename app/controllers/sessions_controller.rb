class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      log_in(@user)
      redirect_to root_url
    else
      flash[:errors] = ["Invalid username/password"]
      redirect_to new_session_url
    end
  end

  def destroy
    log_out
    redirect_to new_session_url
  end

  def guest
    log_in(User.find(1))
    redirect_to root_url
  end

  def new
    @user = User.new()
  end
end
