const canvas = document.getElementById("gameCanvas")
const ctx = canvas.getContext("2d")

var dx = 12
var dy = 0

document.addEventListener("keydown", changeDirection)

//snake color "#FF6600"
let snake = [
            {x: 0, y: 294},
            {x: 12, y: 294},
            {x: 24, y: 294},  
            {x: 36, y: 294},
            {x: 48, y: 294}
        ]

let food = {x: 0, y: 0}

function drawSnake() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    snake.forEach(drawSnakeSegment)
}

function drawSnakeSegment(segment) {
    ctx.fillStyle = "#FF6600"
    ctx.fillRect(segment.x, segment.y, 12, 12)
}

//clear canvas method? current first statement of drawSnake()

function moveSnake() {
    let head = {
                 x: snake[snake.length-1].x + dx,
                 y: snake[snake.length-1].y + dy
            }
    snake.push(head)
    snake.shift()
    drawSnake()
}

function changeDirection(e) {
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

function makeFood() {
    food.x = Math.floor(Math.random() * 901)
    food.y = Math.floor(Math.random() * 601)
    
}

function drawFood() {
    ctx.beginPath()
    ctx.arc(food.x, food.y, 6, 0, Math.PI*2)
    ctx.fillStyle = "#99bbff"
    ctx.fill()
    ctx.closePath()
}

function eatFood() {
    let head = snake[snake.length - 1]
    if (head.x >= food.x - 6 && head.x <= food.x + 6) {
        if (head.y >= food.y - 6 && head.y <= food.y + 6) {
            console.log("FOOD EATEN")
        }else if (head.y + 12 >= food.y - 6 && head.y + 12 <= food.y + 6) {
            console.log("FOOD EATEN2")
        }
    }
    
}

function gameOver() {
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
 
function runGame() {
    moveSnake()
    drawFood()
    eatFood()
    //debugger
    if (gameOver()) {
        clearInterval(game)
        alert("GAME OVER")
    }
}



drawSnake()
makeFood()
var game = setInterval(runGame, 60)
