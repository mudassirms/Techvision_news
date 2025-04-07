'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-[#0f172a] text-white px-6 md:px-16 py-20 relative overflow-hidden">
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-6 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
        >
          Empowering Digital Innovation
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg sm:text-xl text-gray-300 max-w-xl"
        >
          We craft transformative solutions to elevate your brand and business using the latest technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link href="#services">
            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg transition duration-300">
              Explore Our Services
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="w-full md:w-1/2 mt-10 md:mt-0 relative z-10"
      >
        <Image
          src="/hero.png"
          alt="Hero Image"
          width={600}
          height={600}
          className="w-full object-contain animate-floating"
          priority
        />
      </motion.div>

      {/* Floating Animation Style */}
      <style jsx>{`
        .animate-floating {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </section>
  );
}
