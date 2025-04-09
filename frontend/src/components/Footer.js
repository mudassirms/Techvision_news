"use client";

import React from "react";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#050d1b] text-white py-10 px-4 border-t border-[#1f2a3a] text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <Link href="/" className="flex items-center mb-3 space-x-2">
            <img
              src="/Newlogo.png"
              alt="Maverick Ignite Logo"
              className="h-12 sm:h-16 w-auto object-contain block"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-green-400 bg-clip-text text-transparent">
              MaverickIgnite
            </span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed">
            Maverick Ignite LLP specializes in AI software development, data
            management, and system integration solutions.
          </p>
          <div className="flex space-x-4 mt-4 text-xl">
            <a
              href="https://www.linkedin.com/company/maverick-ignite-solutions-llp/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#about" className="hover:text-cyan-300">About Us</a></li>
            {/* <li><a href="#team" className="hover:text-cyan-300">Our Team</a></li> */}
            <li><Link href="/careers" className="hover:text-cyan-300">Careers</Link></li>
            <li><a href="#contact" className="hover:text-cyan-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#ai" className="hover:text-cyan-300">AI Software Development</a></li>
            <li><a href="#data" className="hover:text-cyan-300">Data Management</a></li>
            <li><a href="#integration" className="hover:text-cyan-300">System Integration</a></li>
            <li><a href="#consulting" className="hover:text-cyan-300">AI Consulting</a></li>
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
            Address: {" "}
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
      <div className="border-t border-[#1f2a3a] mt-12 pt-8 text-center text-gray-400 text-sm px-4">
        <p className="mb-2">
          © 2025 <span className="text-white font-semibold">Maverick Ignite Solutions LLP</span>. All rights reserved.
        </p>
        <div className="flex justify-center gap-3 flex-wrap text-xs sm:text-sm">
          <Link href="/privacy-policy" className="hover:text-cyan-300">Privacy Policy</Link>
          <span>|</span>
          <Link href="/terms-of-service" className="hover:text-cyan-300">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
