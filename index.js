const game =  new SnackingSnek()
const playerList = document.getElementById("playerDropdown")
const playerForm = document.getElementById("newPlayerForm")
const gameplaySettings= document.getElementById("gameplaySettingsForm")
const selectedDifficulty = document.getElementById("difficultyDropdown")
const selectedPlayer = document.getElementById("playerDropdown")
const newPlayerInput = document.getElementById("newPlayer")
const hardScoreList = document.getElementById("hardScoreList")
const mediumScoreList = document.getElementById("mediumScoreList")
const easyScoreList = document.getElementById("easyScoreList")
const playerScoreList = document.getElementById("playerScoreList")
const refreshScores = document.getElementById("refreshHighScoresForm")
const vPlayerButton = document.getElementById("vPlayers")
const vPlayerList = document.getElementById("vPlayerList")


playerForm.addEventListener('submit', handlePlayerFormSubmit)
gameplaySettings.addEventListener("submit", handleStartGameFormSubmit)
refreshScores.addEventListener("submit", handleRefreshHighScoresFormSubmit)
vPlayerButton.addEventListener("click", handleVPlayerButtonClick)

function handleVPlayerButtonClick(e){
    // Player.all.forEach(player => {
    //     if (player.name.charAt(0).toLowerCase() == 'v') {
    //         element = document.createElement("li")
    //         element.innerText = player.name 
    //         vPlayerList.append(element)
    //     }

    // })
    const vPlayers = Player.all.filter(player => (player.name.charAt(0).toLowerCase() == 'v')) 
    vPlayers.forEach(player => {
        element = document.createElement("li")
        element.innerText = player.name 
        vPlayerList.append(element)
    })    
    

}

function handlePlayerFormSubmit(e){
    e.preventDefault()
    PlayerApi.createPlayer()
    playerForm.reset()
}

function handleRefreshHighScoresFormSubmit(e){
    e.preventDefault()
    GameApi.highScores()
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



game.drawSnake()
game.makeFood()
game.addListeners()
document.addEventListener("DOMContentLoaded", () => {
    PlayerApi.allPlayers()
    GameApi.highScores()
})





