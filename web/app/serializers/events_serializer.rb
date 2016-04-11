class EventsSerializer < ActiveModel::Serializer
  attributes :id, :title, :date, :time, :description, :latitude, :longitude, :image, :creator, :attendees, :interests
end