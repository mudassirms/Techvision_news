// components/IntelligentBusinessSection.jsx
'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Cloud,
  ShieldCheck,
  Activity,
  Server,
  TrendingUp,
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI-Powered Intelligence',
    description: 'Leverage advanced machine learning and real-time decision-making.',
  },
  {
    icon: Cloud,
    title: 'Cloud-Native Infrastructure',
    description: 'Scalable, secure, and fast cloud deployments tailored for growth.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    description: 'End-to-end encryption and robust access control for all systems.',
  },
  {
    icon: Activity,
    title: 'System Automation',
    description: 'Streamline operations and reduce human error with smart automation.',
  },
  {
    icon: Server,
    title: 'Data & Insights',
    description: 'Transform raw data into actionable business insights.',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Architecture',
    description: 'Grow seamlessly with a foundation designed for enterprise scale.',
  },
];

export default function IntelligentBusinessSection() {
  return (
    <section className="w-full bg-[#050d1b] py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-4"
        >
          Powering the Future of Intelligent Business
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 mb-12 max-w-3xl mx-auto"
        >
          From infrastructure to AI, our comprehensive solutions are built to empower every aspect of your enterprise journey.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="bg-[#0a1224] p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center mb-4">
                  <Icon className="w-10 h-10 text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
