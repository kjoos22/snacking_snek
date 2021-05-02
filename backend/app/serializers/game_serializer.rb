class GameSerializer
  include FastJsonapi::ObjectSerializer
  attributes :score, :difficulty, :created_at, :player
end
