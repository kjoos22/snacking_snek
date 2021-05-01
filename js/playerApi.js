class PlayerApi {
    
    static baseUrl = "http://localhost:3000/players"
    
    static allUsers() {
        fetch(baseUrl)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
}