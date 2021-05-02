# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Player.create([
                {name: "Kristian"},
                {name: "Victoria"}, 
                {name: "Medium Lance"}, 
                {name: "Little Lance"}
            ])

Game.create([
                {score: 100, difficulty: "Easy", player_id: 1}
            ])
