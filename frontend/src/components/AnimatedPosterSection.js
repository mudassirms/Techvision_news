'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
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
      className="w-full bg-[#050d1b] py-20 px-5 flex flex-col lg:flex-row items-center justify-center gap-20 lg:gap-32"
    >
      {/* 🎥 Larger Video Section */}
      <motion.div
        animate={controls}
        transition={{ duration: 0.8 }}
        className="w-full max-w-lg flex-shrink-0"
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
          className="rounded-3xl overflow-hidden shadow-lg"
        >
          <video
            autoPlay
            loop
            playsInline
            className="w-full h-auto object-cover rounded-3xl"
          >
            <source src="/video3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </motion.div>

      {/* ✍️ Text Section */}
      <motion.div
        animate={controlsText}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-white max-w-xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-5">
        Where Ideas Meet Execution — Building What You Imagine
        </h2>
        <p className="text-gray-300 text-lg mb-6">
        You dream it — we design, build, and launch it into the world.
        Empowering your vision with seamless, scalable, and smart application solutions.
        </p>
        <Link
          href="#services"
          className="inline-block bg-red-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-full font-medium transition"
        >
          Explore Services
        </Link>
      </motion.div>
    </section>
  );
}
