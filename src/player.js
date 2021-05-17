class Player {
    //static playerList = document.getElementById("playerDropdown")

    constructor ({id, name}) {
        this.id = id
        this.name = name
        Player.all.push(this)
    }

    addToPlayerDropdown() {
        const option = document.createElement('option')
        option.value  = this.id 
        option.innerText = this.name
        playerList.append(option)
    }

    static findById(id) {
        const player = Player.all.filter(player => (player.id == id))
        return player[0]
    }

    static all = []

    
}