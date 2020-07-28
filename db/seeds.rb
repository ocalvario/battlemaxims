# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

germany = Country.create(name: "Germany")
russia = Country.create(name: "Russia")
netherlands = Country.create(name: "Netherlands")

Battle.create(title: "Battle of Lübeck", description: "The French inflicted a severe defeat on the Prussians, driving them from the neutral city.", image_url: "https://bit.ly/2P3OWlm", country_id: germany.id)

Battle.create(title: "Battle of Leipzig", description: "Decisively defeated again, Napoleon was compelled to return to France while the Sixth Coalition kept up its momentum, dissolving the Confederation of the Rhine and invading France early the next year.", image_url: "https://bit.ly/304gr4H", country_id: germany.id) 

Battle.create(title: "Battle of Borodino", description: "Napoleon captures Moscow but it is only a short term victory.", image_url: "https://bit.ly/304w8J3", country_id: russia.id) 

Battle.create(title: "Battle of Ligny", description: "The battle resulted in a tactical victory for the French, but the bulk of the Prussian army survived the battle in good order and played a pivotal role two days later at the Battle of Waterloo.", image_url: "https://bit.ly/3jMSoPA", country_id: netherlands.id) 


