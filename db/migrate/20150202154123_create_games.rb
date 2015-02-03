class CreateGames < ActiveRecord::Migration
  def change
     create_table :games do |g|
      g.string :mario
      g.string :megaman
      g.string :status, default: "Not Finished"
      g.boolean :result, default: false

      g.float :time, default: 0.00

      g.timestamps null: false
    end
  end
end
