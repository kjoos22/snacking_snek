class PlayersController < ApplicationController
    def index
        players = Player.all
        render json: PlayerSerializer.new(players)
    end

    def create
        player = Player.new(player_params)
        if player.save
            render json: PlayerSerializer.new(player)
        else 
            render json: {error: "Failed to save"}
        end 
    end
    
    private

    def player_params
        params.require(:player).permit(:name)
    end
end
