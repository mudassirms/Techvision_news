"use client";

import React from "react";
import HeroSection from "../components/Hero"
import NewsCategories from "../components/NewsCategories";
import LatestNews from "../components/LatestNews"
import TopHeadlinesTicker from "../components/TopHeadlinesTicker";
import { motion } from "framer-motion";

const newsCategories = [
  "Politics",
  "Technology",
  "Business",
  "World",
  "Culture",
  "Science",
  "Opinion",
];

const sampleHeadlines = [
  {
    title: "AI Transforms Global Newsrooms — Ethical Debate Ignites",
    category: "Technology",
    date: "May 16, 2025",
    summary:
      "As AI-driven reporting tools take center stage, journalists debate the future of truth and ethics in digital media.",
  },
  {
    title: "New Blockchain Initiative Promises Transparency in Elections",
    category: "Politics",
    date: "May 15, 2025",
    summary:
      "A cutting-edge blockchain platform aims to combat election fraud with unprecedented transparency and security.",
  },
  {
    title: "Breakthrough in Renewable Energy Could Change the Game",
    category: "Science",
    date: "May 14, 2025",
    summary:
      "Scientists announce a new solar panel technology that doubles efficiency while reducing costs dramatically.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050d1b] text-white">
      <HeroSection />
      <TopHeadlinesTicker />
      <NewsCategories />
       <LatestNews />

      {/* Top Headlines */}
      <section className="bg-[#0f1526] border-t border-b border-[#00ffc2]/30 py-3">
        <div className="flex space-x-6 px-6 overflow-x-auto text-[#00ffc2] uppercase tracking-wide text-sm">
          {sampleHeadlines.map((news, idx) => (
            <span key={idx} className="hover:underline cursor-pointer">
              {news.title}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Articles */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6 text-[#00ffc2]">
          Featured Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {sampleHeadlines.map((news, idx) => (
            <motion.article
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-[#0d101f]/70 p-6 rounded-lg border border-[#00ffc2]/20 hover:shadow-cyan-500/50"
            >
              <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
              <p className="text-sm text-[#00ffc2]/80 mb-1">
                {news.category} — {news.date}
              </p>
              <p className="text-gray-300">{news.summary}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
