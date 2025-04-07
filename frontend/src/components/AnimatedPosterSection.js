'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AnimatedPosterSection() {
  return (
    <section className="w-full bg-[#050d1b] py-20 px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md flex-shrink-0"
      >
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 1, -1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="shadow-xl rounded-xl overflow-hidden"
        >
          <Image
            src="/robo.png"
            alt="Floating Animated Poster"
            width={400}
            height={400}
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-white max-w-xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Transform Ideas into AI Reality
        </h2>
        <p className="text-gray-300 text-lg mb-6">
          Explore how our AI-powered development transforms your operations into seamless, intelligent experiences. Built for scalability, speed, and results.
        </p>
        <Link
          href="#services"
          className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-full font-medium transition"
        >
          Explore Services
        </Link>
      </motion.div>
    </section>
  );
}
