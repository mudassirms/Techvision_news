"use client";
import React from 'react';
import Navbar from '../components/Navbar';
import Services from '../components/Service';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Product from '../components/Product';
import SeamlessSection from '../components/SeamlessSection';
import IntelligentBusinessSection from "@/components/IntelligentBusinessSection";
import AnimatedPosterSection from "@/components/AnimatedPosterSection";

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
          className="relative w-full min-h-screen flex items-center justify-center text-white px-4 scroll-mt-24"
        >
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-10">
            {/* Text Content - Left Side */}
            <div className="z-10 w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fadeIn">
                Powering the Future with <span className="text-[#00fff7]">AI</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 animate-fadeIn delay-200">
                Software Development • AI Integration • Data Solutions • Talent Growth
              </p>
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-[#00fff7] hover:bg-[#00e6d6] text-black font-semibold text-lg rounded-full shadow-lg transition transform hover:scale-105 duration-300 animate-fadeIn delay-500"
              >
                Get Started
              </a>
            </div>
            {/* AI Image with Glow - Right Side */}
            <div className="relative w-full md:w-1/2 flex justify-center items-center">
              {/* Glowing Aura Background */}
              <div className="absolute w-[300px] h-[300px] bg-[#00fff7] blur-[80px] opacity-20 right-0 top-1/2 transform -translate-y-1/2 z-0 rounded-full" />

              <img
                src="/Image.png"
                alt="Floating AI Visual"
                className="relative w-full max-w-xs sm:max-w-sm md:max-w-md animate-float z-10"
              />
            </div>
          </div>

          {/* Scroll Down Arrow */}
          <a
            href="#about"
            className="absolute bottom-6 sm:bottom-10 animate-bounce text-gray-300 hover:text-[#00fff7] transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8 sm:w-10 sm:h-10"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </header>
        {/* ✅ About Section */}
        <section id="about" className="px-6 md:px-10 py-16 scroll-mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Team Collaboration */}
            <div className="bg-[#1a1a2e]/40 p-6 rounded-lg shadow-md backdrop-blur border border-[#00ffc2]/20">
              <h3 className="text-3xl font-bold text-[#00ffc2]">Team Collaboration</h3>
              <p className="mt-4 text-gray-200">
                Our collaborative approach ensures innovative problem-solving, seamless project execution, and outstanding results.
              </p>
              <ul className="mt-4 text-gray-100 list-disc list-inside space-y-2">
                <li>Encouraging open communication and idea-sharing.</li>
                <li>Leveraging diverse expertise to drive success.</li>
                <li>Adopting agile methodologies for efficient workflows.</li>
              </ul>
            </div>

            {/* Who We Are */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-bold text-[#00ffc2]">Who We Are?</h2>
                <p className="mt-4 text-lg text-gray-300 space-y-4">
                  We are a technology-driven company specializing in software development, AI integration, and scalable data solutions that empower businesses to innovate and grow.
                  <br /><br />
                  Our vision is to drive digital transformation by creating intelligent, efficient, and scalable technology solutions that solve real-world business challenges.
                  <br /><br />
                  Our mission is to empower businesses with cutting-edge software, AI-driven automation, and robust data strategies.
                </p>
              </div>

              <div className="bg-[#1a1a2e]/40 p-6 rounded-lg shadow-md mt-6 backdrop-blur border border-[#00ffc2]/20">
                <h3 className="text-2xl font-bold text-[#00ffc2]">How We Help Businesses</h3>
                <ul className="mt-4 text-gray-100 list-disc list-inside space-y-2">
                  <li><span className="text-white font-semibold">Need a software solution?</span> We develop web-based enterprise applications.</li>
                  <li><span className="text-white font-semibold">Want to integrate AI?</span> We embed ML models and automation into apps.</li>
                  <li><span className="text-white font-semibold">Automate workflows?</span> We simplify operations with smart tools.</li>
                  <li><span className="text-white font-semibold">Data overload?</span> We manage big data and cloud architecture efficiently.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
         {/* 🔥 This new section */}
      <AnimatedPosterSection />


        <div className="mt-16">
  <SeamlessSection /> 
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
              href="#services"
              className="inline-block px-8 py-3 bg-[#00ffc2] hover:bg-cyan-300 text-black font-semibold rounded-full shadow-md transition"
            >
              Discover Our Services
            </a>
          </div>
        </section>

        {/* ✅ Services Section */}
        <section id="services" className="scroll-mt-24">
          <Services />
        </section>

        {/* ✅ Why Choose Us */}
        <section id="why-us" className="px-6 md:px-10 py-16 scroll-mt-24">
          <h2 className="text-4xl font-bold text-center text-[#00ffc2]">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {[
              "A team of professionals with 10+ years of experience in Java, Spring Boot, Angular, React, and more.",
              "We follow best practices in authentication, encryption, and secure coding to protect applications from threats.",
              "We help businesses scale applications efficiently through microservices architecture and optimized database performance.",
              "Our industry experts provide hands-on training for fresh talent, focusing on technology-specific and product-specific learning.",
              "We handle everything from software development and integration to scaling and support, with 100% transparency.",
              "We adapt to your needs with custom engagement models—project-based, dedicated teams, or long-term support.",
            ].map((desc, idx) => (
              <div key={idx} className="bg-[#1a1a2e]/40 p-6 rounded-lg shadow-md backdrop-blur border border-[#00ffc2]/20">
                <p className="text-gray-200">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ Product Section */}
        <Product />

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
