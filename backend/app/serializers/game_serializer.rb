class GameSerializer
  include FastJsonapi::ObjectSerializer
  attributes :score, :difficulty, :created_at, :player_id, :id

  #attribute :player do |object|
    #"#{object.player.name}"
  #end
end
