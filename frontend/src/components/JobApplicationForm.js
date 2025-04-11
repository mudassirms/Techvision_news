'use client';
import React, { useState } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';

const SuccessPopup = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
    <div className="bg-[#101d35] text-white w-full max-w-sm p-6 rounded-xl shadow-2xl text-center relative animate-fade-in">
      <button
        onClick={onClose}
        className="absolute top-3 right-4 text-gray-300 hover:text-red-400 text-xl"
      >
        ×
      </button>
      <div className="text-green-400 text-4xl mb-3">✔</div>
      <h3 className="text-2xl font-semibold mb-2">Application Submitted!</h3>
      <p className="text-gray-300">
        Thank you for applying. We'll review your submission and get back to you soon.
      </p>
    </div>
  </div>
);

export default function JobApplicationForm({ jobTitle, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [resumeFile, setResumeFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setResumeFile(files[0]);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    let resumeUrl = '';

    try {
      if (resumeFile) {
        const uploadData = new FormData();
        uploadData.append('file', resumeFile);
        uploadData.append('upload_preset', 'resume_unsigned');
        uploadData.append('folder', 'resumes');

        const res = await axios.post(
          'https://api.cloudinary.com/v1_1/maverickignite/raw/upload',
          uploadData
        );

        resumeUrl = res.data.secure_url;
      }

      const templateParams = {
        from_name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        job_title: jobTitle,
        resume_link: resumeUrl,
      };

      await emailjs.send(
        'service_04odo0c',
        'template_gqgqb4c',
        templateParams,
        'M-pTkSNkHoQjr6oSd'
      );

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 4000);
    } catch (err) {
      console.error('Submission error:', err);
      alert('Something went wrong. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
        <div className="bg-[#0d1629] text-white w-full max-w-xl p-6 rounded-lg shadow-lg relative">
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
                disabled={uploading}
              >
                {uploading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>

      {showSuccess && <SuccessPopup onClose={() => setShowSuccess(false)} />}
    </>
  );
}
