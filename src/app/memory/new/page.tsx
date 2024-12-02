'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import Link from 'next/link';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function CreateMemory() {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    location: '',
    country: '',
    description: '',
    bannerImage: '',
    additionalImages: [] as string[],
  });

  const [bannerPreview, setBannerPreview] = useState<string | null>(null);
  const [additionalPreviews, setAdditionalPreviews] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBannerPreview(reader.result as string);
        setFormData({ ...formData, bannerImage: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdditionalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const previews: string[] = [];
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          previews.push(reader.result as string);
          setFormData(prev => ({ ...prev, additionalImages: [...prev.additionalImages, reader.result as string] }));
          if (previews.length === files.length) {
            setAdditionalPreviews(previews);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-black hover:underline flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to home
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-6">Create New Memory</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              id="date"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
            />
          </div>

          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
              <input
                type="text"
                id="location"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                required
              />
            </div>

            <div className="flex-1">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
              <input
                type="text"
                id="country"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <ReactQuill
              theme="snow"
              value={formData.description}
              onChange={(value) => setFormData({ ...formData, description: value })}
              className="mt-1"
            />
          </div>


          <div>
            <label htmlFor="bannerImage" className="block text-sm font-medium text-gray-700">Banner Image (Mandatory)</label>
            <input
              type="file"
              id="bannerImage"
              accept="image/*"
              onChange={handleBannerChange}
              className="mt-1 block w-full"
              required
            />
            {bannerPreview && (
              <div className="mt-2">
                <img src={bannerPreview} alt="Banner Preview" className="w-full h-48 object-contain rounded-md" />
              </div>
            )}
          </div>

          <div>
            <label htmlFor="additionalImages" className="block text-sm font-medium text-gray-700">Additional Images (Optional)</label>
            <input
              type="file"
              id="additionalImages"
              accept="image/*"
              multiple
              onChange={handleAdditionalChange}
              className="mt-1 block w-full"
            />
            {additionalPreviews.length > 0 && (
              <div className="mt-2 grid grid-cols-2 gap-2">
                {additionalPreviews.map((preview, index) => (
                  <img key={index} src={preview} alt={`Additional Preview ${index + 1}`} className="w-full h-48 object-contain rounded-md" />
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
            >
              Save Memory
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
