module Api
  class TracksController < ApplicationController
    before_filter :require_logged_in

    def create
      track = Track.new(track_params)
      if track.save
        render json: track
      else
        render json: track.errors.full_messages, status: :unprocessable_entity
      end
    end

    def index
      @tracks = Track.includes(:uploader, :likes).order(created_at: :desc)
      @likes_hash = current_user.track_likes_hash
      render 'index'
    end

    private

    def track_params
      params.require(:track).permit(:source, :title, :uploader_id, :image)
    end
  end
end
