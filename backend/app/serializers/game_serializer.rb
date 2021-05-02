class GameSerializer
  include FastJsonapi::ObjectSerializer
  attributes :score, :difficulty, :when_played, :player
end
