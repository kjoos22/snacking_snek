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
        let hardScores = []
        let mediumScores = []
        let easyScores = []
        let playerScores = []
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(json => {
            json["data"].forEach(g => {
                if(g.attributes.difficulty == "Hard") {hardScores.push(g)}
                if(g.attributes.difficulty == "Medium") {mediumScores.push(g)}
                if(g.attributes.difficulty == "Easy") {easyScores.push(g)}
                if(g.attributes.player_id.toString() == selectedPlayer.value) {
                    playerScores.push(g)
                }
            })
            hardScores = hardScores.sort((a, b) => 
                (a.attributes.score < b.attributes.score) ? 1 : -1)
            hardScores.length = 10
            hardScores.forEach(s => {
                let score = document.createElement("li")
                score.innerText = 
                `${s.attributes.score} - ${s.attributes.player}`
                score.style.color = "#ffffff"
                hardScoreList.append(score)
            })
            mediumScores = mediumScores.sort((a, b) => 
                (a.attributes.score < b.attributes.score) ? 1 : -1)
            mediumScores.length = 10
            mediumScores.forEach(s => {
                let score = document.createElement("li")
                score.innerText = 
                `${s.attributes.score} - ${s.attributes.player}`
                score.style.color = "#ffffff"
                mediumScoreList.append(score)
            })
            easyScores = easyScores.sort((a, b) => 
                (a.attributes.score < b.attributes.score) ? 1 : -1)
           easyScores.length = 10
           easyScores.forEach(s => {
                let score = document.createElement("li")
                score.innerText = 
                `${s.attributes.score} - ${s.attributes.player}`
                score.style.color = "#ffffff"
                easyScoreList.append(score)
            })
            playerScores = playerScores.sort((a, b) => 
                (a.attributes.score < b.attributes.score) ? 1 : -1)
            playerScores.length = 10
            playerScores.forEach(s => {
                let score = document.createElement("li")
                score.innerText = 
                `${s.attributes.score} - ${s.attributes.player} - ${s.attributes.difficulty}`
                score.style.color = "#ffffff"
                playerScoreList.append(score)
            })
        })
    }

}