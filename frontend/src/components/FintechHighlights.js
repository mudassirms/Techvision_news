"use client";

import { motion } from "framer-motion";
import { Cloud, Brain, LineChart, Settings, Building } from "lucide-react";
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
export default function FintechSolutionsSection() {
  const features = [
    {
      icon: <LineChart className="w-8 h-8 text-cyan-400" />,
      title: "AI-Driven Analytics",
      description: "Smarter decisions with real-time insights."
    },
    {
      icon: <Cloud className="w-8 h-8 text-teal-400" />,
      title: "Cloud-Native Platforms",
      description: "Deploy, scale, and manage with ease."
    },
    {
      icon: <Building className="w-8 h-8 text-green-400" />,
      title: "Custom Enterprise Solutions",
      description: "Tailored systems to match your business goals."
    },
    {
      icon: <Settings className="w-8 h-8 text-indigo-400" />,
      title: "Automation & Integration",
      description: "Seamless integrations and process automation."
    }
  ];

  return (
    <section className="w-full px-6 py-20 bg-[#050d1b] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl md:text-5xl font-bold mb-12"
        >
          Powering the Future of Intelligent Business
        </motion.h2>

        {/* 📦 Image without shadow or glow */}
              <motion.div
                animate={controls}
                transition={{ duration: 0.8 }}
                className="w-full max-w-md flex-shrink-0"
              >
                <motion.div
                  animate={{
                    rotateX: [0, 5, -5, 0],
                    rotateY: [0, -5, 5, 0],
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="rounded-3xl overflow-hidden"
                >
                  <Image
                    src="/Iron_Theme2.png"
                    alt="Animated Poster"
                    width={500}
                    height={500}
                    priority
                    unoptimized
                    className="rounded-3xl"
                  />
                </motion.div>
              </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: false, amount: 0.2 }}
              className="bg-[#0a1529] p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
