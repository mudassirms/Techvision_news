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
    <form onSubmit={handleSubmit} className="mt-6 bg-white/5 p-6 rounded-lg border border-white/10 space-y-4">
      <h3 className="text-lg font-semibold text-white">Apply for {jobTitle}</h3>

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="w-full p-2 rounded bg-white/10 text-white"
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full p-2 rounded bg-white/10 text-white"
        onChange={handleChange}
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        required
        className="w-full p-2 rounded bg-white/10 text-white"
        onChange={handleChange}
      />

      <textarea
        name="message"
        placeholder="Cover Letter or Message"
        rows="4"
        className="w-full p-2 rounded bg-white/10 text-white"
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

      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Submit Application
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
