json.array!(@events) do |event|
  json.extract! event, :id, :title, :date, :time, :description, :latitude, :longitude, :image, :creator, :attendees
  json.url event_url(event, format: :json)
end
