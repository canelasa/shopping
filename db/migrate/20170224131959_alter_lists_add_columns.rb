class AlterListsAddColumns < ActiveRecord::Migration[5.0]
  def change
    add_column :lists, :price, :decimal, :precision => 4, :scale => 2
    add_column :lists, :quantity, :integer
  end
end
