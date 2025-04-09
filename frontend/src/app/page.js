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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050d1b] text-white scroll-smooth overflow-auto font-sans">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Main Content */}
      <main className="flex-grow">

        {/* ✅ Hero Section - Updated for Glowing AI Look */}
        <header
  id="home"
  className="relative w-full min-h-screen flex items-center justify-center bg-[#050d1b] px-4 sm:px-6 lg:px-12 pt-24 pb-10 overflow-hidden"
>
  {/* Background glow */}
  <div className="absolute inset-0 z-0 bg-gradient-to-tr from-[#00fff7]/10 via-[#00ffc2]/5 to-transparent pointer-events-none" />

  {/* Main content container */}
  <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl gap-10">
    
    {/* Text Section */}
    <div className="text-left max-w-lg w-full">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-cyan-300 via-green-300 to-teal-400 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(0,255,200,0.4)] animate-glow">
        Powering the Future with AI
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6">
        Software Development • AI Integration • Data Solutions • System Modernization
      </p>
      <button className="bg-gradient-to-r from-cyan-400 to-cyan-300 text-black font-semibold py-2 px-6 rounded-full hover:opacity-90 transition duration-300 shadow-lg">
        Get Started
      </button>
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

        {/* ✅ About Section */}
        <section id="about" className="px-6 md:px-10 pt-16 pb-4 scroll-mt-24">
          <div className="w-full bg-[#1a1a2e]/40 p-6 rounded-lg shadow-md backdrop-blur border border-[#00ffc2]/20">
            <h2 className="text-4xl font-bold text-[#00ffc2] text-center">Who We Are?</h2>
            <p className="mt-4 text-lg text-gray-300 text-center max-w-3xl mx-auto">
              We are a technology-driven company specializing in software development, AI integration, and scalable data solutions that empower businesses to innovate and grow.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-[#0b1628] p-6 rounded-xl border border-[#00ffc2]/20 hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-semibold text-[#00ffc2] mb-3">Our Vision</h3>
                <p className="text-gray-300">
                  To drive digital transformation by creating intelligent, efficient, and scalable technology solutions that solve real-world business challenges.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-[#0b1628] p-6 rounded-xl border border-[#00ffc2]/20 hover:shadow-lg transition"
              >
                <h3 className="text-2xl font-semibold text-[#00ffc2] mb-3">Our Mission</h3>
                <p className="text-gray-300">
                  To empower businesses with cutting-edge software, AI-driven automation, and robust data strategies that lead to long-term success.
                </p>
              </motion.div>
            </div>

            <div className="mt-10">
              <h3 className="text-2xl font-bold text-[#00ffc2]">How We Help Businesses</h3>
              <ul className="mt-4 text-gray-100 list-disc list-inside space-y-2">
                <li><span className="text-white font-semibold">Need a software solution?</span> We develop web-based enterprise applications.</li>
                <li><span className="text-white font-semibold">Want to integrate AI?</span> We embed ML models and automation into apps.</li>
                <li><span className="text-white font-semibold">Automate workflows?</span> We simplify operations with smart tools.</li>
                <li><span className="text-white font-semibold">Data overload?</span> We manage big data and cloud architecture efficiently.</li>
              </ul>
            </div>
          </div>
        </section>

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
                <div key={idx} className="bg-[#1a1a2e]/40 p-6 rounded-lg shadow-md backdrop-blur border border-[#00ffc2]/20">
                  <p className="text-gray-200">{descriptions[idx]}</p>
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
