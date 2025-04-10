"use client";

import React from "react";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#050d1b] text-white py-8 px-6 border-t border-[#1f2a3a] text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <Link href="/" className="flex items-center space-x-3 mb-3">
            <img
              src="/Newlogo4.png"
              alt="Maverick Ignite Logo"
              className="h-10 sm:h-14 w-auto object-contain"
            />
            <div className="leading-tight">
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-green-400 bg-clip-text text-transparent">
                MAVERICK IGNITE
              </h1>
              <p className="text-sm font-bold text-gray-300 -mt-1 tracking-wide">
                SOLUTIONS LLP
              </p>
            </div>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mt-2">
            MaverickIgnite Solutions LLP specializes in AI software development,
            data management, and system integration solutions.
          </p>
          <div className="flex space-x-4 mt-4 text-xl">
            <a href="https://www.linkedin.com/company/maverick-ignite-solutions-llp/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
              <FaTwitter />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#about" className="hover:text-cyan-300">About Us</a></li>
            <li><Link href="/careers" className="hover:text-cyan-300">Careers</Link></li>
            <li><a href="#contact" className="hover:text-cyan-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#ai" className="hover:text-cyan-300">AI-Driven Software Development</a></li>
            <li><a href="#data" className="hover:text-cyan-300">Enterprise Software Development</a></li>
            <li><a href="#database" className="hover:text-cyan-300">Database Management & Smart Optimization</a></li>
            <li><a href="#data-eng" className="hover:text-cyan-300">Data Engineering & Analytics</a></li>
            <li><a href="#integration" className="hover:text-cyan-300">System Integration & API Engineering</a></li>
            <li><a href="#product-development" className="hover:text-cyan-300">Full-Cycle Product Development</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-3">Get In Touch</h4>
          <p className="text-gray-300 text-sm">
            Email: <a href="mailto:info@maverickignite.com" className="hover:text-cyan-300">info@maverickignite.com</a>
          </p>
          <p className="text-gray-300 text-sm mt-2">
            Phone: <a href="tel:+919036666910" className="hover:text-cyan-300">+91 9036666910</a>
          </p>
          <p className="text-gray-300 text-sm mt-2">
            Address:{" "}
            <a
              href="https://www.google.com/maps/place/3rd+Floor,+Vaishnavi+Signature,+Panathur+Main+Rd,+Bengaluru,+Karnataka+560103"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300"
            >
              No 16 HIG-A Building No.20 3rd Floor KHB colony shirke layout Kengeri Bangalore 560060
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-[#1f2a3a] mt-8 pt-4 text-center text-gray-400 px-4 text-xs sm:text-sm">
        <p className="mb-3">
          © 2025 <span className="text-white font-semibold">MaverickIgnite Solutions LLP</span>. All rights reserved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4">
          <Link href="/privacy-policy" className="hover:text-cyan-300">Privacy Policy</Link>
          <span className="hidden sm:inline">|</span>
          <Link href="/terms-of-service" className="hover:text-cyan-300">Terms of Service</Link>
          <span className="text-gray-500 sm:ml-auto sm:pr-4 mt-2 sm:mt-0">
            Crafted by <span className="text-cyan-300 font-medium">Mudassir Sanderwale</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
