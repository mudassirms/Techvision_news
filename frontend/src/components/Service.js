'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const serviceVideos = {
  ai: "/Service1.mp4",
  data: "/service2.mp4",
  database: "/Service3.mp4",
  'data-eng': "/VIDEO2.mp4",
  // integration: "/Service3.mp4",
  'product-development': "/service2.mp4",
};

const videoSizes = {
  ai: 'w-60 h-50 md:w-88 md:h-62',
  data: 'w-40 h-42 md:w-90 md:h-48',
  database: 'w-60 h-50 md:w-90 md:h-50',
  'data-eng': 'w-80 h-70 md:w-90 md:h-70',
  integration: 'w-50 h-50 md:w-90 md:h-65',
  'product-development': 'w-48 h-48 md:w-90 md:h-65',
};

const servicesData = [
  {
    id: 'ai',
    title: 'AI-Based Applications',
    short: 'Building smarter applications powered by artificial intelligence.',
    details: [
      'We develop intelligent applications that harness the power of AI and machine learning...',
      'From recommendation engines to intelligent chatbots...',
      {
        heading: 'What we offer:',
        items: [
          'AI/ML model development & deployment',
          'Natural Language Processing (NLP)',
          'Computer Vision solutions',
          'AI integration in web & mobile apps',
          'MLOps and lifecycle management',
        ],
      },
    ],
  },
  {
    id: 'data',
    title: 'Data Science Applications',
    short: 'Robust, scalable systems through Data Science.',
    details: [
      'We design and develop DataScience based platforms...',
      {
        heading: 'What we offer:',
        items: [
          'Interactive dashboards for real-time business insights',
          'Machine learning-based forecasting tools',
          'Supervised/unsupervised model building tailored to business goals',
          'Personalized product, content, or service suggestions',
          'Full-stack integration into web or mobile apps',
        ],
      },
    ],
  },
  {
    id: 'database',
    title: 'Web-Based Applications',
    short: 'End-to-end data-driven apps — from frontend design to backend logic and database integration Built using (modern stacks MERN, Django + React, Flask + Vue, etc.)',
    details: [
      'We specialize in managing robust WebApplications...',
      {
        heading: 'What we offer:',
        items: [
          'Custom Analytics Portals',
          'Interactive Data Dashboards',
          'Predictive Web Applications',
          'NLP-Based Tools',
          'Full-Stack Web Applications',
        ],
      },
    ],
  },
  {
    id: 'data-eng',
    title: 'Data Engineering & Analytics',
    short: 'Modern, user-friendly interfaces Wireframes, prototypes, and high-fidelity designs (using Figma, Adobe XD)',
    details: [
      'We build Logo animations, explainer videos, and dynamic UI effects',
      {
        heading: 'What we offer:',
        items: [
          'Branding & Identity Design',
          'UI/UX Design for Web & Mobile',
          'Marketing & Promotional Graphics',
          'Presentation Design',
          'Motion Graphics & Animations',
          'Custom Illustration & Artworks'
        ],
      },
    ],
  },
];

// Modal Component
const ServiceModal = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-red/70 backdrop-blur-sm">
      <motion.div
        className="bg-[#0b132b] rounded-xl max-w-5xl w-full mx-4 p-6 relative text-white shadow-2xl overflow-y-auto max-h-[90vh]"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.3 }}
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-red-400 text-2xl"
          onClick={onClose}
        >
          ×
        </button>

        <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[rgba(242,184,83,0.77)]">{service.title}</h3>
        <p className="text-gray-300 mb-4">{service.short}</p>

        <div className="space-y-4">
          {service.details.map((item, i) =>
            typeof item === "string" ? (
              <p key={i} className="text-gray-300">{item}</p>
            ) : (
              <div key={i}>
                <strong className="block mb-2 text-white">{item.heading}</strong>
                <ul className="list-none pl-2 space-y-1 text-gray-200">
                  {item.items.map((subItem, j) => (
                    <li key={j} className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span>{subItem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>

        {/* Video */}
        <div className="mt-8 flex justify-center">
          <div className={`relative ${videoSizes[service.id]} rounded-lg overflow-hidden`}>
            <video
              src={serviceVideos[service.id]}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Main Component
export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const handleOpen = (service) => {
    setSelectedService(service);
  };

  const handleClose = () => {
    setSelectedService(null);
  };

  return (
    <div id="services" className="py-12 px-6 md:px-10 text-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#540728]">Our Services</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="bg-[#1a1a2e]/40 p-6 rounded-xl border border-[#00ffc2]/20 hover:shadow-lg transition cursor-pointer group"
            onClick={() => handleOpen(service)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">{service.title}</h3>
              <ChevronRight className="text-[#00ffc2] transition-transform duration-300 group-hover:translate-x-1" />
            </div>
            <p className="text-gray-300 mt-3">{service.short}</p>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ServiceModal service={selectedService} onClose={handleClose} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
