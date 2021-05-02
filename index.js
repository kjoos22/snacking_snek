const game =  new SnackingSnek()
const playerList= document.getElementById("playerDropdown")

PlayerApi.allPlayers()
game.drawSnake()
game.makeFood()
game.addListeners()
game.gameplay = setInterval(game.runGame, 60)

