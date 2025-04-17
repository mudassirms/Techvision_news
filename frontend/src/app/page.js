"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Services from '../components/Service';
import ContactForm from '../components/ContactForm';
import IntelligentBusinessSection from "@/components/IntelligentBusinessSection";
import AnimatedPosterSection from "@/components/AnimatedPosterSection";
import WaveSection from "../components/WaveSection";
import NeuralNetworkBackground from "../components/NeuralNetworkBackground";
import HUDDivider from "../components/HUDDivider";
import FutureHUD from "../components/FutureHUD"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050d1b] text-white scroll-smooth overflow-auto font-sans">
      {/* ✅ Navbar */}
      <main className="flex-grow">
        <Hero />
        <FutureHUD/>
        {/* <WaveSection /> */}

        {/* ✅ About Section */}
        <section id="about" className="px-7 md:px-10 pt-16 pb-4 scroll-mt-24">
          <div className="w-full relative bg-[#0d101f]/70 p-8 md:p-10 rounded-3xl shadow-xl backdrop-blur-xl border border-[#00ffc2]/30 overflow-hidden group">
            {/* Glowing animated backdrop */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#ff004f]/10 via-[#00ffe5]/5 to-[#0000ff]/10 rounded-3xl blur-xl opacity-70 group-hover:blur-2xl transition-all duration-500" />

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative z-10 text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-[#00ffc2] via-[#630628] to-[#00bfff] bg-clip-text text-transparent animate-text-glow"
            >
              Who We Are?
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.9 }}
              className="relative z-10 mt-6 text-lg text-gray-300 text-center max-w-4xl mx-auto leading-relaxed"
            >
              At <span className="text-[#00ffc2] font-semibold">TechVisionary Studio</span>, we are a futuristic AI-native studio on a mission to build intelligent, connected systems that reshape how businesses grow, operate, and scale. With expertise across <span className="text-pink-400">AI</span>, <span className="text-blue-400">data science</span>, and <span className="text-cyan-300">next-gen web solutions</span>, we architect human-centered experiences and digital transformations that are scalable, sustainable, and intelligent by design.
            </motion.p>

            {/* Vision + Mission - Futuristic flex row */}
            <div className="relative z-10 mt-12 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-[#10172a]/70 backdrop-blur border-l-4 border-[#00ffc2] p-6 rounded-xl hover:shadow-cyan-500/20 transition-all"
              >
                <h3 className="text-2xl font-semibold text-[#c77a22] mb-3">Our Vision</h3>
                <p className="text-gray-300">
                  To become a global hub of intelligent software innovation — one where AI, design, and engineering merge to empower businesses to lead with foresight, agility, and clarity in an ever-evolving digital landscape.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-[#10172a]/70 backdrop-blur border-l-4 border-pink-400 p-6 rounded-xl hover:shadow-pink-500/20 transition-all"
              >
                <h3 className="text-2xl font-semibold text-[#1a3884] mb-3">Our Mission</h3>
                <p className="text-gray-300">
                  We strive to build purposeful, AI-powered systems that augment human capabilities, automate complexity, and deliver measurable impact. From smart data pipelines to cognitive UX — we’re here to push boundaries and spark transformation.
                </p>
                <p className="text-gray-300 mt-2">
                  At TechVisionary, intelligence isn’t an add-on — it’s the core of everything we engineer.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <WaveSection />

        {/* 🔥 Poster and AI Sections */}
        <div className="mt-2">
          <AnimatedPosterSection />
        </div>

        {/* ✅ Services Section */}
        <section id="services" className="scroll-mt-24">
          <Services />
        </section>

        {/* ✅ Banner Section */}
        <section className="w-full py-20 bg-[#1a1a2e]/20 text-white text-center backdrop-blur">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Empowering Progress Through Smart Technology.
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              We build solutions that don’t just adapt — they lead.
            </p>
            <a
              href="#products"
              className="inline-block px-8 py-3 bg-[#00ffc2] hover:bg-cyan-300 text-black font-semibold rounded-full shadow-md transition"
            >
              Discover Our Products
            </a>
          </div>
        </section>

        {/* ✅ Product Section */}
        {/* <Product /> */}
        <HUDDivider />
        <IntelligentBusinessSection />

        {/* ✅ Neural Network Background Section */}
        <NeuralNetworkBackground />

        {/* ✅ Contact Section */}
        <section
  id="contact"
  className="px-6 md:px-10 py-16 bg-[#1a1a2e]/40 text-center rounded-lg shadow-md mx-4 md:mx-10 backdrop-blur border border-[#00ffc2]/20 scroll-mt-24"
>
  <h2 className="text-4xl font-bold text-[#00ffc2]">Contact Us</h2>
  <p className="text-gray-300 mt-4">
    We’d love to hear from you! Reach out for inquiries and collaborations.
  </p>

  {/* ✨ Composite Background */}
  <div className="relative w-full min-h-[600px] mt-10 rounded-xl overflow-hidden border border-cyan-500/20 shadow-lg">
    {/* HUD Layer */}
    <div className="absolute inset-0 z-0">
      <FutureHUD />
    </div>

    {/* Neural Network Layer */}
    <div className="absolute inset-0 z-0 opacity-50">
      <FutureHUD />
    </div>

    {/* Contact Form */}
    <div className="relative z-10 max-w-xl mx-auto p-4">
      <ContactForm />
    </div>
  </div>
</section>

      </main>
    </div>
  );
}
