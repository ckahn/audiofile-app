class TracksController < ApplicationController
  before_filter :require_logged_in
  
  def index
    tracks = Track.all
    render json: tracks
  end
end
