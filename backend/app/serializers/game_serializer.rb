class GameSerializer
  include FastJsonapi::ObjectSerializer
  attributes :score, :difficulty, :created_at, :player_id

  attribute :player do |object|
    "#{object.player.name}"
  end
end
