// 'use client';
// import React, { useState } from 'react';
// import JobApplicationForm from '@/components/JobApplicationForm';

// const jobs = [
//   {
//     title: 'Frontend Developer',
//     description: 'We are looking for a skilled frontend developer...',
//   },
//   {
//     title: 'Backend Developer',
//     description: 'Join our backend team to build scalable APIs...',
//   },
//   {
//     title: 'AI/ML Engineer',
//     description: 'Work with AI-driven products and ML models...',
//   },
// ];

// export default function CareersPage() {
//   const [selectedJob, setSelectedJob] = useState<string | null>(null);

//   return (
//     <div className="pt-24 px-6 sm:px-10 text-white min-h-screen bg-[#050d1b]">
//       <h1 className="text-3xl font-bold mb-6">Careers at Maverick Ignite</h1>

//       <div className="space-y-6">
//         {jobs.map((job, index) => (
//           <div key={index} className="bg-white/5 p-6 rounded-lg border border-white/10">
//             <h2 className="text-xl font-semibold">{job.title}</h2>
//             <p className="text-sm text-gray-300 mt-2">{job.description}</p>
//             <button
//               onClick={() => setSelectedJob(job.title)}
//               className="mt-4 bg-cyan-600 hover:bg-cyan-700 px-4 py-2 text-white rounded"
//             >
//               Apply Now
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Popup Modal for Job Application Form */}
//       {selectedJob && (
//         <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[999]">
//           <div className="bg-[#0a1120] p-6 rounded-lg w-full max-w-md mx-auto shadow-lg relative">
//             <button
//               onClick={() => setSelectedJob(null)}
//               className="absolute top-2 right-2 text-white text-xl hover:text-red-500"
//             >
//               ✕
//             </button>
//             <JobApplicationForm jobTitle={selectedJob} onClose={() => setSelectedJob(null)} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
