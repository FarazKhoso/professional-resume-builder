"use client"; // Mark the component as a Client Component


import { useState } from 'react';

export default function ResumeForm() {
  const [profilePicture, setProfilePicture] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePicture(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
<div>
<div className="min-h-screen bg-gray-200 p-8">
  <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-200 to-purple-300 shadow-lg rounded-lg p-8">
    <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 bg-yellow-400 mx-44 rounded-lg">Professional Resume Builder</h1>
    
    <form className="space-y-8">
      <fieldset className="border-t border-b border-gray-200 py-6">
        <legend className="text-lg font-semibold text-gray-700">Personal Information</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
            <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
            <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-600">Phone</label>
            <input type="tel" id="phone" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" required />
          </div>
          <div>
            <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-600">Profile Picture</label>
            <input type="file" id="profilePicture" className="mt-1 block w-full" onChange={handleImageChange} />
          </div>
        </div>
      </fieldset>

      {profilePicture && (
        <div className="text-center mb-8">
          <img src={profilePicture} alt="Profile" className="mx-auto w-32 h-32 rounded-full border-4 border-blue-500 shadow-md" />
        </div>
      )}

      <fieldset className="border-t border-b border-gray-200 py-6">
        <legend className="text-lg font-semibold text-gray-700">Education</legend>
        <div className="mt-4">
          <textarea id="education" rows={3} className="block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" placeholder="Your education details" />
        </div>
      </fieldset>

      <fieldset className="border-t border-b border-gray-200 py-6">
        <legend className="text-lg font-semibold text-gray-700">Work Experience</legend>
        <div className="mt-4">
          <textarea id="workExperience" rows={3} className="block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" placeholder="Your work experience" />
        </div>
      </fieldset>

      <fieldset className="border-t border-b border-gray-200 py-6">
        <legend className="text-lg font-semibold text-gray-700">Skills</legend>
        <div className="mt-4">
          <textarea id="skills" rows={3} className="block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" placeholder="Your skills" />
        </div>
      </fieldset>

      <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors">
        Generate Resume
      </button>
    </form>
  </div>
</div>



</div>
  );
}
