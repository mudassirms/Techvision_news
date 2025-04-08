'use client';

import { motion } from 'framer-motion';

export default function SeamlessSection() {
  const features = [
    {
      title: 'AI-Powered Risk Analysis',
      desc: 'Leverage machine learning models to evaluate credit and operational risk with precision.',
      icon: '🧠',
    },
    {
      title: 'Intelligent Automation',
      desc: 'Automate complex workflows using AI agents that learn and optimize over time.',
      icon: '⚙️',
    },
    {
      title: 'Predictive Insights',
      desc: 'Turn large datasets into foresight with custom AI analytics and forecasting.',
      icon: '📈',
    },
    {
      title: 'NLP Chatbots & Assistants',
      desc: 'AI-driven customer service with multilingual and contextual support capabilities.',
      icon: '💬',
    },
    {
      title: 'Cloud-native AI Integration',
      desc: 'Deploy scalable AI services into your existing cloud infrastructure.',
      icon: '☁️',
    },
    {
      title: 'Custom AI Model Development',
      desc: 'Train, fine-tune, and deploy models specifically built for your business domain.',
      icon: '🔬',
    },
    {
      title: 'Smart Billing Software',
      desc: 'AI-powered billing and invoicing systems with automated reconciliation and reporting.',
      icon: '🧾',
    },
  ];

  return (
    <section className="w-full px-6 py-20 bg-[#050d1b] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Unlocking Possibilities Through AI
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
        >
          Empower your financial platform with intelligent systems — from risk modeling to predictive analytics — all powered by cutting-edge AI.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
              className="p-6 bg-[#0d182a] rounded-2xl border border-[#1f2a3a] shadow-lg hover:shadow-cyan-500/20 transition-shadow"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}