'use client';

import { useState } from 'react';
import CreateEntryModal from '@/components/CreateEntryModal';
import MemoryGrid from '@/components/MemoryGrid';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Your Personal</span>
            <span className="block">Travel Diary</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Document your adventures, save your memories, and share your journey with the world.
          </p>
          <div className="mt-5 max-w-md mx-auto">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full px-8 py-3 border border-black text-base font-medium rounded-md text-white bg-black hover:bg-gray-800 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
            >
              Create Memory
            </button>
          </div>
        </div>

        <MemoryGrid />
      </div>

      <CreateEntryModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}