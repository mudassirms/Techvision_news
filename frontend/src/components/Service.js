'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const servicesData = [
  {
    id: 'ai',
    title: 'AI-Driven Software Development',
    short: 'Building smarter applications powered by artificial intelligence.',
    details: [
      'We develop intelligent applications that harness the power of AI and machine learning to enhance automation, personalization, and decision-making.',
      'From recommendation engines to intelligent chatbots and predictive analytics, our AI-driven development approach ensures your software evolves with your business needs.',
      {
        heading: 'What we offer:',
        items: [
          'AI/ML model development & deployment',
          'Natural Language Processing (NLP)',
          'Computer Vision solutions',
          'AI integration in web & mobile apps',
          'MLOps and lifecycle management'
        ]
      }
    ]
  },  
  {
    id: 'data',
    title: 'Enterprise Software Development',
    short: 'Robust, scalable systems tailored for modern enterprises.',
    details: [
      'We design and develop enterprise-grade software platforms that power mission-critical operations. Whether it’s ERP, CRM, or a custom management system, we focus on security, scalability, and performance.',
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
      'We specialize in building and managing robust database infrastructures that are secure, scalable, and fine-tuned for high performance.',
      'Using AI-driven insights and automation, we proactively monitor, tune, and optimize your databases for smarter querying, better indexing, and cost-effective scaling.',
      {
        heading: 'What we offer:',
        items: [
          'Database design & architecture (SQL & NoSQL)',
          'Performance tuning & query optimization',
          'Indexing strategies using AI insights',
          'Backup, recovery, and data retention strategies',
          'Data archiving & lifecycle management',
          'Cloud DB migration & modernization (AWS RDS, Azure, GCP)'
        ]
      }
    ]
  },
  {
    id: 'data-eng',
    title: 'Data Engineering & Analytics',
    short: 'Turn raw data into valuable business intelligence',
    details: [
      'We build modern data pipelines that collect, clean, transform, and serve your data efficiently.',
      'Our data engineering solutions enable real-time analytics and reporting, empowering smarter business decisions.',
      {
        heading: 'What we offer:',
        items: [
          'Data pipeline development (ETL/ELT)',
          'Real-time & batch processing',
          'Data warehousing (Snowflake, BigQuery, Redshift)',
          'Dashboarding and business intelligence',
          'Data governance & quality assurance'
        ]
      }
    ]
  },
  {
    id: 'product-development',
    title: 'Full-Cycle Product Development',
    short: 'From idea to MVP to enterprise-grade product.',
    details: [
      'We partner with you across the entire product lifecycle — from ideation to launch and beyond.',
      'Whether you\'re building a SaaS platform, mobile app, or internal tool, we bring UI/UX, engineering, QA, and DevOps expertise to the table.',
      {
        heading: 'What we offer:',
        items: [
          'MVP development for startups',
          'Scalable product architecture',
          'Agile project delivery',
          'Product UI/UX design',
          'Ongoing support & iteration'
        ]
      }
    ]
  },  
  {
    id: 'integration',
    title: 'System Integration & API Engineering',
    short: 'Unify your tech ecosystem with seamless integrations',
    details: [
      'We integrate your tools, platforms, and services into one cohesive system.',
      'From legacy modernization to REST API development, we ensure data flows smoothly across your infrastructure.',
      {
        heading: 'What we offer:',
        items: [
          'Custom API development & documentation',
          'Third-party integrations (CRM, ERP, etc.)',
          'Middleware solutions',
          'Legacy system integration',
          'Secure data exchange protocols'
        ]
      }
    ]
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
                  <ul className=" list-inside text-gray-200 pl-1 space-y-2">
  {service.details.map((item, i) => {
    if (typeof item === 'string') {
      return <li key={i}>{item}</li>;
    } else if (typeof item === 'object' && item.heading && item.items) {
      return (
        <li key={i}>
          <strong className="block mb-1">{item.heading}</strong>
          <ul className="list-none pl-2 space-y-1">
            {item.items.map((subItem, j) => (
              <li key={j} className="flex items-start">
                <span className="text-green-400 mr-2">✓</span>
                <span>{subItem}</span>
              </li>
            ))}
          </ul>
        </li>
      );
    }
  })}
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
