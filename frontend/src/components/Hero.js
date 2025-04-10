"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import heroImage from "../../public/Image.png";

const Hero = () => {
  const router = useRouter();

  return (
    <header
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center bg-[#050d1b] px-4 sm:px-6 lg:px-12 pt-12 pb-10 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#00fff7]/10 via-[#00ffc2]/5 to-transparent pointer-events-none" />

      {/* Main content container */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl gap-10">
        {/* Text Section */}
        <motion.div
          className="text-left max-w-l w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-cyan-300 via-green-300 to-teal-400 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(0,255,200,0.4)] animate-glow">
            Transforming Business with AI-Driven Software Excellence
          </h1>
          <p className="text-base italian-subheading sm:text-lg md:text-xl text-gray-300 mb-7">
            Building next-gen platforms with AI and advanced engineering
          </p>
          <a href="#contact">
            <button className="relative px-8 py-3 rounded-full font-semibold text-black bg-gradient-to-r from-cyan-400 to-cyan-300 overflow-hidden shadow-lg hover:opacity-100 transition-all duration-300 group">
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-300 blur-md opacity-30 group-hover:opacity-60 transition-all duration-300 animate-pulse" />
              <span className="relative z-10">Get Started</span>
            </button>
          </a>
        </motion.div>

        {/* Floating AI Image */}
        <motion.div
          className="relative w-full max-w-xs sm:max-w-sm md:max-w-md flex justify-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] bg-[#00fff7] blur-[80px] opacity-20 right-0 top-1/2 transform -translate-y-1/2 z-0 rounded-full" />
          <Image
            src={heroImage}
            alt="Floating AI Visual"
            className="relative w-full animate-float z-10"
            priority
          />
        </motion.div>
      </div>

      {/* Scroll Arrow */}
      <a
        href="#about"
        className="absolute bottom-6 sm:bottom-10 animate-bounce text-gray-300 hover:text-[#00fff7] transition duration-300 z-10"
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
        .animate-float {
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
