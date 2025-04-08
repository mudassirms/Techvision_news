'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AnimatedPosterSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });
  const controls = useAnimation();
  const controlsText = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, x: 0 });
      controlsText.start({ opacity: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, x: -50 });
      controlsText.start({ opacity: 0, x: 50 });
    }
  }, [isInView, controls, controlsText]);

  return (
    <section
      ref={ref}
      className="w-full bg-[#050d1b] py-20 px-6 flex flex-col lg:flex-row items-center justify-between gap-10"
    >
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
          className="rounded-3xl overflow-hidden" // Removed shadow
        >
          <Image
            src="D:\Maverickgnite_website\frontend\public\explore3.png"
            alt="Animated Poster"
            width={500}
            height={500}
            priority
            unoptimized
            className="rounded-3xl" // Keep soft corners only
          />
        </motion.div>
      </motion.div>

      {/* ✍️ Text content */}
      <motion.div
        animate={controlsText}
        transition={{ duration: 0.8, delay: 0.2 }}
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
