class CreateItems < ActiveRecord::Migration[5.0]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :sku
      t.integer :price
      t.integer :quantity
      t.integer :list_id
      t.timestamps
    end
  end
end
