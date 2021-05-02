class SnackingSnek {

    constructor() {
        this.canvas = document.getElementById("gameCanvas")
        this.scoreText = document.getElementById("scoreText")
        this.ctx = this.canvas.getContext("2d")

        this.dx = 12
        this.dy = 0
        this.running = false

        //snake color "#FF6600"
        this.snake = [
                    {x: 0, y: 294},
                    {x: 12, y: 294},
                    {x: 24, y: 294},  
                    {x: 36, y: 294},
                    {x: 48, y: 294}
                ]
        this.food = {}
        this.score = 0
        this.foodEaten = false
        this.gameplay
    }

    addListeners() {
        document.addEventListener("keydown", this.changeDirection)
    }

    disableDropdowns() {
        document.getElementById("playerDropdown").disabled=true
        document.getElementById("difficultyDropdown").disabled=true
    }

    enableDropdowns() {
        document.getElementById("playerDropdown").disabled=false
        document.getElementById("difficultyDropdown").disabled=false
    }

    drawSnake() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.snake.forEach(segment => {
            this.ctx.fillStyle = "#FF6600"
            this.ctx.fillRect(segment.x, segment.y, 12, 12)
        })
    }

    // drawSnakeSegment(segment) {
    //     debugger
    //     this.ctx.fillStyle = "#FF6600"
    //     this.ctx.fillRect(segment.x, segment.y, 12, 12)
    // }

    //clear canvas method? current first statement of drawSnake()

    moveSnake() {
        let head = {
                    x: this.snake[this.snake.length-1].x + this.dx,
                    y: this.snake[this.snake.length-1].y + this.dy
                }
        this.snake.push(head)
        if (!this.foodEaten) {
            this.snake.shift()
        }else{
            this.foodEaten = false
        }
        this.drawSnake()
    }


    changeDirection(e) {
        const movingUp = game.dy === -12;
        const movingDown = game.dy === 12;
        const movingRight = game.dx === 12;  
        const movingLeft = game.dx === -12;
        if(e.key == "ArrowLeft" && !movingRight) {
            game.dx = -12
            game.dy = 0
        }
        if(e.key == "ArrowUp" && !movingDown) {
            game.dx = 0
            game.dy = -12
        }
        if(e.key == "ArrowRight" && !movingLeft) {
            game.dx = 12
            game.dy = 0
        }
        if(e.key == "ArrowDown" && !movingUp) {
            game.dx = 0
            game.dy = 12
        }
    }

    makeFood() {
        this.food.x = Math.floor(Math.random() * 890) + 6
        this.food.y = Math.floor(Math.random() * 590) + 6
    }

    drawFood() {
        this.ctx.beginPath()
        this.ctx.arc(this.food.x, this.food.y, 6, 0, Math.PI*2)
        this.ctx.fillStyle = "#99bbff"
        this.ctx.fill()
        this.ctx.closePath()
    }

    eatFood() {
        let head = this.snake[this.snake.length - 1]
        const movingUp = this.dy === -12;
        const movingDown = this.dy === 12;
        const movingRight = this.dx === 12;  
        const movingLeft = this.dx === -12;
        if (movingRight || movingLeft){
            if (head.x >= this.food.x - 6 && head.x <= this.food.x + 6) {
                if (head.y >= this.food.y - 6 && head.y <= this.food.y + 6) {
                    this.score += 10
                    this.scoreText.innerText = `CURRENT SCORE: ${this.score}`
                    this.makeFood()
                    this.foodEaten = true
                }else if(head.y + 12 >= this.food.y - 6 && 
                        head.y + 12 <= this.food.y + 6) {
                    this.score += 10
                    this.scoreText.innerText = `CURRENT SCORE: ${this.score}`                
                    this.makeFood()
                    this.foodEaten = true
                }
            }
        }
        if (movingUp || movingDown){
            if (head.y >= this.food.y - 6 && head.y <= this.food.y + 6) {
                if (head.x >= this.food.x - 6 && head.x <= this.food.x + 6) {
                    this.score += 10
                    this.scoreText.innerText = `CURRENT SCORE: ${this.score}`
                    this.makeFood()
                    this.foodEaten = true
                }else if(head.x + 12 >= this.food.x - 6 && 
                        head.x + 12 <= this.food.x + 6) {
                    this.score += 10
                    this.scoreText.innerText = `CURRENT SCORE: ${this.score}`
                    this.makeFood()
                    this.foodEaten = true
                }
            }
        }
        
    }

    gameOver() {
        let head = this.snake[this.snake.length - 1]
        for (let i = this.snake.length - 2; i >= 0; i--) {
            if (this.snake[i].x == head.x && this.snake[i].y == head.y) {
                return true
            }
            if (head.x < 0) {return true}
            if (head.x > this.canvas.width - 12) {return true}
            if (head.y < 0) {return true}
            if (head.y > this.canvas.height - 12) {return true}        
        }
        return false
    }
    
    runGame() {
        game.running = true
        game.moveSnake()
        game.drawFood()
        game.eatFood()
        if (game.gameOver()) {
            game.running = false
            game.enableDropdowns()
            GameApi.createGame()
            clearInterval(game.gameplay)
            game.ctx.fillStyle = "#808080"
            game.ctx.fillRect(0, 0, game.canvas.width, game.canvas.height)        
            game.ctx.font = "bold 75px sans-serif"
            game.ctx.fillStyle = "#000000"
            game.ctx.fillText("GAME OVER", 210, 320)
        }
    }



    // drawSnake()
    // makeFood()
    // game = setInterval(runGame, 60)

}