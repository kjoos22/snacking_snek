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

    static createPlayer() {
        const formData = {name: newPlayerInput.value}
        
        const configObj = {
            method: 'POST', 
            headers: {
                "Content-Type": "application/json",   
                Accept: "application/json"
            },
            body: JSON.stringify(formData)
        }

        fetch(this.baseUrl, configObj)
        .then(resp => resp.json())
        .then(data => {
            const player = data.data
            const p = new Player(player.attributes)
            p.addToPlayerDropdown()
        })

    }
}