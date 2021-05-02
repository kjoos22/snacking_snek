class RemoveWhenPlayedFromGames < ActiveRecord::Migration[6.1]
  def change
    remove_column :games, :when_played, :datetime
  end
end
