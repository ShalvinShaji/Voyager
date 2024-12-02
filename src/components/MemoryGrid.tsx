import Link from 'next/link';

interface Memory {
  id: number;
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
}

const dummyMemories: Memory[] = [
  {
    id: 1,
    title: "Sunset in Santorini",
    date: "2023-08-15",
    location: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Watching the sun dip below the horizon, painting the white buildings in golden hues. The perfect blend of architecture and nature created an unforgettable scene."
  },
  {
    id: 2,
    title: "Mountain Trek in Switzerland",
    date: "2023-07-22",
    location: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Hiking through the majestic Swiss Alps, surrounded by pristine nature and breathtaking views of snow-capped peaks."
  },
  {
    id: 3,
    title: "Tokyo Nights",
    date: "2023-06-10",
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Exploring the vibrant streets of Tokyo, immersed in neon lights and city energy. A perfect blend of tradition and modernity."
  },
  {
    id: 4,
    title: "Desert Safari Adventure",
    date: "2023-05-18",
    location: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1547234935-80c7145ec969?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Experiencing the magical sunset over endless sand dunes, followed by a night under the stars in the Arabian desert."
  },
  {
    id: 5,
    title: "Venice Canals",
    date: "2023-04-25",
    location: "Venice, Italy",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Gliding through the historic canals of Venice, surrounded by centuries-old architecture and romantic atmosphere."
  },
  {
    id: 6,
    title: "Machu Picchu Dawn",
    date: "2023-03-12",
    location: "Cusco, Peru",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Witnessing the first light of dawn illuminate the ancient Incan citadel, a truly mystical experience."
  },
  {
    id: 7,
    title: "Northern Lights",
    date: "2023-02-28",
    location: "Tromsø, Norway",
    image: "https://images.unsplash.com/photo-1483347756197-71ef80e95f73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Dancing lights in the Arctic sky, nature's most spectacular light show over the Norwegian wilderness."
  },
  {
    id: 8,
    title: "Great Barrier Reef",
    date: "2023-01-15",
    location: "Queensland, Australia",
    image: "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Diving into the world's largest coral reef system, surrounded by vibrant marine life and crystal-clear waters."
  },
  {
    id: 9,
    title: "Safari Sunset",
    date: "2022-12-20",
    location: "Serengeti, Tanzania",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Watching African wildlife against the backdrop of a dramatic savanna sunset, nature in its purest form."
  }
];

export default function MemoryGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {dummyMemories.map((memory) => (
        <Link href={`/memory/${memory.id}`} key={memory.id}>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer">
            <div className="relative h-64">
              <img
                src={memory.image}
                alt={memory.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{memory.title}</h3>
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <span>{memory.date}</span>
                <span className="mx-2">•</span>
                <span>{memory.location}</span>
              </div>
              <p className="text-gray-600 line-clamp-2">{memory.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
