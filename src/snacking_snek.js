class SnackingSnek {

    constructor() {
        this.canvas = document.getElementById("gameCanvas")
        this.scoreText = document.getElementById("scoreText")
        this.ctx = this.canvas.getContext("2d")

        this.dx = 12
        this.dy = 0

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
        this.addEventListener("keydown", changeDirection)
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
                    x: snake[snake.length-1].x + dx,
                    y: snake[snake.length-1].y + dy
                }
        snake.push(head)
        if (!foodEaten) {
            snake.shift()
        }else{
            foodEaten = false
        }
        drawSnake()
    }


    changeDirection(e) {
        const movingUp = dy === -12;
        const movingDown = dy === 12;
        const movingRight = dx === 12;  
        const movingLeft = dx === -12;
        if(e.key == "ArrowLeft" && !movingRight) {
            dx = -12
            dy = 0
        }
        if(e.key == "ArrowUp" && !movingDown) {
            dx = 0
            dy = -12
        }
        if(e.key == "ArrowRight" && !movingLeft) {
            dx = 12
            dy = 0
        }
        if(e.key == "ArrowDown" && !movingUp) {
            dx = 0
            dy = 12
        }
    }

    makeFood() {
        this.food.x = Math.floor(Math.random() * 895) + 6
        this.food.y = Math.floor(Math.random() * 595) + 6
    }

    drawFood() {
        ctx.beginPath()
        ctx.arc(food.x, food.y, 6, 0, Math.PI*2)
        ctx.fillStyle = "#99bbff"
        ctx.fill()
        ctx.closePath()
    }

    eatFood() {
        let head = snake[snake.length - 1]
        const movingUp = dy === -12;
        const movingDown = dy === 12;
        const movingRight = dx === 12;  
        const movingLeft = dx === -12;
        if (movingRight || movingLeft){
            if (head.x >= food.x - 6 && head.x <= food.x + 6) {
                if (head.y >= food.y - 6 && head.y <= food.y + 6) {
                    score += 10
                    scoreText.innerText = `CURRENT SCORE: ${score}`
                    makeFood()
                    foodEaten = true
                }else if (head.y + 12 >= food.y - 6 && head.y + 12 <= food.y + 6) {
                    score += 10
                    scoreText.innerText = `CURRENT SCORE: ${score}`                
                    makeFood()
                    foodEaten = true
                }
            }
        }
        if (movingUp || movingDown){
            if (head.y >= food.y - 6 && head.y <= food.y + 6) {
                if (head.x >= food.x - 6 && head.x <= food.x + 6) {
                    score += 10
                    scoreText.innerText = `CURRENT SCORE: ${score}`
                    makeFood()
                    foodEaten = true
                }else if (head.x + 12 >= food.x - 6 && head.x + 12 <= food.x + 6) {
                    score += 10
                    scoreText.innerText = `CURRENT SCORE: ${score}`
                    makeFood()
                    foodEaten = true
                }
            }
        }
        
    }

    gameOver() {
        let head = snake[snake.length - 1]
        for (let i = snake.length - 2; i >= 0; i--) {
            if (snake[i].x == head.x && snake[i].y == head.y) {return true}
            if (head.x < 0) {return true}
            if (head.x > canvas.width - 12) {return true}
            if (head.y < 0) {return true}
            if (head.y > canvas.height - 12) {return true}        
        }
        return false
    }
    
    runGame() {
        moveSnake()
        drawFood()
        eatFood()
        //debugger
        if (gameOver()) {
            clearInterval(gameplay)
            ctx.fillStyle = "#808080"
            ctx.fillRect(0, 0, canvas.width, canvas.height)        
            ctx.font = "bold 75px sans-serif"
            ctx.fillStyle = "#000000"
            ctx.fillText("GAME OVER", 210, 320)
        }
    }



    // drawSnake()
    // makeFood()
    // game = setInterval(runGame, 60)

}