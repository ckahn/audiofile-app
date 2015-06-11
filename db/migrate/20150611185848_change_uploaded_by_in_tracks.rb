class ChangeUploadedByInTracks < ActiveRecord::Migration
  def change
    rename_column :tracks, :uploaded_by, :uploader_id
  end
end
