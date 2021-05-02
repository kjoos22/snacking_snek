class GamesController < ApplicationController
    def index
        games = Game.all
        render json: GameSerializer.new(games)
    end

    def create
        game = Game.new(game_params)
        if game.save
            render json: GameSerializer.new(game)
        else 
            render json: {error: "Failed to save"}
        end 
    end

    private

    def game_params
        params.require(:game).permit(:score, :difficulty, :player_id)
    end
end
