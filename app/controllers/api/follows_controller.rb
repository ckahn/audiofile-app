module Api
  class FollowsController < ApplicationController
    before_action :require_logged_in
    before_action :require_follow_owner!, only: [:destroy]

    def create
      @follow = current_user.follower_relationships.new(like_params)
      if @follow.save
        render json: @follow
      else
        render json: @follow.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @follow = current_follow
      @follow.destroy
      render json: @follow
    end

    private

    def current_follow
      @current_follow ||= Follow.find(params[:id])
    end

    def like_params
      params.require(:follow).permit(:followed_id)
    end

    def require_follow_owner!
      unless current_follow.follower_id == current_user.id
        render(
          json: ["You must be the Follow's owner to do that"],
          status: :unauthorized
        )
      end
    end
  end
end
