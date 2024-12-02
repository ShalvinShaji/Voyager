'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

// This would typically come from your database
const dummyMemories = [
  {
    id: 1,
    title: "Sunset in Santorini",
    date: "2023-08-15",
    location: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Watching the sun dip below the horizon, painting the white buildings in golden hues. The perfect blend of architecture and nature created an unforgettable scene. The warm Mediterranean breeze carried the scent of the sea, while the distant sound of church bells added to the magical atmosphere. Local tavernas began to light their evening lanterns, and the narrow cobblestone streets came alive with a different kind of energy.",
    additionalImages: [
      "https://images.unsplash.com/photo-1558980394-0c3e9f4f1f9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Watched sunset from Oia",
      "Explored traditional villages",
      "Enjoyed local Greek cuisine",
      "Visited black sand beaches"
    ]
  },
  {
    id: 2,
    title: "Mountain Trek in Switzerland",
    date: "2023-07-22",
    location: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Hiking through the majestic Swiss Alps, surrounded by pristine nature and breathtaking views of snow-capped peaks. The crisp mountain air filled our lungs as we ascended through meadows dotted with wildflowers. The sound of cowbells echoed through the valleys, and every turn revealed a new stunning vista. We stopped at a traditional Alpine hut for lunch, enjoying local cheese and watching marmots play among the rocks.",
    additionalImages: [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1451186859696-371d9477be93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Reached summit of Mount Pilatus",
      "Stayed in mountain cabin",
      "Saw wild marmots",
      "Experienced Alpine sunset"
    ]
  },
  {
    id: 3,
    title: "Tokyo Nights",
    date: "2023-06-10",
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Exploring the vibrant streets of Tokyo, immersed in neon lights and city energy. A perfect blend of tradition and modernity. The city never sleeps, with its 24-hour restaurants, karaoke bars, and convenience stores. We wandered through the narrow alleys of Golden Gai, discovering tiny bars with room for only a handful of patrons. The contrast between ancient temples and futuristic technology created a unique atmosphere that could only be found in Tokyo.",
    additionalImages: [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Explored Shibuya Crossing",
      "Visited Senso-ji Temple",
      "Experienced Robot Restaurant",
      "Tried authentic sushi"
    ]
  },
  {
    id: 4,
    title: "Desert Safari Adventure",
    date: "2023-05-18",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1547234935-80c7145ec969?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Experiencing the magical sunset over endless sand dunes, followed by a night under the stars in the Arabian desert. We started with an exhilarating dune bashing session, our skilled driver navigating the golden waves of sand. As the sun began to set, the desert transformed into a canvas of orange and purple hues. The evening continued at a traditional Bedouin camp with falconry displays, camel rides, and a feast under the stars.",
    additionalImages: [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Dune bashing adventure",
      "Camel riding",
      "Traditional Bedouin dinner",
      "Stargazing in the desert"
    ]
  },
  {
    id: 5,
    title: "Venice Canals",
    date: "2023-04-25",
    location: "Venice, Italy",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Gliding through the historic canals of Venice, surrounded by centuries-old architecture and romantic atmosphere. Each palazzo tells a story of Venice's golden age, their reflections dancing on the canal waters. We explored hidden courtyards, crossed countless bridges, and discovered quiet campos away from the tourist crowds. The morning light created magical reflections on the water, while evening brought the soft glow of lanterns and the sound of distant music.",
    additionalImages: [
      "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Gondola ride at sunset",
      "St. Mark's Basilica tour",
      "Murano glass workshop",
      "Local cicchetti tasting"
    ]
  },
  {
    id: 6,
    title: "Machu Picchu Dawn",
    date: "2023-03-12",
    location: "Cusco, Peru",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Witnessing the first light of dawn illuminate the ancient Incan citadel, a truly mystical experience. The early morning mist added an ethereal quality to the stone structures, and the surrounding mountains provided a dramatic backdrop. We explored the terraces and temples, marveling at the engineering prowess of the Inca civilization. The sense of history and spirituality was palpable, making it a once-in-a-lifetime experience.",
    additionalImages: [
      "https://images.unsplash.com/photo-1558980394-0c3e9f4f1f9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Hiked the Inca Trail",
      "Visited the Sun Gate",
      "Explored the Sacred Valley",
      "Learned about Incan culture"
    ]
  },
  {
    id: 7,
    title: "Northern Lights",
    date: "2023-02-28",
    location: "Tromsø, Norway",
    image: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Dancing lights in the Arctic sky, nature's most spectacular light show over the Norwegian wilderness. We ventured out into the frozen landscape, wrapped in warm layers, and waited patiently for the aurora to appear. The vibrant greens and purples swirled across the sky, leaving us in awe of the natural beauty. The silence of the Arctic night was only broken by our gasps of wonder and the occasional howl of a distant wolf.",
    additionalImages: [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1451186859696-371d9477be93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Chased the Northern Lights",
      "Experienced Arctic culture",
      "Visited the Ice Domes",
      "Tried traditional Sami cuisine"
    ]
  },
  {
    id: 8,
    title: "Great Barrier Reef",
    date: "2023-01-15",
    location: "Queensland, Australia",
    image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Diving into the world's largest coral reef system, surrounded by vibrant marine life and crystal-clear waters. The underwater world was teeming with colorful fish, intricate coral formations, and the occasional sea turtle gracefully gliding by. We explored different dive sites, each offering a unique glimpse into the diverse ecosystem. The sheer scale and beauty of the reef left us with a profound appreciation for the natural world.",
    additionalImages: [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Snorkeled with sea turtles",
      "Saw vibrant coral gardens",
      "Visited the Reef HQ Aquarium",
      "Learned about marine conservation"
    ]
  },
  {
    id: 9,
    title: "Safari Sunset",
    date: "2022-12-20",
    location: "Serengeti, Tanzania",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Watching African wildlife against the backdrop of a dramatic savanna sunset, nature in its purest form. Our safari guide expertly navigated the rugged terrain, bringing us up close to elephants, lions, and giraffes. As the sun dipped below the horizon, the sky transformed into a canvas of fiery oranges and reds. The sounds of the savanna filled the air, creating an unforgettable sensory experience.",
    additionalImages: [
      "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ],
    highlights: [
      "Saw the Big Five",
      "Experienced a bush dinner",
      "Visited a Maasai village",
      "Witnessed the Great Migration"
    ]
  }
];

export default function MemoryDetail() {
  const params = useParams();
  const memory = dummyMemories.find(m => m.id === Number(params.id));

  if (!memory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Memory not found</h1>
          <Link href="/" className="text-black hover:underline">
            Return home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-black hover:underline flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to memories
          </Link>
        </div>
        
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="relative h-96 w-full">
            <img
              src={memory.image}
              alt={memory.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {memory.title}
            </h1>
            
            <div className="flex items-center text-gray-600 mb-6">
              <span className="mr-4">
                <svg className="w-5 h-5 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {memory.date}
              </span>
              <span>
                <svg className="w-5 h-5 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {memory.location}
              </span>
            </div>
            
            <div className="prose max-w-none mb-8">
              <p className="text-gray-600 text-lg leading-relaxed">
                {memory.description}
              </p>
            </div>

            {memory.highlights && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Highlights</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {memory.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {memory.additionalImages && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">More Photos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {memory.additionalImages.map((image, index) => (
                    <div key={index} className="relative h-64">
                      <img
                        src={image}
                        alt={`Additional photo ${index + 1}`}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
