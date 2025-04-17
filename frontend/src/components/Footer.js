"use client";

import React from "react";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#050d1b] text-white py-6 px-4 border-t border-[#1f2a3a] text-sm">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10 lg:gap-16">
        {/* Logo & About */}
        <div className="lg:w-1/3 flex flex-col items-start">
          <Link href="/" className="mb-2">
            <img
              src="/Logo.png"
              alt="Maverick Ignite Logo"
              className="h-24 sm:h-45 w-auto object-contain transition-all duration-300"
            />
          </Link>

          <div className="flex space-x-4 text-xl mt-2">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Info Columns */}
        <div className="flex flex-col sm:flex-row justify-between flex-1 gap-8">
          {/* Company */}
          <div className="min-w-[150px]">
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#about" className="hover:text-cyan-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="min-w-[220px]">
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
              <li>
                <a href="#ai" className="hover:text-cyan-300">
                  AI-Based Applications
                </a>
              </li>
              <li>
                <a href="#database" className="hover:text-cyan-300">
                  Web Applications all types
                </a>
              </li>
              <li>
                <a href="#integration" className="hover:text-cyan-300">
                  Data Science Applications
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="min-w-[220px]">
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <p className="text-gray-300 text-sm">
              Email:{" "}
              <a
                href="mailto:techvisionarystudio@gmail.com"
                className="hover:text-cyan-300"
              >
                techvisionarystudio@gmail.com
              </a>
            </p>
            <p className="text-gray-300 text-sm mt-2">
              Phone:{" "}
              <a href="tel:+919036666910" className="hover:text-cyan-300">
                +91 9036666910
              </a>
            </p>
            <p className="text-gray-300 text-sm mt-2">
              Address:{" "}
              <a
                href="https://www.google.com/maps/place/3rd+Floor,+Vaishnavi+Signature,+Panathur+Main+Rd,+Bengaluru,+Karnataka+560103"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-300"
              >
                No 16 HIG-A Building No.20 3rd Floor KHB colony shirke layout,
                Kengeri, Bangalore 560060
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-[#1f2a3a] mt-6 pt-4 text-center text-gray-400 px-4 text-xs sm:text-sm">
        <p className="mb-2">
          © 2025{" "}
          <span className="text-white font-semibold">
            TechVisonary Studio
          </span>
          . All rights reserved.
        </p>

        <div className="flex justify-center items-center gap-3 mb-1">
          <Link href="/privacy-policy" className="hover:text-cyan-300">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href="/terms-of-service" className="hover:text-cyan-300">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
