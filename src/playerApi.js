class PlayerApi {
    
    static baseUrl = "http://localhost:3000/players"
    
    static allPlayers = () => {
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(json => {
            json["data"].forEach(p => {
                const player = new Player({id: p.id, name: p.attributes.name})
                player.addToPlayerDropdown()
            })
        })
    }
}