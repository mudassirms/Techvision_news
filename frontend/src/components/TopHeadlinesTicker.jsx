"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const headlines = [
  "AI Breakthroughs Set to Disrupt the Global Economy",
  "New Quantum Computing Platform Launched for Developers",
  "Blockchain Tech Transforms Financial Transparency",
  "Global Summit Focuses on Climate Change Innovations",
  "Futuristic Smart Cities: How Technology is Shaping Urban Life",
  "Cybersecurity Threats Increase with Rise in IoT Devices",
];

const TopHeadlinesTicker = () => {
  const tickerRef = useRef(null);

  useEffect(() => {
    const scrollAmount = tickerRef.current.scrollWidth;
    const duration = scrollAmount / 100; // Adjust speed

    const animation = tickerRef.current.animate(
      [{ transform: "translateX(100%)" }, { transform: `translateX(-${scrollAmount}px)` }],
      {
        duration: duration * 1000,
        iterations: Infinity,
        easing: "linear",
      }
    );

    return () => animation.cancel();
  }, []);

  return (
    <div
      className="w-full bg-[#0f1526] border-t border-b border-[#00ffc2]/30 py-3 overflow-hidden"
      role="region"
      aria-label="Top Headlines Ticker"
    >
      <div
        ref={tickerRef}
        className="flex gap-8 whitespace-nowrap text-[#00ffc2] font-semibold uppercase tracking-wide text-sm"
      >
        {headlines.map((headline, index) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer hover:text-[#ff4c4c] transition"
            tabIndex={0}
            role="link"
            aria-label={`Read headline: ${headline}`}
          >
            {headline}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default TopHeadlinesTicker;
