const game =  new SnackingSnek()
const playerList = document.getElementById("playerDropdown")
const playerForm = document.getElementById("newPlayerForm")
const gameplaySettings= document.getElementById("gameplaySettingsForm")
const selectedDifficulty = document.getElementById("difficultyDropdown")
const selectedPlayer = document.getElementById("playerDropdown")
const newPlayerInput = document.getElementById("newPlayer")
const hardScoreList = document.getElementById("hardScoreList")
const mediumScoreList = document.getElementById("mediumScoreList")
const playerScoreList = document.getElementById("playerScoreList")



playerForm.addEventListener('submit', handlePlayerFormSubmit)
gameplaySettings.addEventListener("submit", handleStartGameFormSubmit)

function handlePlayerFormSubmit(e){
    e.preventDefault()
    PlayerApi.createPlayer()
    playerForm.reset()
}

function handleStartGameFormSubmit(e){
    e.preventDefault()
    if (selectedDifficulty.value == "Easy") {
        game.gameplay = setInterval(game.runGame, 60)
    } else if (selectedDifficulty.value == "Medium") {
        game.gameplay = setInterval(game.runGame, 40)
    } else if (selectedDifficulty.value == "Hard") {
        game.gameplay = setInterval(game.runGame, 25)
    }
    game.snake = [
        {x: 0, y: 294},
        {x: 12, y: 294},
        {x: 24, y: 294},  
        {x: 36, y: 294},
        {x: 48, y: 294}
    ]
    game.dx = 12
    game.dy = 0
    game.score = 0
    game.hideDropdowns()
}

GameApi.highScores()
PlayerApi.allPlayers()
game.drawSnake()
game.makeFood()
game.addListeners()



