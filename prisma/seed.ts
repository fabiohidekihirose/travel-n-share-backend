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
          id: favorite.id,
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
      id: -1,
      user_id: "RZWDsVGmqGfPGJYKTNdqazx9Aiiu",
      post_id: -1,
    },
    {
      id: -2,
      user_id: "MZWDsVGmqGfPGJYKTNdqazx9AiU5",
      post_id: -1,
    },
  ];
}
