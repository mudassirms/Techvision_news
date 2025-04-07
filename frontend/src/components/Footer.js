"use client";
import React from "react";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#050d1b] text-white py-10 px-4 border-t border-[#1f2a3a] text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & About */}
        <div>
          <Link href="/" className="flex items-center mb-3">
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
          <div className="flex space-x-3 mt-4">
            <a
              href="https://www.linkedin.com/company/maverick-ignite-solutions-llp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-cyan-400" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-cyan-400" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-cyan-400" />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#about" className="hover:text-cyan-300">About Us</a></li>
            <li><a href="#team" className="hover:text-cyan-300">Our Team</a></li>
            <li><Link href="/careers" className="hover:text-cyan-300">Careers</Link></li>
            <li><a href="#contact" className="hover:text-cyan-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/services/ai-development" className="hover:text-cyan-300">AI Software Development</Link></li>
            <li><Link href="/services/data-management" className="hover:text-cyan-300">Data Management</Link></li>
            <li><Link href="/services/system-integration" className="hover:text-cyan-300">System Integration</Link></li>
            <li><Link href="/services/ai-consulting" className="hover:text-cyan-300">AI Consulting</Link></li>
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
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-[#1f2a3a] mt-10 pt-6 text-center text-gray-500 text-xs">
        <p>© 2025 <span className="text-white font-semibold">Maverick Ignite Solution LLP</span>. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2 flex-wrap">
          <Link href="/privacy-policy" className="hover:text-cyan-300">Privacy Policy</Link>
          <span>|</span>
          <Link href="/terms-of-service" className="hover:text-cyan-300">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
