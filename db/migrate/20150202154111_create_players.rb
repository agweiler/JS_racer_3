class CreatePlayers < ActiveRecord::Migration
  def change
    create_table :players do |p|
      p.string :name

      p.timestamps null: false
    end
  end
end
