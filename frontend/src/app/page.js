"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Services from '../components/Service';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Product from '../components/Product';
import IntelligentBusinessSection from "@/components/IntelligentBusinessSection";
import AnimatedPosterSection from "@/components/AnimatedPosterSection";

import WaveSection from "../components/WaveSection";
import HUDDivider from "../components/HUDDivider";
// [import NeuralNetworkBackground from "@/components/NeuralNetworkBackground";]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050d1b] text-white scroll-smooth overflow-auto font-sans">
      {/* ✅ Navbar */}
      <Navbar />
      {/* ✅ Main Content */}
      <main className="flex-grow">


        {/* ✅ Hero Section */}
        <header
          id="home"
          className="relative w-full min-h-screen flex items-center justify-center bg-[#050d1b] px-4 sm:px-6 lg:px-12 pt-12 pb-10 overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#00fff7]/10 via-[#00ffc2]/5 to-transparent pointer-events-none" />

          {/* Main content container */}
          <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl gap-10">
            
            {/* Text Section */}
            <div className="text-left max-w-l w-full">
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


            </div>

            {/* Floating AI Image */}
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md flex justify-center">
              <div className="absolute w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] bg-[#00fff7] blur-[80px] opacity-20 right-0 top-1/2 transform -translate-y-1/2 z-0 rounded-full" />
              <img
                src="/Image.png"
                alt="Floating AI Visual"
                className="relative w-full animate-float z-10"
              />
            </div>
          </div>

          {/* Scroll Arrow */}
          <a
            href="#about"
            className="absolute bottom-6 sm:bottom-10 animate-bounce text-gray-300 hover:text-[#00fff7] transition duration-300 z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
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

  
        <WaveSection />

        {/* ✅ About Section */}
        <section id="about" className="px-7 md:px-10 pt-16 pb-4 scroll-mt-24">
          <div className="w-full bg-[#1a1a2e]/40 p-6 rounded-lg shadow-md backdrop-blur border border-[#00ffc2]/20">
            <h2 className="text-4xl font-bold text-[#00ffc2] text-center">Who We Are?</h2>
            <p className="mt-4 text-lg text-gray-300 text-center max-w-3xl mx-auto">
            𝗠𝗮𝘃𝗲𝗿𝗶𝗰𝗸𝗜𝗴𝗻𝗶𝘁𝗲 𝗦𝗼𝗹𝘂𝘁𝗶𝗼𝗻𝘀 𝗟𝗟𝗣 is a forward-thinking, AI-first technology company dedicated to building intelligent software solutions that empower businesses to thrive in the digital era. We specialize in 𝗔𝗜-𝗽𝗼𝘄𝗲𝗿𝗲𝗱 𝗮𝗽𝗽𝗹𝗶𝗰𝗮𝘁𝗶𝗼𝗻 𝗱𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁, 𝗔𝗜 𝗶𝗻𝘁𝗲𝗴𝗿𝗮𝘁𝗶𝗼𝗻, 𝗲𝗻𝘁𝗲𝗿𝗽𝗿𝗶𝘀𝗲 𝘀𝗼𝗳𝘁𝘄𝗮𝗿𝗲, 𝗮𝗻𝗱 𝘀𝗺𝗮𝗿𝘁 𝗱𝗮𝘁𝗮 𝗶𝗻𝗳𝗿𝗮𝘀𝘁𝗿𝘂𝗰𝘁𝘂𝗿𝗲 that fuel innovation, accelerate growth, and streamline operations.        </p>

            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-[#0b1628] p-6 rounded-xl border border-[#00ffc2]/20 hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-semibold text-[#00ffc2] mb-3">Our Vision</h3>
                <ul className="mt-4 text-gray-100 list-inside space-y-2">
                
                <li><span className="text-white font-semibold">To become a global leader in intelligent software innovation — enabling companies of all sizes to embrace the power of AI, enterprise software engineering, and data-driven decision making through seamless integration, automation, and digital transformation</span></li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-[#0b1628] p-6 rounded-xl border border-[#00ffc2]/20 hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-semibold text-[#00ffc2] mb-4">Our Mission</h3>
                <ul className="mt-4 text-gray-100 list-disc list-inside space-y-2">
                <li><span className="text-white font-semibold">To empower businesses through AI-driven software development, enterprise-grade solutions, and modern data engineering.</span></li>
                <li><span className="text-white font-semibold">We aim to simplify complexity, automate with purpose, and deliver high-impact digital solutions that fuel innovation, scalability, and long-term growth.</span></li>
                
                </ul>
              </motion.div>
            </div>
            <div className="text-center italian-subheading text-xl md:text-2xl text-white my-8 px-2">
            At MaverickIgnite, we don’t just build software — we engineer possibilities. Our team is driven by curiosity, collaboration, and a deep belief in the transformative power of technology</div>
            
          </div>
          <div className="w-full bg-[#1a1a2e]/40 p-6 rounded-lg shadow-md backdrop-blur border border-[#00ffc2]/20">
            <h3 className="text-2xl font-bold text-[#00ffc2]">How We Help Businesses</h3>
              <ul className="mt-4 text-gray-100  list-inside space-y-2">
              <div className="text-left italian-subheading text-xl md:text-2xl text-white my-8 px-1">
              At 𝗠𝗮𝘃𝗲𝗿𝗶𝗰𝗸𝗜𝗴𝗻𝗶𝘁𝗲, AI is at the core of everything we build. We empower businesses to innovate, automate, and scale through intelligent software solutions tailored to real-world challenges.</div>
              <li>
  <p className="text-white font-semibold">Need intelligent software?</p>
  <p className="text-gray-300 mt-1 ml-4">We build AI-powered, web-based enterprise applications that are secure, scalable, and smart.</p>
</li>
                <li>
  <p className="text-white font-semibold">Want to integrate AI?</p>
  <p className="text-gray-300 mt-1 ml-4">We embed machine learning models and intelligent automation into your workflows to drive smarter decisions.</p>
</li>
<li>
  <p className="text-white font-semibold">Looking to automate processes?</p>
  <p className="text-gray-300 mt-1 ml-4">We streamline operations with smart tools that reduce manual effort and improve efficiency.</p>
</li>
<li>
  <p className="text-white font-semibold">Struggling with data overload?</p>
  <p className="text-gray-300 mt-1 ml-4">We architect big data pipelines and cloud-native systems that turn complex data into actionable insights.</p>
</li>              </ul>
<div className="mt-20 text-center">
  <p className="text-gray-100 text-lg">
    Ready to make your business <span className="text-cyan-400">AI-ready</span>?<br />
    Let’s build the future together.
  </p>
  <div className="mt-4 flex justify-center gap-4">
    <a
      href="#contact"
      className="flex items-center gap-2 px-5 py-2.5 text-sm text-black bg-cyan-400 hover:bg-cyan-300 font-medium rounded-xl shadow-lg shadow-cyan-500/40 transition duration-300"
      >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2.94 6.94a1.5 1.5 0 012.12 0l3.13 3.13 6.6-6.6a1.5 1.5 0 112.12 2.12l-7.66 7.66a1.5 1.5 0 01-2.12 0L2.94 9.06a1.5 1.5 0 010-2.12z" />
      </svg>
      Contact Us
    </a>
    <a
      href="#services"
      className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-900 transition"
    >
      Explore Our Services
    </a>
  </div>
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

        <div className="mt-16">
          <IntelligentBusinessSection />
        </div>
        {/* ✅ Banner Section */}
        <section className="w-full py-20 bg-[#1a1a2e]/20 text-white text-center backdrop-blur">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Transforming Tomorrow with <span className="text-[#00ffc2]">AI</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              We’re bridging innovation and technology to create intelligent solutions that shape the future.
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
        <Product />

        <HUDDivider /> {/* Futuristic HUD divider */}

        {/* ✅ Why Choose Us */}
        <section id="why-us" className="px-6 md:px-10 py-16 scroll-mt-24">
          <h2 className="text-4xl font-bold text-center text-[#00ffc2]">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[...Array(6).keys()].map((_, idx) => {
              const descriptions = [
                "A team of professionals with 10+ years of experience in Java, Spring Boot, Angular, React, and more.",
                "We follow best practices in authentication, encryption, and secure coding to protect applications from threats.",
                "We help businesses scale applications efficiently through microservices architecture and optimized database performance.",
                "Our industry experts provide hands-on training for fresh talent, focusing on technology-specific and product-specific learning.",
                "We handle everything from software development and integration to scaling and support, with 100% transparency.",
                "We adapt to your needs with custom engagement models—project-based, dedicated teams, or long-term support."
              ];
              return (
                <div
  key={idx}
  className="bg-[#1a1a2e]/40 p-6 rounded-lg shadow-md backdrop-blur border border-[#00ffc2]/20 
             hover:shadow-[0_0_15px_#00ffc2] transition-all duration-300 group"
>
  <p className="text-gray-200 group-hover:font-semibold transition-all duration-300">
    {descriptions[idx]}
  </p>
</div>

              );
            })}
          </div>
        </section>

        {/* ✅ Contact Section */}
        <section
          id="contact"
          className="px-6 md:px-10 py-16 bg-[#1a1a2e]/40 text-center rounded-lg shadow-md mx-4 md:mx-10 backdrop-blur border border-[#00ffc2]/20 scroll-mt-24"
        >
          <h2 className="text-4xl font-bold text-[#00ffc2]">Contact Us</h2>
          <p className="text-gray-300 mt-4">
            We’d love to hear from you! Reach out for inquiries and collaborations.
          </p>
          <ContactForm />
        </section>
      </main>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}
