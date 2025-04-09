"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation"; // ✅ FIXED
import heroImage from "../../public/hero-image.png";

const Hero = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/contact"); // ✅ App Router navigation
  };

  return (
    <section
      id="home"
      className="min-h-[80vh] w-full px-4 sm:px-10 py-16 bg-[var(--background)] text-[var(--foreground)] flex items-center justify-center"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-14">
        {/* Text */}
        <motion.div
          className="text-center md:text-left flex-1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Maverick Ignite
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-primary">
            Innovate. Automate. Elevate.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl mx-auto md:mx-0">
            Empowering businesses with cutting-edge AI solutions tailored for growth,
            efficiency, and innovation.
          </p>

          <button className="glow-btn mt-6" onClick={handleNavigate}>
            Get Started
          </button>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex justify-center items-center flex-1"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative w-[220px] sm:w-[300px] md:w-[400px]">
            <Image
              src={heroImage}
              alt="AI Illustration"
              className="floating-image"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
