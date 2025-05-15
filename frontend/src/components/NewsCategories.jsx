"use client";

import React from "react";
import { motion } from "framer-motion";

const categories = [
  { name: "Politics", color: "#00d9f5" },
  { name: "Technology", color: "#ff4c4c" },
  { name: "Economy", color: "#ffc700" },
  { name: "Culture", color: "#8a2be2" },
  { name: "Science", color: "#00ffc2" },
  { name: "World", color: "#e67e22" },
  { name: "Business", color: "#3498db" },
  { name: "Health", color: "#2ecc71" },
];

const NewsCategories = () => {
  return (
    <section
      className="max-w-7xl mx-auto px-6 md:px-10 py-16"
      aria-labelledby="news-categories-heading"
    >
      <h2
        id="news-categories-heading"
        className="text-4xl font-extrabold mb-8 text-[#00ffc2]"
      >
        Browse by Category
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-[#0d101f] p-6 rounded-lg shadow-md border border-[#00ffc2]/20 hover:shadow-cyan-500/50 cursor-pointer transition"
            tabIndex={0}
            role="button"
            aria-label={`Browse news category: ${category.name}`}
            style={{
              borderLeft: `4px solid ${category.color}`,
            }}
          >
            <h3
              className="text-xl font-semibold mb-2"
              style={{ color: category.color }}
            >
              {category.name}
            </h3>
            <p className="text-gray-400 text-sm">
              Explore the latest articles on {category.name}.
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NewsCategories;
