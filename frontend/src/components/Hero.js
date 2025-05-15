"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const categories = ["Politics", "Technology", "Economy", "Culture", "World"];
const headlines = [
  "Breaking News: AI Reshapes Global Economy",
  "Technology Trends 2025: What to Expect",
  "New Innovations in Green Energy",
  "Politics: Global Leaders Meet for Climate Summit",
];

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header
      className="relative w-full min-h-[85vh] flex flex-col justify-center items-center bg-[#0f0c29] overflow-hidden px-6 sm:px-12 text-white"
      role="banner"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#00d9f5]/20 via-[#ff4c4c]/10 to-transparent pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl w-full text-center space-y-6 sm:space-y-8">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-[#00d9f5] to-[#ff4c4c] text-transparent bg-clip-text hover:animate-pulse select-none">
          Visionary News
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Real-time coverage on Technology, Politics, Economy, and Global Affairs.
        </p>

        {/* Search Bar */}
        <form
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Search for: ${searchQuery}`);
          }}
          className="relative mt-6 w-full max-w-lg mx-auto"
        >
          <input
            id="search"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search the latest news..."
            className="w-full px-5 py-3 bg-gray-900 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Search articles"
          />
          <Search
            className="absolute right-4 top-3.5 text-cyan-400 pointer-events-none"
            size={20}
            aria-hidden="true"
          />
        </form>
      </div>

      {/* Live Ticker */}
      <section
        className="relative w-full mt-10 bg-gradient-to-r from-[#00d9f5]/20 to-[#ff4c4c]/20 overflow-hidden"
        aria-label="Live News Headlines"
      >
        <div className="flex animate-scroll whitespace-nowrap">
          {headlines.map((headline, index) => (
            <span
              key={index}
              className="px-6 py-3 text-white border-r border-[#1f2a3a]"
            >
              {headline}
            </span>
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </header>
  );
};

export default HeroSection;
