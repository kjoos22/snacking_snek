class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.integer :score
      t.string :difficulty
      t.datetime :when_played
      t.belongs_to :player, null: false, foreign_key: true

      t.timestamps
    end
  end
end
