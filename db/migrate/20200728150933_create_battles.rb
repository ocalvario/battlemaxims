class CreateBattles < ActiveRecord::Migration[6.0]
  def change
    create_table :battles do |t|
      t.string :title
      t.string :description
      t.string :image_url
      t.integer :country_id

      t.timestamps
    end
  end
end
