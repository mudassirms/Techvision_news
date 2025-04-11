'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

const serviceIcons = {
  ai: "/service1.png",
  data: "/service.png",
  database: "/service3.png",
  'data-eng': "/service4.png",
  integration: "/service5.png",
  'product-development': "/service6.png",
};

const animationVariants = {
  ai: {
    animate: { scale: [1, 1.08, 1], opacity: [1, 0.8, 1] },
    transition: { duration: 3, repeat: Infinity, repeatType: 'loop' },
  },
  data: {
    animate: { scale: [1, 1.08, 1], opacity: [1, 0.8, 1] },
    transition: { duration: 2.5, repeat: Infinity, repeatType: 'loop' },
  },
  database: {
    animate: { scale: [1, 1.08, 1], opacity: [1, 0.8, 1] },
    transition: { duration: 4, repeat: Infinity, repeatType: 'loop' },
  },
  'data-eng': {
    animate: { scale: [1, 1.08, 1], opacity: [1, 0.8, 1] },
    transition: { duration: 2, repeat: Infinity, repeatType: 'loop' },
  },
  integration: {
    animate: { scale: [1, 1.08, 1], opacity: [1, 0.8, 1] },
    transition: { duration: 3, repeat: Infinity, repeatType: 'loop' },
  },
  'product-development': {
    animate: { scale: [1, 1.08, 1], opacity: [1, 0.8, 1] },
    transition: { duration: 2.2, repeat: Infinity, repeatType: 'loop' },
  },
};

const imageSizes = {
  ai: { width: 'w-60', height: 'h-50', mdWidth: 'md:w-88', mdHeight: 'md:h-62' },
  data: { width: 'w-40', height: 'h-42', mdWidth: 'md:w-90', mdHeight: 'md:h-48' },
  database: { width: 'w-40', height: 'h-42', mdWidth: 'md:w-90', mdHeight: 'md:h-44' },
  'data-eng': { width: 'w-60', height: 'h-60', mdWidth: 'md:w-70', mdHeight: 'md:h-60' },
  integration: { width: 'w-50', height: 'h-50', mdWidth: 'md:w-90', mdHeight: 'md:h-65' },
  'product-development': { width: 'w-48', height: 'h-48', mdWidth: 'md:w-90', mdHeight: 'md:h-65' },
};

const servicesData = [
  {
    id: 'ai',
    title: 'AI-Driven Software Development',
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
    title: 'Enterprise Software Development',
    short: 'Robust, scalable systems tailored for modern enterprises.',
    details: [
      'We design and develop enterprise-grade platforms...',
      {
        heading: 'What we offer:',
        items: [
          'Custom enterprise applications',
          'Modular architecture & microservices',
          'Secure authentication & role-based access',
          'Integration with legacy and third-party systems',
          'Long-term maintenance and support',
        ],
      },
    ],
  },
  {
    id: 'database',
    title: 'Database Management & Smart Optimization',
    short: 'Secure, high-performance data systems with AI-enhanced optimization',
    details: [
      'We specialize in managing robust databases...',
      {
        heading: 'What we offer:',
        items: [
          'Database design & architecture (SQL & NoSQL)',
          'Performance tuning & query optimization',
          'Indexing strategies using AI insights',
          'Backup, recovery, and data retention strategies',
          'Cloud DB migration & modernization',
        ],
      },
    ],
  },
  {
    id: 'data-eng',
    title: 'Data Engineering & Analytics',
    short: 'Turn raw data into valuable business intelligence',
    details: [
      'We build modern data pipelines that serve your data efficiently.',
      {
        heading: 'What we offer:',
        items: [
          'Data pipeline development (ETL/ELT)',
          'Real-time & batch processing',
          'Data warehousing (Snowflake, BigQuery, Redshift)',
          'Dashboarding and business intelligence',
          'Data governance & quality assurance',
        ],
      },
    ],
  },
  {
    id: 'integration',
    title: 'System Integration & API Engineering',
    short: 'Unify your tech ecosystem with seamless integrations',
    details: [
      'We integrate your tools, platforms, and services into one cohesive system.',
      {
        heading: 'What we offer:',
        items: [
          'Custom API development & documentation',
          'Third-party integrations (CRM, ERP, etc.)',
          'Middleware solutions',
          'Legacy system integration',
          'Secure data exchange protocols',
        ],
      },
    ],
  },
  {
    id: 'product-development',
    title: 'Full-Cycle Product Development',
    short: 'From idea to MVP to enterprise-grade product.',
    details: [
      'We partner with you across the entire product lifecycle — from ideation to launch and beyond.',
      {
        heading: 'What we offer:',
        items: [
          'MVP development for startups',
          'Scalable product architecture',
          'Agile project delivery',
          'Product UI/UX design',
          'Ongoing support & iteration',
        ],
      },
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
      <h2 className="text-3xl font-bold text-center mb-10 text-[#00ffc2]">Our Services</h2>

      <div className="flex flex-col gap-6">
        {servicesData.map((service, idx) => (
          <div
            key={service.id}
            className="bg-[#1a1a2e]/40 p-6 rounded-xl border border-[#00ffc2]/20 hover:shadow-lg transition"
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => handleClick(idx)}
            >
              <h3 className="text-xl font-bold">{service.title}</h3>
              <ChevronDown
                className={`ml-4 transition-transform duration-300 ${
                  activeIndex === idx ? 'rotate-180' : ''
                }`}
              />
            </div>

            <p className="text-gray-300 mt-3">{service.short}</p>

            <AnimatePresence>
              {activeIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mt-5 space-y-4 flex flex-col md:flex-row justify-between gap-10"
                >
                  <div className="flex-1 space-y-4">
                    {service.details.map((item, i) =>
                      typeof item === 'string' ? (
                        <p key={i} className="text-gray-300">{item}</p>
                      ) : null
                    )}

                    {service.details.map((item, i) => {
                      if (typeof item === 'object' && item.heading && item.items) {
                        return (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ delay: 0.2 }}
                          >
                            <strong className="block mb-2 text-white">{item.heading}</strong>
                            <ul className="list-none pl-2 space-y-1 text-gray-200">
                              {item.items.map((subItem, j) => (
                                <li key={j} className="flex items-start">
                                  <span className="text-green-400 mr-4">✓</span>
                                  <span>{subItem}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        );
                      }
                      return null;
                    })}
                  </div>

                  <motion.div
                    className="flex justify-center items-center w-full md:w-auto mt-6 md:mt-0 pr-2 md:pr-6"
                    initial={{ opacity: 0 }}
                    animate={animationVariants[service.id].animate}
                    transition={animationVariants[service.id].transition}
                  >
                    <div
                      className={`relative 
                        ${imageSizes[service.id].width} 
                        ${imageSizes[service.id].height} 
                        ${imageSizes[service.id].mdWidth} 
                        ${imageSizes[service.id].mdHeight}`}
                    >
                      <Image
                        src={serviceIcons[service.id]}
                        alt={`${service.title} Icon`}
                        fill
                        className="object-contain brightness-300"
                        style={{ filter: 'drop-shadow(0 0 65px #00ffc2)' }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
