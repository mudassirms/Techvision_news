"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <header
      id="home"
      className="relative w-full min-h-screen flex items-center bg-[#0f0c29] pt-24 pb-10 overflow-hidden"
    >
      {/* Background video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
        >
          <source
            src="/Purple%20Blue%20Modern%20Robot%20Assitant%20Video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#00d9f5]/10 via-[#ff4c4c]/5 to-transparent pointer-events-none" />

      {/* Main content container */}
      <div className="relative z-10 flex items-center justify-start w-full max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* Text Section */}
        <motion.div
          className="text-left w-full max-w-3xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="whitespace-nowrap text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-5 bg-gradient-to-r from-[#00d9f5] to-[#ff4c4c] text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(0,217,245,0.4)] animate-glow overflow-x-auto">
            Visionary Tech Solutions
          </h1>
          <p className="whitespace-nowrap text-sm sm:text-base md:text-lg text-gray-300 mb-7 overflow-x-auto">
            We blend data science, AI, development & design to transform your vision into reality.
          </p>
          <a href="#contact">
            <button className="relative px-6 sm:px-8 py-3 rounded-full font-semibold text-black bg-gradient-to-r from-[#00d9f5] to-[#ff4c4c] overflow-hidden shadow-lg hover:opacity-100 transition-all duration-300 group">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00d9f5] to-[#ff4c4c] blur-md opacity-30 group-hover:opacity-60 transition-all duration-300 animate-pulse" />
              <span className="relative z-10">Get Started</span>
            </button>
          </a>
        </motion.div>
      </div>

      {/* Scroll Arrow */}
      <a
        href="#about"
        className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-300 hover:text-[#00d9f5] transition duration-300 z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6 sm:w-8 sm:h-8"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>

      {/* Animations */}
      <style jsx>{`
        .animate-glow {
          animation: shimmer 5s ease-in-out infinite;
          background-size: 200% 200%;
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
    </header>
  );
};

export default Hero;
