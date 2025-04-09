'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between bg-[#0f172a] text-white px-6 md:px-16 py-20 relative overflow-hidden">

      {/* 🔹 Animated Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 z-0"
        options={{
          background: {
            color: {
              value: '#0f172a',
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
          },
          particles: {
            color: {
              value: '#00ffc3',
            },
            links: {
              color: '#00ffc3',
              distance: 100,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.3,
              direction: 'none',
              random: false,
              straight: false,
              outModes: 'out',
            },
            number: {
              value: 40,
              density: {
                enable: true,
                area: 800,
              },
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* 🔸 Left Content */}
      <div className="w-full md:w-1/2 space-y-6 z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-cyan-300 via-green-300 to-teal-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(0,255,200,0.5)] animate-shimmer tracking-tight"
        >
          Powering the Future with AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed"
        >
          Transforming industries with intelligent solutions — one algorithm at a time.
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

      {/* 🔸 Hero Image */}
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

      {/* 🎯 Floating + Shimmer Animation Styles */}
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

        .animate-shimmer {
          background-size: 300% 300%;
          animation: shimmer 5s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}
