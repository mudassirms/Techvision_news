'use client';

import { useState, forwardRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, Bell, BarChart3 } from 'lucide-react';

export const products = [
  {
    title: 'DataSense',
    short: 'AI-Powered Business Data Insights',
    icon: <BarChart3 size={36} />,
    overview:
      'DataSense is an intelligent data analytics platform that empowers you to explore your business data through natural language queries.',
    features: [
      'Natural Language to SQL Conversion',
      'Real-time Data Analysis & Reporting',
      'Seamless Integration with Existing Databases',
      'Customizable Dashboards for KPIs & Trends',
    ],
    why: [
      'Make faster, data-driven decisions',
      'Empower non-technical teams',
      'Reduce dependency on analysts',
      'Gain competitive AI-powered insights',
    ],
    useCases: [
      'Sales & Revenue Analysis',
      'Operational KPIs Monitoring',
      'Customer Behavior Trends',
      'Financial Forecasting',
    ],
  },
  {
    title: 'SupportSense',
    short: 'Smart Support Assistant Trained on Your Business Knowledge',
    icon: <Bot size={36} />,
    overview:
      'SupportSense is an AI chatbot trained on your internal knowledge base using advanced Retrieval-Augmented Generation (RAG) tech.',
    features: [
      'Trainable on Your Own Documents',
      'Natural Language Q&A',
      'Fast and Accurate Responses',
      'Integrates with Website or Tools',
    ],
    why: [
      '24/7 Instant Support',
      'Reduce Ticket Volume & Costs',
      'Improve Response Time & Satisfaction',
      'Deploy in Minutes',
    ],
    useCases: [
      'Customer Support Automation',
      'Employee Onboarding Helpdesk',
      'Product Manual & FAQ Assistant',
    ],
  },
  {
    title: 'NotifyBot',
    short: 'Unified Notification Service for WhatsApp, SMS & Email',
    icon: <Bell size={36} />,
    overview:
      'NotifyBot is a microservice that handles communication via WhatsApp, SMS, and Email for updates and promotions.',
    features: [
      'API-Based Notification Sending',
      'Supports WhatsApp, SMS, Email',
      'Easy Integration with ERP/POS',
      'Attach Files, Media, and Templates',
    ],
    why: [
      'Improve Customer Communication',
      'Ensure Delivery of Critical Updates',
      'Modular and Scalable',
      'No Vendor Lock-In',
    ],
    useCases: [
      'Order Confirmations',
      'Appointment Reminders',
      'Alerts and Emergency Broadcasts',
    ],
  },
];

const ProductSection = forwardRef((props, ref) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const handleOpenProductModal = (e) => {
      const productTitle = e.detail;
      const match = products.find((p) => p.title === productTitle);
      if (match) {
        setSelectedProduct(match);
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('openProductModal', handleOpenProductModal);
    return () => {
      window.removeEventListener('openProductModal', handleOpenProductModal);
    };
  }, []);

  return (
    <section id="products" className="bg-[#050d1b] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-9">Our Products</h2>
        <div className="text-center italian-subheading text-xl md:text-2xl text-white my-8 px-2">
        Explore our suite of smart, scalable, and AI-driven products — designed to automate support, unlock insights, and streamline communication.</div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onClick={() => setSelectedProduct(product)}
              className="cursor-pointer rounded-xl bg-[#0d182a] p-6 border border-[#1f2a3a] shadow-md hover:shadow-cyan-500/30 transition-shadow"
            >
              <div className="mb-3 text-cyan-400">{product.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
              <p className="text-sm text-gray-400">{product.short}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4">
          <div className="max-w-3xl bg-[#0d182a] text-white p-8 rounded-xl shadow-lg border border-cyan-800 relative overflow-y-auto max-h-[80vh]">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-4 text-cyan-400 text-2xl"
            >
              ✕
            </button>
            <div className="mb-4">{selectedProduct.icon}</div>
            <h2 className="text-2xl font-bold mb-2">{selectedProduct.title}</h2>
            <p className="text-gray-300 mb-4">{selectedProduct.overview}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="text-cyan-400 font-semibold mb-2">Key Features:</h4>
                <ul className="list-disc ml-5 space-y-1 text-gray-400">
                  {selectedProduct.features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-cyan-400 font-semibold mb-2">Why Choose:</h4>
                <ul className="list-disc ml-5 space-y-1 text-gray-400">
                  {selectedProduct.why.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="sm:col-span-2">
                <h4 className="text-cyan-400 font-semibold mt-4 mb-2">Use Cases:</h4>
                <ul className="list-disc ml-5 space-y-1 text-gray-400">
                  {selectedProduct.useCases.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
});

export default ProductSection;
