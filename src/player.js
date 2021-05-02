class Player {
    //static playerList = document.getElementById("playerDropdown")

    constructor ({id, name}) {
        this.id = id
        this.name = name
    }

    addToPlayerDropdown() {
        const option = document.createElement('option')
        option.value  = this.id 
        option.innerText = this.name
        playerList.append(option)
    }
}