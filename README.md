# SnackingSnek

A singlepage web application that is a recreation of the classic arcade game "Snake". The objective of the game is to get the snek as many snacks as possible before eating yourself, or colliding with the walls. The game can be played on 3 different difficulty settings. The snek is controlled with the arrow keys. The game has an associated database for storing players and game results, and will display the 10 highest scores for each given difficulty as well as the currently selected player.

## Installation
To install the program, run the following:

```bash
git clone git@github.com:kjoos22/snacking_snek.git
```
## Configuring database
To configure the database, run the following:

```bash
rails db:migrate
```

## Launching the program
Once installed, navigate to the appropriate directory and launch the backend via:

```bash
rails s
```

Navigate back to the root directory and open the game via:

Windows:
```bash
explorer.exe index.html
```

Mac/Linux:
```bash
open index.html
```

This will then open the game in your default web browser.

## Contributing
Pull requests are welcome. To propose substantial changes please open an issue.

## Future Features
1. Improved graphics
2. High Scores refresh on game end
3. Add sound
4. Additional game modes (i.E bombs spawn as well as snek snacks, eating bomb results in game over).
5. Improve snack spawning logic (snacks can currently spawn on top of snek)

## License
https://github.com/kjoos22/snacking_snek/blob/main/LICENSE.txt

