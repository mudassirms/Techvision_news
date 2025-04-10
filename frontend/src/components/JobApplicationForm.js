'use client';
import React, { useState } from 'react';

export default function JobApplicationForm({ jobTitle, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }
    data.append('jobTitle', jobTitle);

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        body: data,
      });

      if (res.ok) {
        alert('Application submitted successfully!');
        onClose(); // Close the form after successful submission
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('Server error. Try again later.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
      <div className="bg-[#0d1629] text-white w-full max-w-xl p-6 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-300 hover:text-red-400 text-2xl"
        >
          ×
        </button>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">
            Apply for {jobTitle}
          </h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-3 rounded bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            required
            className="w-full p-3 rounded bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Cover Letter or Message"
            rows="4"
            className="w-full p-3 rounded bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            onChange={handleChange}
          />

          <input
            type="file"
            name="resume"
            required
            accept=".pdf,.doc,.docx"
            className="text-white"
            onChange={handleChange}
          />

          <div className="flex justify-end gap-4 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-cyan-600 hover:bg-cyan-700 px-5 py-2 rounded text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
