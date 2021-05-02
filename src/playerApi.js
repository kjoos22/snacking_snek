class PlayerApi {
    
    static baseUrl = "http://localhost:3000/players"
    
    static allPlayers = () => {
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
}