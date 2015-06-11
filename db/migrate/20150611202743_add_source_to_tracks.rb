class AddSourceToTracks < ActiveRecord::Migration
  def change
    add_column :tracks, :source, :string, null: false
  end
end
