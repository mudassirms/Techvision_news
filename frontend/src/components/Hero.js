"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import floatingImg from "@/public/Image.png";

export default function Hero() {
  return (
    <section className="min-h-screen w-full px-4 sm:px-6 md:px-20 py-16 bg-[#050d1b] text-white flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
      {/* Left Content */}
      <div className="z-10 max-w-xl text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[clamp(1.8rem,6vw,3rem)] font-extrabold leading-tight mb-6 break-words text-balance"
        >
          <span className="block leading-tight">Powering the Future</span>
          <span className="block leading-tight">
            with{" "}
            <span className="text-[#00ffc2] drop-shadow-[0_0_12px_#00ffc2]">
              AI
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-sm sm:text-base md:text-lg text-[#9ed9d0] font-medium mb-8 leading-relaxed"
        >
          Software Development • AI Integration
          <br className="hidden xs:inline" />
          Data Solutions • Talent Growth
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#00ffc2] text-black px-5 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-bold shadow-[0_0_20px_#00ffc2] hover:shadow-[0_0_30px_#00ffc2] transition-all duration-300"
        >
          Get Started
        </motion.button>
      </div>

      {/* Right Image */}
      <motion.div
        className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div whileHover={{ scale: 1.03 }}>
          <div className="flex justify-center items-center w-full relative">
            <Image
              src={floatingImg}
              alt="AI Brain Illustration"
              className="w-[200px] sm:w-[280px] md:w-[450px] mix-blend-screen opacity-90 drop-shadow-[0_0_80px_#00ffc2] rounded-full"
              priority
            />
            <div className="absolute w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(0,255,194,0.15)_0%,_transparent_70%)] blur-3xl z-0" />
          </div>
        </motion.div>
      </motion.div>

      {/* Glow Background */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(0,255,194,0.12)_0%,_transparent_70%)] z-0" />
    </section>
  );
}
