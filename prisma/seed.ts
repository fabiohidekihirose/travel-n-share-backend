import { db } from "../src/utils/db.server";

async function seed() {
  await db.favorite.deleteMany({});
  await db.follow.deleteMany({});
  await db.comment.deleteMany({});
  await db.post.deleteMany({});
  await db.user_account.deleteMany({});

  await Promise.all(
    getUsers().map((user) => {
      return db.user_account.create({
        data: {
          id: user.id,
          full_name: user.full_name,
          username: user.username,
          email: user.email,
          bio: user.bio,
          image: user.image,
        },
      });
    })
  );

  await Promise.all(
    getPosts().map((post) => {
      return db.post.create({
        data: {
          id: post.id,
          user_id: post.user_id,
          content: post.content,
          timestamp: post.timestamp,
        },
      });
    })
  );

  await Promise.all(
    getComments().map((comment) => {
      return db.comment.create({
        data: {
          user_id: comment.user_id,
          post_id: comment.post_id,
          content: comment.content,
        },
      });
    })
  );

  await Promise.all(
    getFollows().map((follow) => {
      return db.follow.create({
        data: {
          user_id_ed: follow.user_id_ed,
          user_id_er: follow.user_id_er,
        },
      });
    })
  );

  await Promise.all(
    getFavorites().map((favorite) => {
      return db.favorite.create({
        data: {
          user_id: favorite.user_id,
          post_id: favorite.post_id,
        },
      });
    })
  );
}

seed();

function getUsers() {
  return [
    {
      id: "DZWDsVGmqGfPGJYKTNdqazx9AiU2",
      full_name: "James Brown",
      username: "jamesbrown",
      email: "james_brown@gmail.com",
      bio: "A globetrotter with a camera in hand, capturing the beauty of every destination. I believe in immersing myself in diverse cultures and embracing the magic of each new place. Let's share our travel tales!",
      image: "/images/profile-james.png",
    },
    {
      id: "MZWDsVGmqGfPGJYKTNdqazx9AiU5",
      full_name: "Maria Jones",
      username: "mariajones",
      email: "maria_jones@gmail.com",
      bio: "Adventurous soul with an insatiable wanderlust. Always on the lookout for hidden gems and local experiences. Traveling is my passion, and I'm eager to connect with fellow explorers!",
      image: "/images/profile-maria.png",
    },
    {
      id: "RZWDsVGmqGfPGJYKTNdqazx9Aiiu",
      full_name: "Robert Smith",
      username: "robertsmith",
      email: "robert_smith123@gmail.com",
      bio: "Passionate traveler and food enthusiast. Exploring the world through its flavors and cuisines is my greatest joy. I'm thrilled to connect with fellow foodies and discover the best local delicacies!",
      image: "/images/profile-robert.png",
    },
    {
      id: "RdWDsVGmqGfPGJYKTNdqazx9Ainu",
      full_name: "Li Wei",
      username: "liwei",
      email: "li_wei1980@gmail.com",
      bio: "A nature lover and outdoor enthusiast. Hiking, camping, and capturing breathtaking landscapes are my reasons to travel. Join me in discovering the world's most awe-inspiring natural wonders!",
      image: "/images/profile-li.png",
    },
    {
      id: "RZWDsVGmqgfPGJYKTNdqazx9Aiih",
      full_name: "Alexander Johnson",
      username: "alex_johnson123",
      email: "alex_johnson123@gmail.com",
      bio: "A history buff with a deep appreciation for cultural heritage. Exploring ancient ruins and iconic landmarks fuels my curiosity. Let's embark on a journey through time and uncover hidden stories!",
      image: "/images/profile-alex.png",
    },
    {
      id: "RZWDsVGmqGfPGJYhTNdqazx9Aiij",
      full_name: "Olivia Carter",
      username: "oli_carter",
      email: "carter_oli@gmail.com",
      bio: "An adrenaline junkie seeking thrill and adventure. Skydiving, bungee jumping, and extreme sports are my calling. If you're up for heart-pounding experiences, let's connect and plan our next adrenaline-filled trip!",
      image: "/images/profile-olivia.png",
    },
    {
      id: "RZWDsVGmqGfPGJYKTNdq1zx9Aiig",
      full_name: "Akira Yamamoto",
      username: "akira",
      email: "akira_123@gmail.com",
      bio: "An eco-conscious traveler passionate about sustainable tourism. I believe in exploring responsibly and leaving a positive impact. Join me in discovering eco-friendly destinations and embracing a greener way to travel!",
      image: "/images/profile-akira.png",
    },
    {
      id: "gsWDsVGmqGfPGJYKTNdqazx9Aii3",
      full_name: "Ava Wilson",
      username: "ava_wilson",
      email: "ava_123@gmail.com",
      bio: "A budget traveler with a knack for finding the best deals. Exploring the world on a shoestring budget is my specialty. Let's exchange money-saving tips and embark on incredible adventures without breaking the bank!",
      image: "/images/profile-ava.png",
    },
    {
      id: "1jdDsVGmqGfPGJYKTNdqazx9Aiir",
      full_name: "James Martinez",
      username: "martinez_travel",
      email: "martinez_travel123@gmail.com",
      bio: "A wellness enthusiast on a quest for rejuvenation and self-discovery. Yoga retreats, spa getaways, and holistic experiences are my travel goals. Let's find inner peace and balance together!",
      image: "/images/profile-martinez.png",
    },
    {
      id: "hjd123GmqGfPGJYKTNdqazx9Aiir",
      full_name: "Benjamin Lee",
      username: "ben_lee",
      email: "ben_lee123@gmail.com",
      bio: "An off-the-beaten-path explorer fascinated by remote destinations. I thrive on unique cultural encounters and untouched landscapes. Join me in venturing into the unknown and uncovering hidden treasures!",
      image: "/images/profile-ben.png",
    },
    {
      id: "jdDsVGmqGfPGJYKTNdqiazx9Aii1",
      full_name: "Elijah Rodriguez",
      username: "elijah_traveller",
      email: "elijah_rodri123@gmail.com",
      bio: "A thrill-seeking traveler on a quest for adrenaline-fueled experiences. From paragliding to scuba diving, I'm up for any adventure. Join me if you're ready to push your boundaries and live life to the fullest!",
      image: "/images/profile-elijah.png",
    },
    {
      id: "tjdDsddGmqGfPGJYKTNdqazx9Aiia",
      full_name: "Olivia Ramirez",
      username: "ramirez123",
      email: "ramirez_olivia@gmail.com",
      bio: "A travel writer with a passion for storytelling. I believe every journey has a tale worth sharing. Let's connect and weave our travel experiences into captivating narratives!",
      image: "/images/profile-olivia-ramirez.png",
    },
    {
      id: "bpeksVGmqGfPGJYKTNdqazx9Aii4",
      full_name: "Liam Wilson",
      username: "wilson_travels",
      email: "wilson_travels123@gmail.com",
      bio: "An avid backpacker exploring the world one step at a time. I thrive on spontaneous adventures and creating lifelong memories. Join me in embracing the freedom of the open road!",
      image: "/images/profile-liam.png",
    },
  ];
}

function getPosts() {
  return [
    {
      id: -1,
      user_id: "DZWDsVGmqGfPGJYKTNdqazx9AiU2",
      content:
        "Southeast Asia Experience\n\nDay 1: Arrival in Bangkok, Thailand\nAs I landed at Suvarnabhumi Airport in Bangkok, I could immediately sense the vibrant energy of Southeast Asia. After settling into my hotel, I wasted no time and ventured out to explore the bustling streets of Thailand's capital. From the ornate temples of Wat Arun and Wat Phra Kaew to the lively markets of Chatuchak and Khao San Road, Bangkok enchanted me with its rich cultural heritage and bustling atmosphere.\n\nDay 2-3: Siem Reap, Cambodia\nFrom Bangkok, I hopped on a short flight to Siem Reap, Cambodia. The main highlight of my visit was exploring the magnificent temples of Angkor Archaeological Park. Watching the sunrise over the iconic Angkor Wat was a truly awe-inspiring moment, and I spent the next two days exploring the ancient ruins of Bayon, Ta Prohm, and Banteay Srei. The intricate carvings and mystical atmosphere left me with a deep appreciation for Cambodia's historical and architectural wonders.\n\nDay 4-5: Hanoi, Vietnam\nNext, I flew to Hanoi, the capital city of Vietnam. The charming streets of the Old Quarter beckoned me to get lost amidst the bustling markets, street food stalls, and ancient temples. I embarked on a cyclo tour, exploring the city's rich history and French colonial architecture. A visit to the Ho Chi Minh Mausoleum and the serene Hoan Kiem Lake added a touch of tranquility to the vibrant cityscape.\n\nDay 6-7: Bali, Indonesia\nLeaving mainland Southeast Asia, I headed to the tropical paradise of Bali, Indonesia. The island's natural beauty and cultural traditions instantly captivated me. From the lush rice terraces of Ubud to the pristine beaches of Seminyak and Uluwatu, Bali offered a perfect blend of relaxation and adventure. I indulged in traditional Balinese cuisine, tried my hand at surfing, and explored ancient temples such as Tanah Lot and Uluwatu Temple.\n\nDay 8-9: Singapore\nConcluding my Southeast Asia journey, I flew to Singapore, a city-state known for its modernity and multiculturalism. I marveled at the futuristic Gardens by the Bay, admired the iconic Marina Bay Sands, and explored the vibrant neighborhoods of Chinatown and Little India. I couldn't resist trying Singapore's famous street food at the hawker centers, where I sampled dishes like Hainanese chicken rice and chili crab.\n\nDay 10: Departure\nAs my adventure in Southeast Asia came to an end, I reflected on the incredible experiences, warm hospitality, and diverse cultures I encountered along the way. From Thailand's energetic streets to Cambodia's ancient temples, Vietnam's bustling markets, Indonesia's natural beauty, and Singapore's cosmopolitan charm, Southeast Asia left an indelible mark on my heart. Departing from Changi Airport, I carried cherished memories and a desire to return to this captivating region in the future.",
      timestamp: "2022-12-15T02:19:45.743Z",
    },
    {
      id: -2,
      user_id: "DZWDsVGmqGfPGJYKTNdqazx9AiU2",
      content:
        "7 Days in Japan\n\nDay 1: Arrival in Tokyo\nAs I landed at Tokyo's Haneda Airport, I was filled with excitement and anticipation for my 7-day adventure in Japan. After a smooth transfer to my hotel in Tokyo, I wasted no time and headed straight to the iconic Shibuya neighborhood. Witnessing the famous Shibuya Crossing was awe-inspiring, and the energy of the bustling streets was contagious. Later, I found peace at the serene Meiji Shrine, surrounded by a lush forest. The day ended with a delightful dinner at a local eatery, where I sampled some delicious Japanese cuisine.\n\nDay 2: Tokyo Exploration\nEager to explore more of Tokyo's wonders, I started the day by visiting the historic district of Asakusa. Senso-ji Temple's grandeur left me speechless, and I loved exploring the colorful Nakamise Shopping Street. In the afternoon, Odaiba's futuristic charm captivated me as I visited the digital art wonderland, TeamLab Borderless. The Gundam Statue was also a highlight for an anime enthusiast like me. As evening approached, I soaked in the vibrant atmosphere of Shinjuku and tried some local delicacies.\n\nDay 3: Journey to Kyoto\nToday marked a new adventure as I boarded the bullet train from Tokyo to Kyoto. The fast-paced ride was smooth and comfortable, and I quickly arrived in Kyoto, a city steeped in history and culture. My first stop was the mesmerizing Kinkaku-ji, the Golden Pavilion, reflecting beautifully on the surrounding pond. In Arashiyama, the enchanting bamboo grove felt like stepping into a fairy tale. At Fushimi Inari Taisha, I marveled at the endless rows of vermillion torii gates. The day ended with a fascinating stroll through Gion, where I hoped to spot geishas.\n\nDay 4: Kyoto Delights\nToday's exploration took me deeper into Kyoto's rich heritage. Kiyomizu-dera's wooden terrace offered breathtaking views of the city, and the temple's spiritual atmosphere was rejuvenating. Nijo Castle's majestic architecture and elegant gardens were a true testament to Kyoto's historical importance. In the evening, I indulged in a traditional kaiseki meal, savoring every delicate and flavorful course.\n\nDay 5: Osaka Excursion\nWith Osaka just a short train ride away, I decided to take a day trip to this lively city. Osaka Castle's grandeur was impressive, and I enjoyed strolling through the picturesque castle grounds. Dotonbori's vibrant streets were a sensory overload, with mouthwatering aromas and dazzling neon lights everywhere. Trying takoyaki and okonomiyaki from street vendors was a must. The energetic atmosphere of Namba district kept me entertained until it was time to head back to Kyoto.\n\nDay 6: Hiroshima Day Trip\nToday's itinerary took me to Hiroshima, a city with a poignant history. Visiting the Peace Memorial Park was a somber experience, and the Peace Memorial Museum provided a deeply moving insight into the city's resilience. Taking a ferry to Miyajima Island, I couldn't help but be amazed by the picturesque beauty of the floating torii gate at Itsukushima Shrine. The island's friendly deer and scenic landscapes made it a memorable day trip.\n\nDay 7: Farewell and Departure\nAs my final day in Japan arrived, I felt a mix of emotions. Saying goodbye to this incredible country was bittersweet. With fond memories and unforgettable experiences, I boarded my flight home, grateful for the enriching journey through Japan's captivating culture, history, and natural beauty. Until we meet again, Japan!\n",
      timestamp: "2023-02-09T01:45:45.743Z",
    },
    {
      id: -3,
      user_id: "MZWDsVGmqGfPGJYKTNdqazx9AiU5",
      content:
        "Itinerary:\nDay 1-3: Budapest, Hungary\nDay 4-6: Prague, Czech Republic\nDay 7-8: Krakow, Poland\nDay 9-10: Bucharest, Romania\n\nSafety:\nOverall, Eastern Europe is a safe destination for travelers. However, it's always wise to exercise common precautions such as keeping an eye on your belongings, avoiding isolated areas at night, and staying aware of your surroundings. Each city has its own safety considerations, so it's advisable to research specific safety tips for each destination.\n\nCost:\nEastern Europe is generally more affordable than Western European countries. Hungary and Poland tend to be more budget-friendly, while the Czech Republic and Romania offer a mix of budget and mid-range options. Accommodation, food, and transportation are reasonably priced, allowing travelers to make the most of their budget.\n\nTransportation:\nEastern Europe has a well-developed transportation network, making it easy to travel between cities. Train travel is convenient and efficient, with frequent connections. Buses are also popular and offer a cost-effective option. In major cities, public transportation systems like trams and metros are reliable and inexpensive. Taxis and ride-sharing services are available but can be more expensive.\n\nHighlights:\n\nBudapest, Hungary: Explore the magnificent Hungarian Parliament Building, visit St. Stephen's Basilica, relax in the thermal baths, and take a boat ride along the Danube River.\n\nPrague, Czech Republic: Marvel at the Prague Castle and St. Vitus Cathedral, stroll through the charming streets of Old Town, cross the iconic Charles Bridge, and enjoy panoramic views from Petřín Hill.\n\nKrakow, Poland: Visit the historic Wawel Castle, explore the beautiful Main Market Square and St. Mary's Basilica, take a poignant trip to Auschwitz-Birkenau Memorial and Museum, and enjoy the vibrant atmosphere of Kazimierz, the Jewish Quarter.\n\nBucharest, Romania: Discover the Palace of the Parliament, explore the charming Old Town, visit the Village Museum, and take a day trip to the stunning Bran Castle, also known as Dracula's Castle.\n\nEach of these cities offers its own unique charm, history, and cultural experiences, making Eastern Europe an enchanting region to explore.",
      timestamp: "2023-05-14T07:29:45.743Z",
    },
    {
      id: -4,
      user_id: "gsWDsVGmqGfPGJYKTNdqazx9Aii3",
      content:
        "Day 1-5: Paris, France\nBegin your journey in the romantic city of Paris. Explore iconic landmarks such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. Take leisurely strolls along the Seine River and indulge in delectable pastries at local patisseries. Don't miss the chance to visit the Palace of Versailles, a masterpiece of French opulence.\n\nDay 6-10: Rome, Italy\nNext, immerse yourself in the ancient city of Rome. Marvel at the Colosseum, Roman Forum, and Pantheon, witnessing the grandeur of the Roman Empire. Visit the Vatican City to explore St. Peter's Basilica and gaze upon Michelangelo's breathtaking Sistine Chapel ceiling. Take leisurely walks through charming neighborhoods like Trastevere and sample authentic Italian cuisine.\n\nDay 11-15: Tokyo, Japan\nEmbark on a journey to the bustling metropolis of Tokyo. Experience the vibrant mix of traditional and modern culture as you explore the tranquil gardens of the Imperial Palace and the iconic Senso-ji Temple in Asakusa. Visit the futuristic neighborhoods of Shibuya and Shinjuku, where bustling streets, neon lights, and high-tech innovations create a captivating atmosphere.\n\nDay 16-20: Rio de Janeiro, Brazil\nHead to Rio de Janeiro, known for its stunning beaches, vibrant carnival, and breathtaking landscapes. Soak up the sun on Copacabana and Ipanema beaches, visit the iconic Christ the Redeemer statue atop Corcovado Mountain, and explore the colorful neighborhood of Santa Teresa. Don't miss the opportunity to samba dance and experience the electrifying energy of Rio's nightlife.\n\nDay 21-25: Cape Town, South Africa\nFly to Cape Town, a city nestled between the Atlantic Ocean and the iconic Table Mountain. Take a cable car ride to the summit of Table Mountain for panoramic views of the city and coastline. Explore the vibrant Victoria & Alfred Waterfront, visit the historical Robben Island, and indulge in wine tastings in the nearby Cape Winelands.\n\nDay 26-30: New York City, USA\nConclude your journey in the city that never sleeps, New York City. Experience the grandeur of Times Square, explore world-class museums like the Metropolitan Museum of Art, and take a stroll through Central Park. Enjoy stunning views from the Empire State Building, walk across the Brooklyn Bridge, and immerse yourself in the diverse culinary scene.\n\nThis travel itinerary encompasses some of the best highlights in the world, offering a blend of history, culture, natural beauty, and vibrant city life. Each destination has its own unique charm and experiences to offer, creating memories that will last a lifetime.",
      timestamp: "2023-02-21T04:12:45.743Z",
    },
    {
      id: -5,
      user_id: "RZWDsVGmqGfPGJYKTNdq1zx9Aiig",
      content:
        "Duration: 12 Days\nDestinations: Dubai, United Arab Emirates and Istanbul, Turkey\n\nItinerary:\nDay 1-5: Dubai, United Arab Emirates\nDay 6-12: Istanbul, Turkey\n\nSafety:\nThe Middle East, like any other destination, requires travelers to be mindful of their safety. Both Dubai and Istanbul are generally safe for tourists. However, it's important to stay aware of your surroundings, follow local laws and customs, and take common precautions such as securing your belongings and avoiding crowded areas at certain times. Stay updated on travel advisories and guidelines from your embassy or consulate.\n\nCost:\nThe cost of travel in the Middle East can vary depending on the level of luxury and the type of experiences you choose. Dubai is known for its luxurious offerings and can be relatively expensive, especially in terms of accommodation and dining. Istanbul, on the other hand, offers a wider range of budget-friendly options for accommodation, food, and transportation, making it more affordable for travelers.\n\nTransportation:\nDubai has a modern and efficient public transportation system, including the Dubai Metro, buses, and taxis, which makes it easy to get around the city. Istanbul also has an extensive public transportation network, including trams, buses, and ferries. Taxis and ride-sharing services are also widely available in both cities. It's advisable to use licensed taxis or reliable transportation apps to ensure a safe and fair journey.\n\nHighlights:\nDubai, United Arab Emirates:\n\nVisit the iconic Burj Khalifa, the world's tallest building, and enjoy panoramic views from the observation deck.\nExplore the historic neighborhood of Al Fahidi and wander through the narrow streets of the Al Bastakiya district.\nExperience the vibrant atmosphere of traditional souks, such as the Gold Souk and Spice Souk.\nRelax on Jumeirah Beach and enjoy the luxury of Palm Jumeirah, an artificial island.\nExplore the Dubai Mall, home to numerous shops, entertainment options, and the Dubai Aquarium and Underwater Zoo.\nIstanbul, Turkey:\n\nDiscover the Hagia Sophia, a UNESCO World Heritage Site, and admire its stunning architecture.\nExplore the Blue Mosque, known for its intricate blue tile work and six minarets.\nWander through the historic neighborhood of Sultanahmet and visit the Topkapi Palace, the former residence of Ottoman sultans.\nTake a boat cruise along the Bosphorus Strait, where Europe and Asia meet.\nImmerse yourself in the vibrant Grand Bazaar and Spice Bazaar, known for their unique shopping experiences.\nBoth Dubai and Istanbul offer a blend of rich history, stunning architecture, vibrant markets, and unique cultural experiences. By exploring these two captivating cities, you'll get a taste of the Middle East's diverse offerings and create unforgettable memories.",
      timestamp: "2023-07-12T04:53:45.743Z",
    },
    {
      id: -6,
      user_id: "RZWDsVGmqGfPGJYhTNdqazx9Aiij",
      content:
        "Exploring South America\n\nDuration: 20 Days\nDestinations: Lima, Peru; Rio de Janeiro, Brazil; Buenos Aires, Argentina; Santiago, Chile; and Cusco, Peru.\n\nCost:\nSouth America offers a range of budget-friendly options for travelers. The cost of travel can vary depending on your accommodation choices, dining preferences, and activities. Generally, Peru and Bolivia tend to be more affordable, while Brazil and Argentina can be slightly more expensive. However, with careful planning and some research, it's possible to travel on a reasonable budget.\n\nTransportation:\nSouth America has a well-connected transportation network, allowing for convenient travel between destinations.\n\nFlights: Look for affordable flights between major cities, such as Lima, Rio de Janeiro, Buenos Aires, and Santiago. Booking in advance and being flexible with your travel dates can help you find better deals.\n\nBuses: Buses are a popular and cost-effective way to travel within South America. They offer comfortable options, especially for long-distance journeys, and connect major cities and tourist destinations.\n\nLocal Transportation: Utilize local transportation options like taxis, metros, and buses within each city. These are generally affordable and provide easy access to attractions.\n\nItinerary:\nDay 1-3: Lima, Peru\nExplore the vibrant capital city of Peru. Visit historic sites like Plaza Mayor and the Cathedral of Lima. Don't miss the chance to try delicious Peruvian cuisine, known for its ceviche and Pisco Sour.\n\nDay 4-7: Rio de Janeiro, Brazil\nExperience the energetic city of Rio de Janeiro. Relax on the stunning beaches of Copacabana and Ipanema, take a cable car up Sugarloaf Mountain, and visit the iconic Christ the Redeemer statue. Immerse yourself in the vibrant atmosphere of the city's samba and nightlife.\n\nDay 8-11: Buenos Aires, Argentina\nDiscover the cultural hub of Buenos Aires. Wander through the colorful streets of La Boca, explore the historic Recoleta Cemetery, and watch a tango performance in San Telmo. Indulge in Argentina's famous steaks and explore the city's thriving arts scene.\n\nDay 12-15: Santiago, Chile\nExperience the cosmopolitan charm of Santiago. Visit the historic neighborhoods of Bellavista and Lastarria, explore the bohemian streets of Barrio Italia, and take a scenic cable car ride to the top of San Cristobal Hill for panoramic views of the city.\n\nDay 16-20: Cusco and Machu Picchu, Peru\nHead to Cusco, the gateway to Machu Picchu. Immerse yourself in the rich Inca history and explore the ancient ruins within the city. Take a train or hike the Inca Trail to reach the awe-inspiring Machu Picchu, one of the New Seven Wonders of the World.\n\nSafety:\nAs with any travel destination, it's important to stay vigilant and take necessary precautions while traveling in South America. Research the safety situation in each city, avoid displaying valuable items, be cautious in crowded areas, and use reputable transportation options. It's advisable to check the latest travel advisories from your embassy or consulate before your trip.\n\nOpinion:\nSouth America offers a diverse range of experiences, from historical sites to natural wonders and vibrant cultures. The region is filled with warmth, friendly people, and breathtaking landscapes. From the ancient ruins of Machu Picchu to the lively streets of Rio de Janeiro, there is something for everyone. The vibrant cultures, delicious cuisine, and stunning natural beauty make South America a captivating destination.\n\nHighlights:\n\nExploring the ancient ruins of Machu Picchu in Peru.\nSoaking up the vibrant atmosphere and beautiful beaches of Rio de Janeiro, Brazil.\nIndulging in delicious Argentinian steaks and experiencing tango in Buenos Aires.\nEnjoying the cosmopolitan charm of Santiago, Chile, and its surrounding natural beauty.\nTrying the diverse flavors of Peruvian cuisine in Lima.\nSouth America offers an unforgettable travel experience, immersing you in its rich history, stunning landscapes, and vibrant cultures. Each destination has its own unique charm, making it a must-visit continent for travelers seeking adventure and discovery.",
      timestamp: "2023-01-20T06:59:45.743Z",
    },
    {
      id: -7,
      user_id: "RZWDsVGmqgfPGJYKTNdqazx9Aiih",
      content:
        "Exploring China\n\nDuration: 15 Days\nDestinations: Beijing, Xi'an, Shanghai, Guilin, and Hong Kong\n\nCost:\nChina offers a range of options for travelers on different budgets. The cost of travel can vary depending on accommodation choices, dining preferences, and activities. Generally, China is considered to be a relatively affordable destination, especially when compared to some other popular travel destinations. With careful planning and budgeting, it is possible to have a cost-effective trip in China.\n\nTransportation:\nChina has a well-developed transportation network, making it easy to travel between cities and within each destination.\n\nFlights: Domestic flights are a convenient option for traveling long distances within China. There are numerous airports serving major cities, allowing for efficient and time-saving travel.\n\nTrains: China's high-speed rail network is extensive, offering fast and comfortable transportation between major cities. Trains are a popular choice for both domestic and intercity travel, providing a cost-effective and efficient way to explore different regions of the country.\n\nLocal Transportation: Within each city, public transportation options such as metros, buses, and taxis are readily available and affordable. Public transportation networks are well-maintained and convenient for getting around and exploring various attractions.\n\nItinerary:\nDay 1-3: Beijing\nExplore the capital city of China. Visit iconic landmarks such as the Great Wall of China, the Forbidden City, and the Temple of Heaven. Take a stroll through the historic hutongs (traditional alleyways) and enjoy the local street food.\n\nDay 4-6: Xi'an\nDiscover the ancient city of Xi'an, known for the Terracotta Warriors. Explore the awe-inspiring Terracotta Army Museum, visit the historic Xi'an City Wall, and sample delicious local dishes, including the famous Xi'an dumplings.\n\nDay 7-9: Shanghai\nExperience the vibrant metropolis of Shanghai. Wander along the Bund, admire the modern skyline, and visit iconic attractions like the Oriental Pearl Tower and Yu Garden. Explore the trendy neighborhoods of Tianzifang and Xintiandi, known for their unique boutiques, cafes, and art galleries.\n\nDay 10-12: Guilin\nImmerse yourself in the stunning natural beauty of Guilin. Cruise along the Li River, passing breathtaking limestone karst landscapes. Explore the picturesque town of Yangshuo, where you can bike through the countryside, hike up Moon Hill, and enjoy the local charm.\n\nDay 13-15: Hong Kong\nConclude your journey in Hong Kong, a dynamic city with a blend of Eastern and Western cultures. Visit Victoria Peak for panoramic views of the city, explore the bustling streets of Central and Mong Kok, and indulge in delicious dim sum. Experience the vibrant nightlife, and don't miss the spectacular Symphony of Lights show.\n\nSafety:\nChina is generally a safe destination for travelers. However, it's always important to exercise caution and take common precautions. Be aware of your surroundings, keep your belongings secure, and follow local laws and customs. Stay updated on travel advisories and follow any guidelines provided by your embassy or consulate.\n\nOpinion:\nChina offers a fascinating blend of ancient history, stunning landscapes, and vibrant city life. The country's rich cultural heritage, delicious cuisine, and warm hospitality make it an incredible destination to explore. From the awe-inspiring Great Wall to the bustling streets of Shanghai and the serene beauty of Guilin, China offers a diverse range of experiences that leave a lasting impression.\n\nHighlights:\n\nWalking on the Great Wall of China and taking in the breathtaking views.\nMarveling at the Terracotta Warriors in Xi'an.\nExperiencing the vibrant atmosphere and futuristic skyline of Shanghai.\nCruising along the Li River and immersing yourself in the natural beauty of Guilin.\nExploring the dynamic cityscape and cultural fusion of Hong Kong.\nChina is a vast and diverse country with endless wonders to explore. From its ancient history to its modern marvels, this travel experience will provide you with a glimpse into China's fascinating culture, traditions, and breathtaking landscapes.",
      timestamp: "2023-01-10T01:23:45.743Z",
    },
    {
      id: -8,
      user_id: "1jdDsVGmqGfPGJYKTNdqazx9Aiir",
      content:
        "Exploring the USA\n\nDuration: 20 Days\nDestinations: New York City, Las Vegas, San Francisco, and Miami\n\nCost:\nTraveling in the USA can vary greatly in cost depending on the destinations you choose, your accommodation preferences, dining choices, and activities. As a diverse and vast country, the cost of travel can range from budget-friendly to more expensive options. It's important to plan and budget accordingly, keeping in mind that prices can fluctuate depending on the season and location.\n\nTransport:\nTransportation options in the USA are plentiful, offering convenient ways to explore different cities.\n\nFlights: Domestic flights are a popular and efficient mode of transportation for covering long distances between major cities. Booking in advance and comparing prices can help you find better deals.\n\nTrains: Amtrak provides train services that connect various cities and regions, offering a scenic and relaxed way to travel between destinations.\n\nBuses: Bus travel is an affordable option for shorter distances, with companies like Greyhound and Megabus offering extensive routes across the country.\n\nRental Cars: Renting a car can provide flexibility, especially for exploring more remote areas or national parks. However, it's important to consider parking fees and traffic conditions in major cities.\n\nItinerary:\nDay 1-5: New York City, New York\nExplore the bustling streets of the Big Apple. Visit iconic landmarks like Times Square, Central Park, and the Statue of Liberty. Experience the vibrant neighborhoods of Manhattan, indulge in diverse culinary delights, and immerse yourself in the city's world-class cultural attractions.\n\nDay 6-9: Las Vegas, Nevada\nHead to the entertainment capital of the world. Experience the dazzling lights of the Las Vegas Strip, catch a show or concert, and try your luck at the famous casinos. Consider taking a day trip to the nearby Grand Canyon for a breathtaking natural wonder.\n\nDay 10-13: San Francisco, California\nDiscover the unique charm of San Francisco. Walk across the iconic Golden Gate Bridge, ride a cable car up the city's steep hills, and explore eclectic neighborhoods like Chinatown and Haight-Ashbury. Don't miss a visit to Alcatraz Island and enjoy the diverse culinary scene.\n\nDay 14-20: Miami, Florida\nSoak up the sun and vibrant atmosphere in Miami. Relax on the beautiful beaches of Miami Beach, explore the trendy Art Deco district of South Beach, and indulge in the city's diverse cuisine. Take a boat tour of the iconic Biscayne Bay and experience the lively nightlife in the city's renowned clubs.\n\nSafety:\nWhen it comes to safety, it's essential to exercise caution and common sense while traveling in the USA. Stay aware of your surroundings, secure your belongings, and follow local laws and regulations. As with any travel destination, it's advisable to research and be mindful of any specific safety concerns or travel advisories that may apply to the cities you plan to visit.\n\nOpinion:\nTraveling around the USA offers a diverse range of experiences and a glimpse into the country's unique blend of cultures, landscapes, and lifestyles. From the iconic cityscape of New York City to the dazzling lights of Las Vegas, and the laid-back atmosphere of San Francisco to the sun-soaked beaches of Miami, there's something for every traveler. The USA is vast and offers an incredible variety of sights, activities, and cuisines that will leave you with unforgettable memories.\n\nHighlights:\n\nWitnessing the grandeur and energy of Times Square in New York City.\nExperiencing the excitement and entertainment of Las Vegas.\nCycling across the Golden Gate Bridge in San Francisco.\nRelaxing on the beautiful beaches of Miami and exploring its vibrant neighborhoods.\nSampling a variety of cuisines from around the world in each city, reflecting the diverse cultural melting pot of the USA.\nTraveling across the USA provides a remarkable adventure, showcasing the country's vibrant cities, natural wonders, and cultural diversity. Each destination offers its own unique charm and experiences, ensuring a memorable journey through the heart of America.",
      timestamp: "2023-01-10T03:33:45.743Z",
    },
    {
      id: -9,
      user_id: "RdWDsVGmqGfPGJYKTNdqazx9Ainu",
      content:
        "Exploring Australia\n\nDuration: 15 Days\nDestinations: Sydney, Melbourne, Cairns, and Perth\n\nCost:\nTraveling in Australia can vary in cost depending on your accommodation preferences, dining choices, and activities. Australia is known to be a relatively expensive destination, but with proper planning, it's possible to manage your budget. Accommodation options range from budget-friendly hostels to luxury hotels, and dining choices can vary from affordable local eateries to high-end restaurants. Entrance fees to attractions and activities should also be factored into your budget.\n\nTransport:\nAustralia has a well-established transportation system, making it easy to travel between cities and within each destination.\n\nFlights: Domestic flights are a popular and efficient mode of transport for covering long distances between major cities. Booking in advance and comparing prices can help you find better deals.\n\nTrains: Australia offers scenic rail journeys such as the Indian Pacific and The Ghan, which provide an opportunity to see the diverse landscapes of the country. However, trains are not as extensive as in some other countries, so it's important to research availability and routes.\n\nBuses: Buses are a cost-effective option for traveling shorter distances within cities or between destinations. Companies like Greyhound and Premier Motor Service provide reliable bus services.\n\nLocal Transportation: Public transportation systems like trains, trams, and buses are available in major cities such as Sydney, Melbourne, and Perth. Taxis and ride-sharing services are also widely available.\n\nItinerary:\nDay 1-4: Sydney, New South Wales\nExplore the vibrant city of Sydney. Visit iconic landmarks such as the Sydney Opera House and Sydney Harbour Bridge. Stroll along the picturesque coastal walk from Bondi to Coogee, and take a ferry ride to Manly Beach. Enjoy the vibrant dining scene and experience the city's lively nightlife.\n\nDay 5-8: Melbourne, Victoria\nExperience the cultural capital of Australia. Explore the hidden laneways and street art in Melbourne's city center. Visit Queen Victoria Market, Royal Botanic Gardens, and Federation Square. Indulge in Melbourne's renowned coffee culture and enjoy the city's thriving food scene.\n\nDay 9-11: Cairns, Queensland\nDiscover the tropical paradise of Cairns. Explore the Great Barrier Reef, a UNESCO World Heritage Site, through snorkeling or scuba diving. Take a scenic drive to the nearby Daintree Rainforest and explore its unique ecosystems. Don't miss the chance to visit Kuranda Village and experience the Skyrail Rainforest Cableway.\n\nDay 12-15: Perth, Western Australia\nHead to the beautiful city of Perth on the west coast. Explore Kings Park and Botanic Garden for panoramic city views. Visit the lively Fremantle Markets and take a ferry to Rottnest Island to encounter friendly quokkas. Enjoy the stunning beaches and vibrant dining scene along the Swan River.\n\nSafety:\nAustralia is generally a safe destination for travelers. However, it's important to follow common safety precautions, such as taking care of your belongings, being cautious in unfamiliar areas at night, and respecting any warnings or guidelines related to wildlife or weather conditions. It's advisable to stay informed about local laws, emergency contact numbers, and any travel advisories issued by authorities.\n\nOpinion:\nTraveling around Australia is an incredible experience. The country offers diverse landscapes, unique wildlife, vibrant cities, and a relaxed atmosphere. From the iconic landmarks of Sydney to the cultural charm of Melbourne, the natural wonders of Cairns, and the laid-back vibe of Perth, Australia has something for everyone. The friendly locals, stunning beaches, and fascinating wildlife make it a destination worth exploring.\n\nHighlights:\n\nWitnessing the architectural marvel of the Sydney Opera House.\nExploring the hidden laneways and street art of Melbourne.\nSnorkeling or diving in the Great Barrier Reef.\nEnjoying the stunning coastal scenery and unique wildlife in Cairns.\nRelaxing on the beautiful beaches of Perth and encountering quokkas on Rottnest Island.\nTraveling through Australia allows you to embrace the country's natural beauty, diverse cities, and unique experiences. Each destination offers a distinct character, ensuring a memorable journey through the land Down Under.",
      timestamp: "2023-03-29T05:15:45.743Z",
    },
    {
      id: -10,
      user_id: "RdWDsVGmqGfPGJYKTNdqazx9Ainu",
      content:
        "Exploring Central Asia\n\nDuration: 15 Days\nDestinations: Kazakhstan, Kyrgyzstan, Tajikistan, and Uzbekistan\n\nCost:\nTraveling in Central Asia can vary in cost depending on your accommodation preferences, dining choices, and activities. The region offers a range of options, from budget-friendly guesthouses and local eateries to more upscale hotels and restaurants. Overall, Central Asia is known to be relatively affordable compared to other travel destinations, making it an attractive option for budget-conscious travelers.\n\nTransport:\nTransportation options in Central Asia can vary depending on the country and region you are visiting.\n\nFlights: International flights are available to major cities such as Almaty, Bishkek, Dushanbe, and Tashkent. Domestic flights or regional flights are also available within each country for convenient travel between cities.\n\nShared Taxis: Shared taxis or marshrutkas are a popular mode of transport within cities and between towns in Central Asia. They are affordable, but it's important to negotiate prices and confirm routes beforehand.\n\nBuses: Buses operate between major cities and towns, providing an economical option for longer distances. The comfort and quality of buses may vary, so it's advisable to research and choose reputable bus companies.\n\nTrains: Train travel is a popular and convenient option for longer journeys in Central Asia. Trains offer different classes, including sleeper cabins, providing a comfortable way to travel between destinations.\n\nItinerary:\nDay 1-3: Almaty, Kazakhstan\nBegin your journey in Almaty, the largest city in Kazakhstan. Explore the vibrant city center, visit the Central State Museum to learn about Kazakh culture, and take a cable car ride to Kok-Tobe Hill for panoramic views. Don't miss the opportunity to hike or visit the nearby Big Almaty Lake for stunning natural beauty.\n\nDay 4-6: Bishkek, Kyrgyzstan\nTravel to Bishkek, the capital city of Kyrgyzstan. Visit Ala-Too Square, where you can see the changing of the guards, and explore the lively Osh Bazaar. Take a trip to Ala-Archa National Park, known for its picturesque hiking trails and beautiful landscapes.\n\nDay 7-9: Dushanbe, Tajikistan\nFly to Dushanbe, the capital city of Tajikistan. Discover the city's history at the National Museum of Tajikistan and visit the impressive Rudaki Park. Take a day trip to Nurek Reservoir or venture further to explore the scenic Pamir Mountains if time permits.\n\nDay 10-15: Tashkent, Samarkand, and Bukhara in Uzbekistan\nHead to Tashkent, the capital city of Uzbekistan. Explore its modern architecture, visit the bustling Chorsu Bazaar, and discover historical sites such as Khast Imam Complex and Kukeldash Madrasah.\n\nContinue to Samarkand, a UNESCO World Heritage city known for its stunning architectural wonders. Visit Registan Square, Shah-i-Zinda, and the Bibi-Khanym Mosque.\n\nFinally, travel to Bukhara, another UNESCO World Heritage city. Immerse yourself in its ancient charm, wander through the historic old town, and visit landmarks like the Ark of Bukhara and Po-i-Kalyan complex.\n\nSafety:\nCentral Asia is generally safe for travelers, but it's important to exercise caution and stay informed about local conditions. Be mindful of your belongings, follow local customs and laws, and stay updated on travel advisories. It's advisable to have travel insurance and keep emergency contact numbers handy.\n\nOpinion:\nTraveling through Central Asia is an enriching and unique experience. The region offers a rich blend of history, culture, and natural beauty. From the modern cityscape of Almaty to the nomadic traditions of Kyrgyzstan, the ancient Silk Road cities of Uzbekistan, and the rugged landscapes of Tajikistan, Central Asia provides a fascinating journey off the beaten path. The warm hospitality, stunning architecture, and breathtaking landscapes make it a hidden gem worth exploring.\n\nHighlights:\n\nExploring the vibrant city of Almaty and hiking in the nearby mountains.\nDiscovering the nomadic culture and stunning landscapes of Kyrgyzstan.\nExperiencing the rich history and architectural wonders of Samarkand and Bukhara in Uzbekistan.\nImmersing yourself in the traditional culture and rugged landscapes of Tajikistan.\nIndulging in the delicious Central Asian cuisine and interacting with the friendly locals.\nTraveling through Central Asia offers a unique and immersive experience that will leave you with lasting memories and a deeper understanding of the region's rich history and culture. It's a journey that takes you off the beaten path and allows you to discover the hidden treasures of this fascinating part of the world.",
      timestamp: "2023-06-11T01:28:45.743Z",
    },
    {
      id: -11,
      user_id: "RdWDsVGmqGfPGJYKTNdqazx9Ainu",
      content:
        "Exploring Cuba\n\nDuration: 10 Days\nDestinations: Havana, Viñales, Trinidad, and Varadero\n\nCost:\nCuba is a destination where costs can vary depending on your choices and preferences. Accommodation options range from budget-friendly casas particulares (private homestays) to luxurious hotels. Dining can be affordable at local paladares (private restaurants) or more expensive at tourist-oriented establishments. Transportation costs can be minimized by using public buses or shared taxis, while private taxis or rental cars provide more convenience but at a higher cost. Overall, Cuba can be an affordable destination for travelers, especially when considering the unique experiences it offers.\n\nTransport:\nTransportation options in Cuba can vary, but the following are common ways to get around:\n\nDomestic Flights: Domestic flights are available for longer distances, such as between Havana and Santiago de Cuba. However, flights can be limited and relatively more expensive compared to other modes of transportation.\n\nViazul Buses: Viazul is a popular and affordable option for traveling between major cities and tourist destinations in Cuba. The buses are comfortable, air-conditioned, and offer a reliable way to get around.\n\nShared Taxis: Shared taxis, known as \"collectivos,\" are a convenient and cost-effective way to travel shorter distances between cities or towns. They can be found at designated points or arranged through your accommodation.\n\nPrivate Taxis: Private taxis are readily available and offer a more comfortable and flexible mode of transportation. Negotiate prices beforehand and ensure that the driver uses the meter or agrees on a fixed fare.\n\nItinerary:\nDay 1-3: Havana\nBegin your Cuban adventure in the vibrant capital city of Havana. Explore the historic streets of Old Havana, visit iconic landmarks like the Plaza de la Catedral and Plaza de la Revolución, and take a stroll along the Malecón waterfront. Immerse yourself in the lively music scene and experience the classic cars that line the streets. Don't miss the chance to visit the famous El Floridita bar, known for its daiquiris and association with Ernest Hemingway.\n\nDay 4-6: Viñales\nTravel to the picturesque town of Viñales, known for its stunning landscapes and tobacco farms. Take a tour of a tobacco plantation, learn about the process of making cigars, and explore the beautiful Viñales Valley with its lush green hills and unique mogotes (limestone formations). Enjoy hiking, horseback riding, or simply relaxing in this serene countryside setting.\n\nDay 7-8: Trinidad\nHead to the UNESCO World Heritage site of Trinidad, a colonial gem frozen in time. Walk along the cobbled streets lined with colorful houses and visit the Plaza Mayor. Explore the Museo Romántico and climb the tower of the Iglesia y Convento de San Francisco for panoramic views of the city. Relax on the nearby Playa Ancón, known for its pristine sandy beaches.\n\nDay 9-10: Varadero\nConclude your trip in the beach resort town of Varadero. Relax on the beautiful white sandy beaches, take a dip in the crystal-clear waters, and indulge in water sports activities. Enjoy the all-inclusive resorts, vibrant nightlife, and beachside dining. Take a boat tour to explore the nearby coral reefs or visit the ecological reserve of Varahicacos.\n\nSafety:\nCuba is generally a safe destination for travelers, with low levels of violent crime. However, it's important to take standard precautions and be mindful of your belongings. Use authorized taxis, avoid isolated areas at night, and be cautious of scams or overcharging. It's advisable to have travel insurance and stay informed about any travel advisories or safety guidelines issued by your embassy or consulate.\n\nOpinion:\nCuba is a captivating country that offers a unique blend of history, culture, and natural beauty. The people are warm and welcoming, and the vibrant music, colorful architecture, and classic cars add to its charm. The lack of internet connectivity can be both a challenge and a blessing, as it encourages a more immersive experience. Cuba is a place where time seems to stand still, and every corner tells a story. It's a destination that will leave you with lasting memories and a deeper understanding of its rich heritage.\n\nHighlights:\n\nExploring the UNESCO-listed streets of Old Havana and experiencing the lively music scene.\nDiscovering the scenic beauty of the Viñales Valley and learning about tobacco farming.\nImmersing yourself in the colonial atmosphere of Trinidad and relaxing on Playa Ancón.\nEnjoying the pristine beaches and all-inclusive resorts of Varadero.\nTraveling in Cuba offers a unique and enriching experience. From the vibrant capital to the tranquil countryside and idyllic beaches, Cuba's charm lies in its authenticity and the warm hospitality of its people. Prepare to be captivated by the timeless beauty and vibrant culture of this Caribbean gem.",
      timestamp: "2023-02-21T02:43:45.743Z",
    },
    {
      id: -12,
      user_id: "1jdDsVGmqGfPGJYKTNdqazx9Aiir",
      content:
        "Exploring Brazil\n\nDuration: 14 Days\nDestinations: Rio de Janeiro, Salvador, Amazon Rainforest, and Florianopolis\n\nCost:\nTraveling in Brazil can vary in cost depending on your choices and preferences. Accommodation options range from budget hostels to luxury hotels, with prices varying depending on the city and the location of your stay. Dining can be affordable at local restaurants and street food stalls, while higher-end establishments can be more expensive. Transportation costs depend on the mode of transport chosen, with buses and shared taxis being more budget-friendly options compared to private taxis or flights. Overall, Brazil can offer a range of options to suit different budgets.\n\nTransport:\nTransportation options in Brazil can vary depending on the distance and region you are traveling to.\n\nFlights: Domestic flights are available between major cities and can be a time-saving option for covering long distances. Booking in advance and comparing prices can help you find better deals.\n\nBuses: Buses are a popular and cost-effective mode of transport for traveling between cities and towns in Brazil. Several bus companies offer comfortable and reliable services, connecting various destinations within the country.\n\nLocal Transportation: Within cities, public transportation systems such as buses and metros are available. Taxis and ride-sharing services are also widely available, but it's important to choose licensed and reputable providers.\n\nItinerary:\nDay 1-4: Rio de Janeiro\nBegin your Brazilian adventure in Rio de Janeiro, a vibrant city known for its stunning beaches, lively music, and iconic landmarks. Visit the famous Christ the Redeemer statue atop Corcovado Mountain, explore the vibrant neighborhoods of Copacabana and Ipanema, and take a cable car ride up Sugarloaf Mountain for panoramic views of the city. Enjoy the exciting nightlife and experience the energetic rhythms of samba.\n\nDay 5-7: Salvador\nTravel to Salvador, a city rich in Afro-Brazilian culture and history. Explore the colorful Pelourinho neighborhood, a UNESCO World Heritage site, and visit historic churches and vibrant squares. Immerse yourself in the lively music and dance scene of Salvador, particularly the captivating rhythms of capoeira.\n\nDay 8-11: Amazon Rainforest\nEmbark on an adventure into the heart of the Amazon Rainforest. Take a flight to Manaus, the gateway to the Amazon, and arrange a guided tour to explore the biodiversity and natural wonders of this unique ecosystem. Experience canoe rides through winding waterways, encounter diverse wildlife, and learn about indigenous cultures and traditional practices.\n\nDay 12-14: Florianopolis\nConclude your journey in Florianopolis, a beautiful island city known for its stunning beaches and natural landscapes. Enjoy the laid-back atmosphere as you relax on sandy shores or engage in water sports activities such as surfing or paddleboarding. Explore the trails and viewpoints in the surrounding hills for breathtaking vistas of the island. Indulge in fresh seafood and experience the lively nightlife.\n\nSafety:\nWhile Brazil is generally a safe destination, it's important to exercise caution and take necessary precautions. Be aware of your surroundings, avoid displaying valuable items, and take care of your belongings. Stay informed about local safety conditions, follow any guidelines or warnings issued by local authorities, and be mindful of potential petty crimes, especially in crowded areas. It's advisable to have travel insurance and register with your embassy or consulate.\n\nOpinion:\nBrazil is a country that truly captivates the senses. From the vibrant culture and breathtaking landscapes to the warm and welcoming people, it offers a diverse range of experiences. Whether you're exploring the iconic landmarks of Rio de Janeiro, immersing yourself in the rich Afro-Brazilian heritage of Salvador, delving into the vastness of the Amazon Rainforest, or basking in the natural beauty of Florianopolis, Brazil has something for every traveler.\n\nHighlights:\n\nStanding in awe of the Christ the Redeemer statue and enjoying the breathtaking views of Rio de Janeiro.\nImmerse yourself in the captivating Afro-Brazilian culture and architecture of Salvador's Pelourinho.\nEmbarking on a memorable adventure into the Amazon Rainforest and connecting with nature.\nRelaxing on the beautiful beaches and exploring the natural wonders of Florianopolis.\nTraveling through Brazil offers a diverse and captivating experience. It's a country that celebrates its rich cultural heritage, boasts stunning natural landscapes, and invites you to embrace its vibrant energy. Prepare to be enchanted by the rhythm, warmth, and beauty that Brazil has to offer.",
      timestamp: "2023-04-01T04:38:45.743Z",
    },
    {
      id: -13,
      user_id: "RZWDsVGmqGfPGJYhTNdqazx9Aiij",
      content:
        "Exploring Canada\n\nDuration: 14 Days\nDestinations: Vancouver, Banff National Park, Toronto, and Montreal\n\nCost:\nTraveling in Canada can vary in cost depending on your choices and preferences. Accommodation options range from budget hostels to luxury hotels, with prices varying depending on the city and location. Dining costs can vary, but there are options for all budgets, from affordable eateries to upscale restaurants. Transportation costs depend on the mode of transport chosen, with buses and trains being more budget-friendly options compared to flights or rental cars. Overall, Canada offers a range of options to suit different budgets.\n\nTransport:\nTransportation options in Canada are well-developed, providing convenient ways to travel between cities and within each destination.\n\nFlights: Domestic flights are available between major cities, offering efficient and time-saving travel for longer distances. Booking in advance and comparing prices can help you find better deals.\n\nTrains: Canada has a reliable train system, with VIA Rail offering scenic journeys between cities. Train travel allows you to enjoy the country's picturesque landscapes and comfortable amenities.\n\nBuses: Bus services like Greyhound and Megabus connect various cities and towns, providing affordable transportation options. Buses are a popular choice for budget travelers and offer comfortable rides between destinations.\n\nLocal Transportation: Within each city, public transportation options like buses and metros are available. Taxis and ride-sharing services are also readily accessible.\n\nItinerary:\nDay 1-4: Vancouver\nStart your Canadian adventure in Vancouver, a beautiful coastal city surrounded by mountains and stunning scenery. Explore Stanley Park, visit the vibrant neighborhoods of Gastown and Granville Island, and take in panoramic views from the Capilano Suspension Bridge. Enjoy the city's diverse culinary scene and experience the bustling nightlife.\n\nDay 5-7: Banff National Park\nTravel to Banff National Park in the Canadian Rockies, a paradise for outdoor enthusiasts. Discover the awe-inspiring beauty of Lake Louise and Moraine Lake, hike to breathtaking viewpoints, and soak in natural hot springs. Take a scenic drive along the Icefields Parkway and witness glaciers and dramatic mountain vistas.\n\nDay 8-10: Toronto\nHead east to Canada's largest city, Toronto. Explore the iconic CN Tower, wander through the vibrant neighborhoods of Kensington Market and Distillery District, and visit the Royal Ontario Museum. Enjoy a boat tour to the Toronto Islands for a peaceful escape from the bustling city.\n\nDay 11-14: Montreal\nConclude your trip in Montreal, a city known for its rich history and European charm. Explore the historic district of Old Montreal, visit the magnificent Notre-Dame Basilica, and stroll along the lively streets of the Plateau-Mont-Royal neighborhood. Indulge in the city's vibrant food scene, including iconic dishes like poutine and bagels.\n\nSafety:\nCanada is generally a safe destination for travelers. However, it's important to exercise standard precautions and be mindful of your surroundings. Keep your belongings secure, follow local laws and regulations, and be cautious in crowded areas. It's advisable to have travel insurance and stay informed about any safety advisories or guidelines issued by local authorities.\n\nOpinion:\nTraveling through Canada is an incredible experience that offers a diverse range of natural beauty, cultural richness, and warm hospitality. From the stunning landscapes of Banff National Park to the vibrant cities of Vancouver, Toronto, and Montreal, Canada has something for every traveler. The country's vastness and diversity provide endless opportunities for exploration, adventure, and discovery.\n\nHighlights:\n\nExploring the breathtaking beauty of Banff National Park, with its turquoise lakes and majestic mountains.\nExperiencing the vibrant multicultural atmosphere of Vancouver and enjoying its stunning coastal views.\nImmersing yourself in the cosmopolitan energy of Toronto, with its iconic landmarks and diverse neighborhoods.\nDiscovering the European charm of Montreal, known for its historic architecture and thriving arts scene.\nTraveling through Canada offers a remarkable journey through diverse landscapes, rich history, and vibrant cities. The country's natural beauty, cultural diversity, and warm hospitality make it a destination that will leave you with unforgettable memories and a desire to return. Prepare to be captivated by the grandeur and allure of the Great White North.",
      timestamp: "2023-06-12T06:23:45.743Z",
    },
    {
      id: -14,
      user_id: "RZWDsVGmqGfPGJYhTNdqazx9Aiij",
      content:
        "Exploring Russia\n\nDuration: 14 Days\nDestinations: Moscow, St. Petersburg, Kazan, and the Golden Ring cities\n\nCost:\nTraveling in Russia can vary in cost depending on your choices and preferences. Accommodation options range from budget hostels to luxury hotels, with prices varying depending on the city and location. Dining costs can also vary, with affordable local eateries and higher-end restaurants available. Transportation costs depend on the mode of transport chosen, with trains being a popular and cost-effective option for traveling between cities. Overall, Russia offers a range of options to suit different budgets.\n\nTransport:\nTransportation options in Russia are well-developed, providing convenient ways to travel between cities and within each destination.\n\nFlights: Domestic flights are available between major cities, providing a quicker option for longer distances. Booking in advance and comparing prices can help you find better deals.\n\nTrains: Trains are a popular and efficient mode of transport in Russia. The extensive rail network connects major cities, offering comfortable overnight options with sleeper cabins. Train travel allows you to witness the vast landscapes and enjoy the local atmosphere.\n\nMetro: Moscow and St. Petersburg have efficient metro systems that are convenient for getting around within the cities. The metro stations themselves are architectural gems worth exploring.\n\nBuses and Taxis: Buses and taxis are available for local transportation within cities. It's advisable to use reputable taxi services and negotiate the fare beforehand.\n\nItinerary:\nDay 1-4: Moscow\nStart your Russian journey in Moscow, the capital city. Explore the iconic Red Square, visit the magnificent St. Basil's Cathedral, and marvel at the grandeur of the Kremlin. Take a stroll along Arbat Street, experience the stunning Moscow Metro, and visit world-class museums like the Tretyakov Gallery. Don't miss the chance to enjoy a performance at the Bolshoi Theatre.\n\nDay 5-8: St. Petersburg\nTravel to St. Petersburg, often referred to as the \"Venice of the North.\" Discover the grandeur of the Hermitage Museum, visit the Peter and Paul Fortress, and explore the beautiful grounds of Catherine Palace and Peterhof Palace. Take a boat cruise along the city's canals, admire the stunning Church of the Savior on Spilled Blood, and immerse yourself in the city's cultural scene.\n\nDay 9-10: Kazan\nHead to Kazan, the capital of Tatarstan, where East meets West. Explore the UNESCO World Heritage-listed Kazan Kremlin, visit the impressive Kul Sharif Mosque, and stroll along the lively Bauman Street. Experience the unique blend of Tatar and Russian cultures and indulge in local Tatar cuisine.\n\nDay 11-14: Golden Ring Cities\nEmbark on a journey through the Golden Ring, a collection of historic cities northeast of Moscow. Visit Vladimir, Suzdal, and Yaroslavl, among others, and explore their ancient churches, monasteries, and fortresses. Experience the rich history and unique architecture that these cities offer.\n\nSafety:\nRussia is generally a safe destination for travelers. However, it's important to exercise standard safety precautions and be mindful of your surroundings. Keep your belongings secure, be cautious in crowded areas, and follow local laws and regulations. It's advisable to have travel insurance and stay informed about any safety advisories or guidelines issued by local authorities.\n\nOpinion:\nTraveling through Russia is an incredible experience that offers a unique blend of history, culture, and architectural beauty. The country's vastness and diverse landscapes, from the grandeur of Moscow and St. Petersburg to the cultural richness of Kazan and the charming Golden Ring cities, make it a captivating destination. The warmth and hospitality of the Russian people, combined with the rich cultural heritage and stunning landmarks, create a memorable journey.\n\nHighlights:\n\nMarveling at the grandeur of the Red Square and the Kremlin in Moscow.\nAdmiring the art and treasures of the Hermitage Museum in St. Petersburg.\nExploring the unique blend of cultures in Kazan and visiting the Kazan Kremlin.\nDiscovering the ancient churches and fortresses of the Golden Ring cities.\nTraveling through Russia allows you to experience the rich history, cultural diversity, and architectural marvels of this vast country. Each destination offers a distinct character and an opportunity to delve into the country's fascinating past and present. Prepare to be captivated by the splendor and intrigue that Russia has to offer.",
      timestamp: "2022-12-12T02:11:45.743Z",
    },
    {
      id: -15,
      user_id: "RZWDsVGmqGfPGJYhTNdqazx9Aiij",
      content:
        "Exploring Egypt\n\nDuration: 10 Days\nDestinations: Cairo, Luxor, Aswan, and Hurghada\n\nCost:\nTraveling in Egypt can vary in cost depending on your choices and preferences. Accommodation options range from budget-friendly hostels to luxurious hotels, with prices varying depending on the location and amenities. Dining costs can also vary, with affordable local eateries and higher-end restaurants available. Transportation costs depend on the mode of transport chosen, with buses and trains being more budget-friendly options compared to domestic flights or private transfers. Overall, Egypt offers a range of options to suit different budgets.\n\nTransport:\nTransportation options in Egypt are diverse, providing convenient ways to travel between cities and within each destination.\n\nFlights: Domestic flights are available between major cities, such as Cairo, Luxor, and Aswan, for quicker travel. Booking in advance and comparing prices can help you find better deals.\n\nTrains: Trains connect various cities in Egypt, including the popular route between Cairo and Luxor. Train travel offers a comfortable and scenic way to explore the country.\n\nBuses: Buses are a cost-effective option for traveling between cities and towns. Companies like GoBus and Upper Egypt Bus Company provide reliable services. Buses may take longer than flights or trains but offer a chance to experience the local scenery.\n\nLocal Transportation: Within cities, taxis and ride-sharing services are readily available. It's advisable to negotiate fares or ensure that the driver uses the meter.\n\nItinerary:\nDay 1-3: Cairo\nStart your Egyptian adventure in Cairo, the bustling capital city. Explore the iconic Giza Plateau, home to the Great Pyramids and the Sphinx. Visit the Egyptian Museum to discover ancient artifacts, including the treasures of Tutankhamun. Take a stroll through the historic streets of Islamic Cairo and explore the vibrant Khan El Khalili bazaar. Don't miss the chance to experience a mesmerizing sound and light show at the Pyramids.\n\nDay 4-6: Luxor\nTravel to Luxor, often referred to as the world's greatest open-air museum. Discover the grandeur of the Karnak and Luxor Temples, visit the Valley of the Kings to explore the ancient tombs of pharaohs, and admire the breathtaking Temple of Hatshepsut. Take a relaxing felucca boat ride on the Nile River and witness the stunning sunset over the West Bank.\n\nDay 7-8: Aswan\nHead to Aswan, a city known for its beautiful Nile scenery and historic sites. Visit the impressive Abu Simbel temples, take a boat ride to Philae Temple on Agilkia Island, and explore the colorful Nubian villages. Enjoy a peaceful felucca sailboat trip around Elephantine Island and visit the Aswan High Dam.\n\nDay 9-10: Hurghada\nConclude your journey in Hurghada, a popular beach resort town along the Red Sea coast. Relax on the pristine sandy beaches, indulge in snorkeling or diving to explore the vibrant underwater world, or take a boat trip to Giftun Island for a day of sun and relaxation. Enjoy the vibrant nightlife and savor delicious seafood.\n\nSafety:\nEgypt is generally a safe destination for travelers. However, it's important to exercise caution and follow any safety guidelines or advisories issued by local authorities. Be mindful of your belongings, avoid isolated areas at night, and take care when crossing busy streets. It's advisable to have travel insurance and stay informed about any specific safety concerns or travel advisories for certain regions.\n\nOpinion:\nTraveling through Egypt is an awe-inspiring experience that offers a glimpse into the ancient world and a vibrant culture. The country's rich history, iconic landmarks, and warm hospitality make it a truly captivating destination. From the magnificent pyramids of Giza to the enchanting temples of Luxor and the tranquil beauty of the Nile, Egypt is a treasure trove of wonders.\n\nHighlights:\n\nGazing in awe at the Great Pyramids of Giza and the Sphinx.\nExploring the grand temples and tombs of Luxor's West Bank and the Valley of the Kings.\nCruising along the Nile River and witnessing the beauty of the riverbanks.\nIndulging in the relaxation and underwater adventures of Hurghada's Red Sea coast.\nTraveling through Egypt allows you to immerse yourself in the mysteries of the ancient world and experience the country's vibrant culture. The hospitality of the Egyptian people, the breathtaking archaeological sites, and the natural beauty of the Nile and the Red Sea make it a journey of a lifetime. Prepare to be captivated by the allure and wonders of Egypt.",
      timestamp: "2022-12-28T03:47:45.743Z",
    },
  ];
}

function getFollows() {
  return [
    {
      user_id_ed: "DZWDsVGmqGfPGJYKTNdqazx9AiU2",
      user_id_er: "RdWDsVGmqGfPGJYKTNdqazx9Ainu",
    },
    {
      user_id_ed: "DZWDsVGmqGfPGJYKTNdqazx9AiU2",
      user_id_er: "RZWDsVGmqGfPGJYKTNdqazx9Aiiu",
    },
    {
      user_id_ed: "RdWDsVGmqGfPGJYKTNdqazx9Ainu",
      user_id_er: "MZWDsVGmqGfPGJYKTNdqazx9AiU5",
    },
    {
      user_id_ed: "RdWDsVGmqGfPGJYKTNdqazx9Ainu",
      user_id_er: "DZWDsVGmqGfPGJYKTNdqazx9AiU2",
    },
    {
      user_id_ed: "RdWDsVGmqGfPGJYKTNdqazx9Ainu",
      user_id_er: "1jdDsVGmqGfPGJYKTNdqazx9Aiir",
    },
    {
      user_id_ed: "DZWDsVGmqGfPGJYKTNdqazx9AiU2",
      user_id_er: "1jdDsVGmqGfPGJYKTNdqazx9Aiir",
    },
    {
      user_id_ed: "1jdDsVGmqGfPGJYKTNdqazx9Aiir",
      user_id_er: "DZWDsVGmqGfPGJYKTNdqazx9AiU2",
    },
    {
      user_id_ed: "DZWDsVGmqGfPGJYKTNdqazx9AiU2",
      user_id_er: "gsWDsVGmqGfPGJYKTNdqazx9Aii3",
    },
    {
      user_id_ed: "gsWDsVGmqGfPGJYKTNdqazx9Aii3",
      user_id_er: "DZWDsVGmqGfPGJYKTNdqazx9AiU2",
    },
    {
      user_id_ed: "RdWDsVGmqGfPGJYKTNdqazx9Ainu",
      user_id_er: "gsWDsVGmqGfPGJYKTNdqazx9Aii3",
    },
    {
      user_id_ed: "DZWDsVGmqGfPGJYKTNdqazx9AiU2",
      user_id_er: "RZWDsVGmqGfPGJYKTNdq1zx9Aiig",
    },
    {
      user_id_ed: "RdWDsVGmqGfPGJYKTNdqazx9Ainu",
      user_id_er: "RZWDsVGmqGfPGJYKTNdq1zx9Aiig",
    },
    {
      user_id_ed: "DZWDsVGmqGfPGJYKTNdqazx9AiU2",
      user_id_er: "RZWDsVGmqGfPGJYhTNdqazx9Aiij",
    },
    {
      user_id_ed: "RdWDsVGmqGfPGJYKTNdqazx9Ainu",
      user_id_er: "RZWDsVGmqGfPGJYhTNdqazx9Aiij",
    },
    {
      user_id_ed: "DZWDsVGmqGfPGJYKTNdqazx9AiU2",
      user_id_er: "RZWDsVGmqgfPGJYKTNdqazx9Aiih",
    },
    {
      user_id_ed: "RdWDsVGmqGfPGJYKTNdqazx9Ainu",
      user_id_er: "RZWDsVGmqgfPGJYKTNdqazx9Aiih",
    },
    {
      user_id_ed: "RZWDsVGmqgfPGJYKTNdqazx9Aiih",
      user_id_er: "RdWDsVGmqGfPGJYKTNdqazx9Ainu",
    },
    {
      user_id_ed: "RZWDsVGmqGfPGJYKTNdq1zx9Aiig",
      user_id_er: "RdWDsVGmqGfPGJYKTNdqazx9Ainu",
    },
    {
      user_id_ed: "RZWDsVGmqGfPGJYKTNdq1zx9Aiig",
      user_id_er: "RZWDsVGmqgfPGJYKTNdqazx9Aiih",
    },

    {
      user_id_ed: "RZWDsVGmqGfPGJYhTNdqazx9Aiij",
      user_id_er: "DZWDsVGmqGfPGJYKTNdqazx9AiU2",
    },
    {
      user_id_ed: "RZWDsVGmqGfPGJYhTNdqazx9Aiij",
      user_id_er: "RZWDsVGmqgfPGJYKTNdqazx9Aiih",
    },
    {
      user_id_ed: "RZWDsVGmqGfPGJYhTNdqazx9Aiij",
      user_id_er: "MZWDsVGmqGfPGJYKTNdqazx9AiU5",
    },
    {
      user_id_ed: "RZWDsVGmqGfPGJYhTNdqazx9Aiij",
      user_id_er: "RdWDsVGmqGfPGJYKTNdqazx9Ainu",
    },
    {
      user_id_ed: "RZWDsVGmqGfPGJYhTNdqazx9Aiij",
      user_id_er: "RZWDsVGmqGfPGJYKTNdqazx9Aiiu",
    },
    {
      user_id_ed: "RZWDsVGmqGfPGJYhTNdqazx9Aiij",
      user_id_er: "RZWDsVGmqGfPGJYKTNdq1zx9Aiig",
    },
    {
      user_id_ed: "RZWDsVGmqGfPGJYhTNdqazx9Aiij",
      user_id_er: "gsWDsVGmqGfPGJYKTNdqazx9Aii3",
    },
    {
      user_id_ed: "RZWDsVGmqGfPGJYhTNdqazx9Aiij",
      user_id_er: "1jdDsVGmqGfPGJYKTNdqazx9Aiir",
    },
    {
      user_id_ed: "RZWDsVGmqGfPGJYhTNdqazx9Aiij",
      user_id_er: "hjd123GmqGfPGJYKTNdqazx9Aiir",
    },
    {
      user_id_ed: "RZWDsVGmqGfPGJYhTNdqazx9Aiij",
      user_id_er: "jdDsVGmqGfPGJYKTNdqiazx9Aii1",
    },
    {
      user_id_ed: "RZWDsVGmqGfPGJYhTNdqazx9Aiij",
      user_id_er: "tjdDsddGmqGfPGJYKTNdqazx9Aiia",
    },
    {
      user_id_ed: "RZWDsVGmqGfPGJYhTNdqazx9Aiij",
      user_id_er: "bpeksVGmqGfPGJYKTNdqazx9Aii4",
    },
  ];
}

function getFavorites() {
  return [
    {
      user_id: "RZWDsVGmqGfPGJYKTNdqazx9Aiiu",
      post_id: -1,
    },
    {
      user_id: "MZWDsVGmqGfPGJYKTNdqazx9AiU5",
      post_id: -1,
    },
    {
      user_id: "DZWDsVGmqGfPGJYKTNdqazx9AiU2",
      post_id: -3,
    },
    {
      user_id: "DZWDsVGmqGfPGJYKTNdqazx9AiU2",
      post_id: -4,
    },
    {
      user_id: "DZWDsVGmqGfPGJYKTNdqazx9AiU2",
      post_id: -5,
    },
    {
      user_id: "DZWDsVGmqGfPGJYKTNdqazx9AiU2",
      post_id: -10,
    },
    {
      user_id: "MZWDsVGmqGfPGJYKTNdqazx9AiU5",
      post_id: -10,
    },
    {
      user_id: "RZWDsVGmqGfPGJYKTNdqazx9Aiiu",
      post_id: -10,
    },
    {
      user_id: "RdWDsVGmqGfPGJYKTNdqazx9Ainu",
      post_id: -10,
    },
    {
      user_id: "RZWDsVGmqgfPGJYKTNdqazx9Aiih",
      post_id: -10,
    },
    {
      user_id: "RZWDsVGmqGfPGJYhTNdqazx9Aiij",
      post_id: -10,
    },
    {
      user_id: "RZWDsVGmqGfPGJYKTNdq1zx9Aiig",
      post_id: -10,
    },
    {
      user_id: "gsWDsVGmqGfPGJYKTNdqazx9Aii3",
      post_id: -10,
    },
    {
      user_id: "1jdDsVGmqGfPGJYKTNdqazx9Aiir",
      post_id: -10,
    },
  ];
}

function getComments() {
  return [
    {
      user_id: "DZWDsVGmqGfPGJYKTNdqazx9AiU2",
      post_id: -13,
      content: "Awesome experience!",
    },
  ];
}
