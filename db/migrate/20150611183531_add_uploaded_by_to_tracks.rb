class AddUploadedByToTracks < ActiveRecord::Migration
  def change
    add_column :tracks, :uploaded_by, :integer, null: false
    add_index :tracks, :uploaded_by
  end
end
