'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const servicesData = [
  {
    id: 'ai',
    title: 'AI Software Development',
    short: 'Smarter systems with ML/AI.',
    details: [
      'AI Chatbot Development',
      'Predictive Analytics Platform',
      'Custom NLP Solutions',
      'AI-Powered Automation Tools',
    ],
  },
  {
    id: 'data',
    title: 'Data Management',
    short: 'Scalable & secure cloud systems.',
    details: [
      'Cloud-native Data Lakes',
      'Big Data Pipelines',
      'Time-Series Database Management',
      'Secure Cloud Deployments',
    ],
  },
  {
    id: 'consulting',
    title: 'AI Consulting',
    short: 'Expert guidance for AI adoption.',
    details: [
      'AI Readiness Assessment',
      'Model Evaluation & Strategy',
      'Pilot Projects',
      'Implementation Roadmap',
    ],
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <div id="services" className="py-12 px-6 md:px-10 text-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#00ffc2]">
        Our Services
      </h2>

      <div className="flex flex-col gap-6">
        {servicesData.map((service, idx) => (
          <div
            key={service.id}
            id={service.id}
            className="bg-[#1a1a2e]/40 p-6 rounded-xl border border-[#00ffc2]/20 hover:shadow-lg transition"
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => handleClick(idx)}
            >
              <div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-gray-300">{service.short}</p>
              </div>
              <ChevronDown
                className={`ml-4 transition-transform duration-300 ${
                  activeIndex === idx ? 'rotate-180' : ''
                }`}
              />
            </div>

            {/* Details Dropdown */}
            <AnimatePresence>
              {activeIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden mt-4"
                >
                  <ul className="list-disc list-inside text-gray-200 pl-4 space-y-2">
                    {service.details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
