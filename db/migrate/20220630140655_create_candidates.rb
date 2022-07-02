class CreateCandidates < ActiveRecord::Migration[7.0]
  def change
    create_table :candidates do |t|
      t.string :name
      t.string :email
      t.text :description
      t.text :strengths

      t.timestamps
    end
  end
end
