const game =  new SnackingSnek()
game.drawSnake()
game.makeFood()
game.addListeners()
game.gameplay = setInterval(game.runGame, 60)

