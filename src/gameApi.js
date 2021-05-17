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
            const newGame = data.data
            const g = new Game(newGame.attributes)
        })
    }

    static highScores() {
        hardScoreList.innerHTML = ""
        mediumScoreList.innerHTML = ""
        easyScoreList.innerHTML = ""
        playerScoreList.innerHTML = ""
        let hardScores = []
        let mediumScores = []
        let easyScores = []
        let playerScores = []
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(json => {
            json["data"].forEach(g => {
                const game = new Game({id: g.id, score: g.attributes.score, 
                    difficulty: g.attributes.difficulty, 
                    player_id: g.attributes.player_id,
                    created_at: g.attributes.created_at}) 

            game.player = Player.findById(game.player_id)
            if(game.difficulty == "Hard") {hardScores.push(game)}
            if(game.difficulty == "Medium") {mediumScores.push(game)}
            if(game.difficulty == "Easy") {easyScores.push(game)}
            if(game.player_id.toString() == selectedPlayer.value) {
                playerScores.push(game)
            }

            })
            
            hardScores = hardScores.sort((a, b) => 
                (a.score < b.score) ? 1 : -1)
            hardScores.length = 10
            hardScores.forEach(s => {
                let score = document.createElement("li")
                score.innerText = 
                `${s.score} - ${s.player.name}`
                score.style.color = "#ffffff"
                hardScoreList.append(score)
            })
            mediumScores = mediumScores.sort((a, b) => 
                (a.score < b.score) ? 1 : -1)
            mediumScores.length = 10
            mediumScores.forEach(s => {
                let score = document.createElement("li")
                score.innerText = 
                `${s.score} - ${s.player.name}`
                score.style.color = "#ffffff"
                mediumScoreList.append(score)
            })
            easyScores = easyScores.sort((a, b) => 
                (a.score < b.score) ? 1 : -1)
           easyScores.length = 10
           easyScores.forEach(s => {
                let score = document.createElement("li")
                score.innerText = 
                `${s.score} - ${s.player.name}`
                score.style.color = "#ffffff"
                easyScoreList.append(score)
            })
            playerScores = playerScores.sort((a, b) => 
                (a.score < b.score) ? 1 : -1)
            playerScores.length = 10
            playerScores.forEach(s => {
                let score = document.createElement("li")
                score.innerText = 
                `${s.score} - ${s.player.name} - ${s.difficulty}`
                score.style.color = "#ffffff"
                playerScoreList.append(score)
            })        
        
        })
        
    }

}