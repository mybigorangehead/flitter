class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.text :title
      t.date :date
      t.time :time
      t.text :description
      t.decimal :latitude
      t.decimal :longitude
      t.text :image
      t.text :creator
      t.text :attendees
	  t.text :interests

      t.timestamps null: false
    end
  end
end
