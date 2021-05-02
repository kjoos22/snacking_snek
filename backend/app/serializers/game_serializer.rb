class GameSerializer
  include FastJsonapi::ObjectSerializer
  attributes :score, :difficulty, :player
end
