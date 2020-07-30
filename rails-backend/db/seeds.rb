# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

egypt = Country.create(name: "Egypt")
germany = Country.create(name: "Germany")
netherlands = Country.create(name: "Netherlands")
portugal = Country.create(name: "Portugal")
russia = Country.create(name: "Russia")
spain = Country.create(name: "Spain")

Battle.create(title: "Battle of Borodino", description: "Napoleon captures Moscow but it is only a short term victory.", image_url: "https://bit.ly/304w8J3", country_id: russia.id) 

Battle.create(title: "Battle of Lübeck", description: "The French inflicted a severe defeat on the Prussians, driving them from the neutral city.", image_url: "https://bit.ly/2P3OWlm", country_id: germany.id)

Battle.create(title: "Battle of Leipzig", description: "Decisively defeated again, Napoleon was compelled to return to France while the Sixth Coalition kept up its momentum, dissolving the Confederation of the Rhine and invading France early the next year.", image_url: "https://bit.ly/304gr4H", country_id: germany.id) 

Battle.create(title: "Battle of Ligny", description: "The battle resulted in a tactical victory for the French, but the bulk of the Prussian army survived the battle in good order and played a pivotal role two days later at the Battle of Waterloo.", image_url: "https://bit.ly/3jMSoPA", country_id: netherlands.id) 

Battle.create(title: "Battle of the Nile", description: "The battle reversed the strategic situation between the two nations' forces in the Mediterranean and entrenched the Royal Navy in the dominant position that it retained for the rest of the war. It also encouraged other European countries to turn against France.", image_url: "https://bit.ly/2BHCrZH", country_id: egypt.id )

Battle.create(title: "Battle of the Pyramids", description: "Napoleon entered Cairo after the battle and created a new local administration under his supervision. The battle exposed the fundamental military and political decline of the Ottoman Empire throughout the past century.", image_url: "https://bit.ly/30ZXGyr", country_id: egypt.id )

Battle.create(title: "Battle of Roliça", description: "An Anglo-Portuguese army under Sir Arthur Wellesley defeated an outnumbered Imperial French division under General of Division Henri François Delaborde, near the village of Roliça in Portugal.", image_url: "https://bit.ly/2Div7nX", country_id: portugal.id )

Battle.create(title: "Battle of Trafalgar", description: "Following the battle, the Royal Navy was never again seriously challenged by the French fleet in a large-scale engagement. Napoleon had already abandoned his plans of invasion before the battle and they were never revived.", image_url: "https://bit.ly/2BKZTW6", country_id: spain.id )

Battle.create(title: "Battle of Waterloo", description: "Waterloo was the decisive engagement of the Waterloo Campaign and Napoleon's last. According to Wellington, the battle was 'the nearest-run thing you ever saw in your life'. Napoleon abdicated four days later, and coalition forces entered Paris on 7 July.", image_url: "https://bit.ly/2P5s4Sr", country_id: netherlands.id )

Battle.create(title: "Sieges of Zaragoza", description: "In The First siege, the French Verdier besieged, repeatedly stormed, and were repulsed in the summer of 1808. However, in the second siege of Zaragoza, the French capture the Spanish city.", image_url: "https://bit.ly/3096Byw", country_id: spain.id )



