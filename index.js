const game =  new SnackingSnek()
const playerList = document.getElementById("playerDropdown")
const playerForm = document.getElementById("newPlayerForm")
const newPlayerInput = document.getElementById("newPlayer")

playerForm.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(e){
    e.preventDefault()
    PlayerApi.createPlayer()
    playerForm.reset()
}

PlayerApi.allPlayers()
game.drawSnake()
game.makeFood()
game.addListeners()
game.gameplay = setInterval(game.runGame, 60)

