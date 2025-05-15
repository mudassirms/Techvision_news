"use client";

import React from "react";
import { motion } from "framer-motion";

const latestNewsData = [
  {
    id: 1,
    title: "AI Revolutionizes Cybersecurity in 2025",
    summary:
      "Cutting-edge AI tech reshapes how companies protect data, preventing attacks in real-time.",
    imageUrl: "/Cyber.jpg",
    category: "Technology",
    date: "May 15, 2025",
  },
  {
    id: 2,
    title: "Global Markets Rally Amid Economic Optimism",
    summary:
      "Stock indices surge worldwide as new trade agreements foster investor confidence.",
    imageUrl: "/market.avif",
    category: "Economy",
    date: "May 14, 2025",
  },
  {
    id: 3,
    title: "Breakthrough in Cancer Research Announced",
    summary:
      "Scientists develop a promising new therapy showing remarkable results in early trials.",
    imageUrl: "/cancer1.jpg",
    category: "Health",
    date: "May 13, 2025",
  },
  {
    id: 4,
    title: "Cultural Festival Lights Up the City",
    summary:
      "Thousands gather to celebrate diverse traditions with music, food, and art installations.",
    imageUrl: "/service.png",
    category: "Culture",
    date: "May 12, 2025",
  },
];

const LatestNews = () => {
  return (
    <section
      className="max-w-7xl mx-auto px-6 md:px-10 py-16"
      aria-labelledby="latest-news-heading"
    >
      <h2
        id="latest-news-heading"
        className="text-4xl font-extrabold mb-10 text-[#00ffc2]"
      >
        Latest News
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {latestNewsData.map((news) => (
          <motion.article
            key={news.id}
            className="bg-[#0d101f] rounded-lg shadow-lg border border-[#00ffc2]/30 overflow-hidden cursor-pointer hover:shadow-cyan-600/80 transition"
            whileHover={{ scale: 1.03 }}
            tabIndex={0}
            aria-label={`Read latest news: ${news.title}`}
          >
            <img
              src={news.imageUrl}
              alt={news.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <span
                className="inline-block text-xs font-semibold mb-2 px-2 py-1 rounded"
                style={{ backgroundColor: `${categoryColor(news.category)}20`, color: categoryColor(news.category) }}
              >
                {news.category}
              </span>
              <h3 className="text-lg font-bold mb-2 text-[#00ffc2]">{news.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{news.summary}</p>
              <time className="text-xs text-gray-500">{news.date}</time>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

// Helper function for category colors
const categoryColor = (category) => {
  const colors = {
    Politics: "#00d9f5",
    Technology: "#ff4c4c",
    Economy: "#ffc700",
    Culture: "#8a2be2",
    Science: "#00ffc2",
    World: "#e67e22",
    Business: "#3498db",
    Health: "#2ecc71",
  };
  return colors[category] || "#00ffc2";
};

export default LatestNews;
