"use client";

import React from "react";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#050d1b] text-white py-8 px-6 border-t border-[#1f2a3a] text-sm">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
        {/* Logo & About */}
        <div className="lg:w-1/3">
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
            <a
              href="https://www.linkedin.com/company/maverick-ignite-solutions-llp/"
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
                <Link href="/careers" className="hover:text-cyan-300">
                  Careers
                </Link>
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
                  AI-Driven Software Development
                </a>
              </li>
              <li>
                <a href="#data" className="hover:text-cyan-300">
                  Enterprise Software Development
                </a>
              </li>
              <li>
                <a href="#database" className="hover:text-cyan-300">
                  Database Management & Smart Optimization
                </a>
              </li>
              <li>
                <a href="#data-eng" className="hover:text-cyan-300">
                  Data Engineering & Analytics
                </a>
              </li>
              <li>
                <a href="#integration" className="hover:text-cyan-300">
                  System Integration & API Engineering
                </a>
              </li>
              <li>
                <a href="#product-development" className="hover:text-cyan-300">
                  Full-Cycle Product Development
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
                href="mailto:info@maverickignite.com"
                className="hover:text-cyan-300"
              >
                info@maverickignite.com
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
                No 16 HIG-A Building No.20 3rd Floor KHB colony shirke layout
                Kengeri Bangalore 560060
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-[#1f2a3a] mt-8 pt-4 text-center text-gray-400 px-4 text-xs sm:text-sm">
        <p className="mb-3">
          © 2025{" "}
          <span className="text-white font-semibold">
            MAVERICK IGNITE SOLUTIONS LLP
          </span>
          . All rights reserved.
        </p>

        <div className="flex justify-center items-center gap-3 mb-2">
          <Link href="/privacy-policy" className="hover:text-cyan-300">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link href="/terms-of-service" className="hover:text-cyan-300">
            Terms of Service
          </Link>
        </div>

        <div className="text-right">
          Crafted by{" "}
          <a
            href="https://www.linkedin.com/in/mudassir269251"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 font-medium hover:underline"
          >
            Mudassir Sanderwale
          </a>
        </div>
      </div>
    </footer>
  );
}
