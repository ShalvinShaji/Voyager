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
    description: "Watching the sun dip below the horizon, painting the white buildings in golden hues."
  },
  {
    id: 2,
    title: "Mountain Trek in Switzerland",
    date: "2023-07-22",
    location: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Hiking through the majestic Swiss Alps, surrounded by pristine nature."
  },
  {
    id: 3,
    title: "Tokyo Nights",
    date: "2023-06-10",
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Exploring the vibrant streets of Tokyo, immersed in neon lights and city energy."
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
