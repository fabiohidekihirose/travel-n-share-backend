import { db } from "../src/utils/db.server";

async function seed() {
  await db.favorite.deleteMany({});
  await db.follow.deleteMany({});
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
      image: "/images/profile-james.png",
    },
    {
      id: "MZWDsVGmqGfPGJYKTNdqazx9AiU5",
      full_name: "Maria Jones",
      username: "mariajones",
      email: "maria_jones@gmail.com",
      image: "/images/profile-maria.png",
    },
    {
      id: "RZWDsVGmqGfPGJYKTNdqazx9Aiiu",
      full_name: "Robert Smith",
      username: "robertsmith",
      email: "robert_smith123@gmail.com",
      image: "/images/profile-robert.png",
    },
    {
      id: "RdWDsVGmqGfPGJYKTNdqazx9Ainu",
      full_name: "Li Wei",
      username: "liwei",
      email: "li_wei1980@gmail.com",
      image: "/images/profile-li.png",
    },
    {
      id: "RZWDsVGmqgfPGJYKTNdqazx9Aiih",
      full_name: "Alexander Johnson",
      username: "alex_johnson123",
      email: "alex_johnson123@gmail.com",
      image: "/images/profile-alex.png",
    },
    {
      id: "RZWDsVGmqGfPGJYhTNdqazx9Aiij",
      full_name: "Olivia Carter",
      username: "oli_carter",
      email: "carter_oli@gmail.com",
      image: "/images/profile-olivia.png",
    },
    {
      id: "RZWDsVGmqGfPGJYKTNdq1zx9Aiig",
      full_name: "Akira Yamamoto",
      username: "akira",
      email: "akira_123@gmail.com",
      image: "/images/profile-akira.png",
    },
    {
      id: "gsWDsVGmqGfPGJYKTNdqazx9Aii3",
      full_name: "Ava Wilson",
      username: "ava_wilson",
      email: "ava_123@gmail.com",
      image: "/images/profile-ava.png",
    },
    {
      id: "1jdDsVGmqGfPGJYKTNdqazx9Aiir",
      full_name: "James Martinez",
      username: "martinez_travel",
      email: "martinez_travel123@gmail.com",
      image: "/images/profile-martinez.png",
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
    },
    {
      id: -2,
      user_id: "DZWDsVGmqGfPGJYKTNdqazx9AiU2",
      content:
        "7 Days in Japan\n\nDay 1: Arrival in Tokyo\nAs I landed at Tokyo's Haneda Airport, I was filled with excitement and anticipation for my 7-day adventure in Japan. After a smooth transfer to my hotel in Tokyo, I wasted no time and headed straight to the iconic Shibuya neighborhood. Witnessing the famous Shibuya Crossing was awe-inspiring, and the energy of the bustling streets was contagious. Later, I found peace at the serene Meiji Shrine, surrounded by a lush forest. The day ended with a delightful dinner at a local eatery, where I sampled some delicious Japanese cuisine.\n\nDay 2: Tokyo Exploration\nEager to explore more of Tokyo's wonders, I started the day by visiting the historic district of Asakusa. Senso-ji Temple's grandeur left me speechless, and I loved exploring the colorful Nakamise Shopping Street. In the afternoon, Odaiba's futuristic charm captivated me as I visited the digital art wonderland, TeamLab Borderless. The Gundam Statue was also a highlight for an anime enthusiast like me. As evening approached, I soaked in the vibrant atmosphere of Shinjuku and tried some local delicacies.\n\nDay 3: Journey to Kyoto\nToday marked a new adventure as I boarded the bullet train from Tokyo to Kyoto. The fast-paced ride was smooth and comfortable, and I quickly arrived in Kyoto, a city steeped in history and culture. My first stop was the mesmerizing Kinkaku-ji, the Golden Pavilion, reflecting beautifully on the surrounding pond. In Arashiyama, the enchanting bamboo grove felt like stepping into a fairy tale. At Fushimi Inari Taisha, I marveled at the endless rows of vermillion torii gates. The day ended with a fascinating stroll through Gion, where I hoped to spot geishas.\n\nDay 4: Kyoto Delights\nToday's exploration took me deeper into Kyoto's rich heritage. Kiyomizu-dera's wooden terrace offered breathtaking views of the city, and the temple's spiritual atmosphere was rejuvenating. Nijo Castle's majestic architecture and elegant gardens were a true testament to Kyoto's historical importance. In the evening, I indulged in a traditional kaiseki meal, savoring every delicate and flavorful course.\n\nDay 5: Osaka Excursion\nWith Osaka just a short train ride away, I decided to take a day trip to this lively city. Osaka Castle's grandeur was impressive, and I enjoyed strolling through the picturesque castle grounds. Dotonbori's vibrant streets were a sensory overload, with mouthwatering aromas and dazzling neon lights everywhere. Trying takoyaki and okonomiyaki from street vendors was a must. The energetic atmosphere of Namba district kept me entertained until it was time to head back to Kyoto.\n\nDay 6: Hiroshima Day Trip\nToday's itinerary took me to Hiroshima, a city with a poignant history. Visiting the Peace Memorial Park was a somber experience, and the Peace Memorial Museum provided a deeply moving insight into the city's resilience. Taking a ferry to Miyajima Island, I couldn't help but be amazed by the picturesque beauty of the floating torii gate at Itsukushima Shrine. The island's friendly deer and scenic landscapes made it a memorable day trip.\n\nDay 7: Farewell and Departure\nAs my final day in Japan arrived, I felt a mix of emotions. Saying goodbye to this incredible country was bittersweet. With fond memories and unforgettable experiences, I boarded my flight home, grateful for the enriching journey through Japan's captivating culture, history, and natural beauty. Until we meet again, Japan!\n",
    },
    {
      id: -3,
      user_id: "MZWDsVGmqGfPGJYKTNdqazx9AiU5",
      content:
        "Itinerary:\nDay 1-3: Budapest, Hungary\nDay 4-6: Prague, Czech Republic\nDay 7-8: Krakow, Poland\nDay 9-10: Bucharest, Romania\n\nSafety:\nOverall, Eastern Europe is a safe destination for travelers. However, it's always wise to exercise common precautions such as keeping an eye on your belongings, avoiding isolated areas at night, and staying aware of your surroundings. Each city has its own safety considerations, so it's advisable to research specific safety tips for each destination.\n\nCost:\nEastern Europe is generally more affordable than Western European countries. Hungary and Poland tend to be more budget-friendly, while the Czech Republic and Romania offer a mix of budget and mid-range options. Accommodation, food, and transportation are reasonably priced, allowing travelers to make the most of their budget.\n\nTransportation:\nEastern Europe has a well-developed transportation network, making it easy to travel between cities. Train travel is convenient and efficient, with frequent connections. Buses are also popular and offer a cost-effective option. In major cities, public transportation systems like trams and metros are reliable and inexpensive. Taxis and ride-sharing services are available but can be more expensive.\n\nHighlights:\n\nBudapest, Hungary: Explore the magnificent Hungarian Parliament Building, visit St. Stephen's Basilica, relax in the thermal baths, and take a boat ride along the Danube River.\n\nPrague, Czech Republic: Marvel at the Prague Castle and St. Vitus Cathedral, stroll through the charming streets of Old Town, cross the iconic Charles Bridge, and enjoy panoramic views from Petřín Hill.\n\nKrakow, Poland: Visit the historic Wawel Castle, explore the beautiful Main Market Square and St. Mary's Basilica, take a poignant trip to Auschwitz-Birkenau Memorial and Museum, and enjoy the vibrant atmosphere of Kazimierz, the Jewish Quarter.\n\nBucharest, Romania: Discover the Palace of the Parliament, explore the charming Old Town, visit the Village Museum, and take a day trip to the stunning Bran Castle, also known as Dracula's Castle.\n\nEach of these cities offers its own unique charm, history, and cultural experiences, making Eastern Europe an enchanting region to explore.",
    },
    {
      id: -4,
      user_id: "gsWDsVGmqGfPGJYKTNdqazx9Aii3",
      content:
        "Day 1-5: Paris, France\nBegin your journey in the romantic city of Paris. Explore iconic landmarks such as the Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral. Take leisurely strolls along the Seine River and indulge in delectable pastries at local patisseries. Don't miss the chance to visit the Palace of Versailles, a masterpiece of French opulence.\n\nDay 6-10: Rome, Italy\nNext, immerse yourself in the ancient city of Rome. Marvel at the Colosseum, Roman Forum, and Pantheon, witnessing the grandeur of the Roman Empire. Visit the Vatican City to explore St. Peter's Basilica and gaze upon Michelangelo's breathtaking Sistine Chapel ceiling. Take leisurely walks through charming neighborhoods like Trastevere and sample authentic Italian cuisine.\n\nDay 11-15: Tokyo, Japan\nEmbark on a journey to the bustling metropolis of Tokyo. Experience the vibrant mix of traditional and modern culture as you explore the tranquil gardens of the Imperial Palace and the iconic Senso-ji Temple in Asakusa. Visit the futuristic neighborhoods of Shibuya and Shinjuku, where bustling streets, neon lights, and high-tech innovations create a captivating atmosphere.\n\nDay 16-20: Rio de Janeiro, Brazil\nHead to Rio de Janeiro, known for its stunning beaches, vibrant carnival, and breathtaking landscapes. Soak up the sun on Copacabana and Ipanema beaches, visit the iconic Christ the Redeemer statue atop Corcovado Mountain, and explore the colorful neighborhood of Santa Teresa. Don't miss the opportunity to samba dance and experience the electrifying energy of Rio's nightlife.\n\nDay 21-25: Cape Town, South Africa\nFly to Cape Town, a city nestled between the Atlantic Ocean and the iconic Table Mountain. Take a cable car ride to the summit of Table Mountain for panoramic views of the city and coastline. Explore the vibrant Victoria & Alfred Waterfront, visit the historical Robben Island, and indulge in wine tastings in the nearby Cape Winelands.\n\nDay 26-30: New York City, USA\nConclude your journey in the city that never sleeps, New York City. Experience the grandeur of Times Square, explore world-class museums like the Metropolitan Museum of Art, and take a stroll through Central Park. Enjoy stunning views from the Empire State Building, walk across the Brooklyn Bridge, and immerse yourself in the diverse culinary scene.\n\nThis travel itinerary encompasses some of the best highlights in the world, offering a blend of history, culture, natural beauty, and vibrant city life. Each destination has its own unique charm and experiences to offer, creating memories that will last a lifetime.",
    },
    {
      id: -5,
      user_id: "RZWDsVGmqGfPGJYKTNdq1zx9Aiig",
      content:
        "Duration: 12 Days\nDestinations: Dubai, United Arab Emirates and Istanbul, Turkey\n\nItinerary:\nDay 1-5: Dubai, United Arab Emirates\nDay 6-12: Istanbul, Turkey\n\nSafety:\nThe Middle East, like any other destination, requires travelers to be mindful of their safety. Both Dubai and Istanbul are generally safe for tourists. However, it's important to stay aware of your surroundings, follow local laws and customs, and take common precautions such as securing your belongings and avoiding crowded areas at certain times. Stay updated on travel advisories and guidelines from your embassy or consulate.\n\nCost:\nThe cost of travel in the Middle East can vary depending on the level of luxury and the type of experiences you choose. Dubai is known for its luxurious offerings and can be relatively expensive, especially in terms of accommodation and dining. Istanbul, on the other hand, offers a wider range of budget-friendly options for accommodation, food, and transportation, making it more affordable for travelers.\n\nTransportation:\nDubai has a modern and efficient public transportation system, including the Dubai Metro, buses, and taxis, which makes it easy to get around the city. Istanbul also has an extensive public transportation network, including trams, buses, and ferries. Taxis and ride-sharing services are also widely available in both cities. It's advisable to use licensed taxis or reliable transportation apps to ensure a safe and fair journey.\n\nHighlights:\nDubai, United Arab Emirates:\n\nVisit the iconic Burj Khalifa, the world's tallest building, and enjoy panoramic views from the observation deck.\nExplore the historic neighborhood of Al Fahidi and wander through the narrow streets of the Al Bastakiya district.\nExperience the vibrant atmosphere of traditional souks, such as the Gold Souk and Spice Souk.\nRelax on Jumeirah Beach and enjoy the luxury of Palm Jumeirah, an artificial island.\nExplore the Dubai Mall, home to numerous shops, entertainment options, and the Dubai Aquarium and Underwater Zoo.\nIstanbul, Turkey:\n\nDiscover the Hagia Sophia, a UNESCO World Heritage Site, and admire its stunning architecture.\nExplore the Blue Mosque, known for its intricate blue tile work and six minarets.\nWander through the historic neighborhood of Sultanahmet and visit the Topkapi Palace, the former residence of Ottoman sultans.\nTake a boat cruise along the Bosphorus Strait, where Europe and Asia meet.\nImmerse yourself in the vibrant Grand Bazaar and Spice Bazaar, known for their unique shopping experiences.\nBoth Dubai and Istanbul offer a blend of rich history, stunning architecture, vibrant markets, and unique cultural experiences. By exploring these two captivating cities, you'll get a taste of the Middle East's diverse offerings and create unforgettable memories.",
    },
  ];
}

function getFollows() {
  return [
    {
      user_id_ed: "DZWDsVGmqGfPGJYKTNdqazx9AiU2",
      user_id_er: "RZWDsVGmqGfPGJYKTNdqazx9Aiiu",
    },
    {
      user_id_ed: "DZWDsVGmqGfPGJYKTNdqazx9AiU2",
      user_id_er: "MZWDsVGmqGfPGJYKTNdqazx9AiU5",
    },
    {
      user_id_ed: "MZWDsVGmqGfPGJYKTNdqazx9AiU5",
      user_id_er: "DZWDsVGmqGfPGJYKTNdqazx9AiU2",
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
  ];
}
