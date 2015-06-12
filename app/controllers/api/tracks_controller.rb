module Api
  class TracksController < ApplicationController
    before_filter :require_logged_in

    def index
      @tracks = Track.all
      render 'index'
    end
  end
end
