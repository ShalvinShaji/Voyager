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
    description: "Watching the sun dip below the horizon, painting the white buildings in golden hues. The perfect blend of architecture and nature created an unforgettable scene. The warm Mediterranean breeze carried the scent of the sea, while the distant sound of church bells added to the magical atmosphere. Local tavernas began to light their evening lanterns, and the narrow cobblestone streets came alive with a different kind of energy."
  },
  {
    id: 2,
    title: "Mountain Trek in Switzerland",
    date: "2023-07-22",
    location: "Swiss Alps",
    image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Hiking through the majestic Swiss Alps, surrounded by pristine nature. The crisp mountain air filled our lungs as we ascended through meadows dotted with wildflowers. Snow-capped peaks stretched as far as the eye could see, and the occasional sound of distant cowbells reminded us of the traditional Alpine culture that still thrives here."
  },
  {
    id: 3,
    title: "Tokyo Nights",
    date: "2023-06-10",
    location: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Exploring the vibrant streets of Tokyo, immersed in neon lights and city energy. The seamless blend of traditional culture and modern technology created a unique atmosphere that could only be found in Japan's capital. Street food vendors filled the air with tempting aromas, while the efficient subway system hummed beneath our feet."
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
            
            <div className="prose max-w-none">
              <p className="text-gray-600 text-lg leading-relaxed">
                {memory.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
