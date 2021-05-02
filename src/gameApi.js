class GameApi {
    static baseUrl = "http://localhost:3000/games"

    static createGame() {
        const gameData = {
                            player_id: playerDropdown.value,
                            score: game.score,
                            difficulty: difficultyDropdown.value,
                        }
        
        const configObj = {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json",   
                Accept: "application/json"
            },
            body: JSON.stringify(gameData)
        }

        fetch(this.baseUrl, configObj)
        .then(resp => resp.json())
        .then(data => {
            const game = data.data
            debugger
            const g = new Game(game.attributes)
            console.log(g)
        })
    }

}