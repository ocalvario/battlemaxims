class CreateBattles < ActiveRecord::Migration[6.0]
  def change
    create_table :battles do |t|
      t.string :title
      t.string :description
      t.string :image_url
      t.references :country, index: true, foreign_key: true

      t.timestamps
    end
  end
end
