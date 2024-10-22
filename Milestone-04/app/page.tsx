"use client"
import React, { useState } from 'react';

const DynamicResumeBuilder = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    skills: '',
  });

  const [profilePicture, setProfilePicture] = useState<string | null>(null);
  const [resume, setResume] = useState<any>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setProfilePicture(URL.createObjectURL(file));
    }
  };

  const generateResume = (e: React.FormEvent) => {
    e.preventDefault();
    setResume(formData);
  };

  return (
    <div className="min-h-screen bg-slate-200 p-8 ">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-300  to-purple-200  shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold  text-center text-gray-800 mb-8 bg-yellow-400 mx-40 rounded-xl">Professional Resume Builder</h1>
        
        <form className="space-y-8" onSubmit={generateResume}>
          <fieldset className="border-t border-b border-gray-200 py-6">
            <legend className="text-lg font-semibold text-gray-700">Personal Information</legend>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600 ">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full h-8 border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-gray-100"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full h-8  border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-600">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 block w-full h-8  border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-600">Profile Picture</label>
                <input
                  type="file"
                  id="profilePicture"
                  onChange={handleImageChange}
                  className="mt-1 block w-full"
                />
              </div>
            </div>
          </fieldset>

          {profilePicture && (
            <div className="text-center mb-8">
              <img
                src={profilePicture}
                alt="Profile"
                className="mx-auto w-32 h-32 rounded-full border-4 border-indigo-500 shadow-md"
              />
            </div>
          )}

          <fieldset className="border-t border-b border-gray-200 py-6">
            <legend className="text-lg font-semibold text-gray-700">Education</legend>
            <div className="mt-4">
              <textarea
                id="education"
                name="education"
                value={formData.education}
                onChange={handleInputChange}
                rows={3}
                className="block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Your education details"
              />
            </div>
          </fieldset>

          <fieldset className="border-t border-b border-gray-200 py-6">
            <legend className="text-lg font-semibold text-gray-700">Work Experience</legend>
            <div className="mt-4">
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                rows={3}
                className="block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Your work experience"
              />
            </div>
          </fieldset>

          <fieldset className="border-t border-b border-gray-200 py-6">
            <legend className="text-lg font-semibold text-gray-700">Skills</legend>
            <div className="mt-4">
              <textarea
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
                rows={3}
                className="block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                placeholder="Your skills"
              />
            </div>
          </fieldset>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-colors"
          >
            Generate Resume
          </button>
        </form>
{/* Resume Output */}
{resume && (
  <div className="mt-10 p-8 max-w-3xl mx-auto border-2 border-gray-300 rounded-lg bg-gradient-to-r from-blue-900 to-indigo-500 shadow-xl text-center ">
    <h2 className="text-4xl font-extrabold text-gray-700 bg-yellow-300 mx-40 mb-6 rounded-xl ">Generated Resume</h2>  

    {profilePicture && (
      <div className="flex justify-center mb-6">
        <img
          src={profilePicture}
          alt="Profile Picture"
          className="w-40 h-40 rounded-full border-4 border-sky-500 shadow-lg transition-transform transform hover:scale-105"
        />
      </div>
    )}

    <div className="space-y-6 text-left max-w-2xl mx-auto  text-slate-200 ">
      <p className="text-xl"><span className="font-semibold text-yellow-400">Name:</span> {resume.name}</p>
      <p className="text-xl"><span className="font-semibold text-yellow-400">Email:</span> {resume.email}</p>
      <p className="text-xl"><span className="font-semibold text-yellow-400">Phone:</span> {resume.phone}</p>

      <div className="py-4 border-t border-b border-gray-300">
        <h3 className="text-2xl font-bold text-yellow-500 mb-2">Education</h3>
        <p className="text-lg text-whitebreak-words whitespace-pre-line">{resume.education}</p>
      </div>

      <div className="py-4 border-b border-gray-300">
        <h3 className="text-2xl font-bold text-yellow-500 mb-2">Work Experience</h3>
        <p className="text-lg text-whitebreak-words whitespace-pre-line">{resume.experience}</p>
      </div>

      <div className="py-4">
        <h3 className="text-2xl font-bold text-yellow-500 mb-2">Skills</h3>
        <p className="text-lg text-white break-words whitespace-pre-line">{resume.skills}</p>
      </div>
    </div>
  </div>
)}


      </div>
    </div>
  );
};

export default DynamicResumeBuilder;
