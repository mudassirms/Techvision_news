"use client";

import React from "react";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#050d1b] text-white py-10 px-6 border-t border-cyan-600/20 select-none">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-12 lg:gap-24">
        {/* Logo & About */}
        <div className="lg:w-1/3 flex flex-col items-start">
          <Link href="/" className="mb-4">
            <img
              src="/logo.png"
              alt="The Visionary News Logo"
              className="h-20 sm:h-28 w-auto object-contain transition-all duration-300 filter drop-shadow-cyan"
            />
          </Link>
          <p className="text-gray-400 max-w-xs leading-relaxed tracking-wide font-sans">
            The Visionary News delivers the latest breaking stories, deep analysis, and trusted journalism with a futuristic touch.
          </p>
          <div className="flex space-x-6 text-xl mt-6 text-cyan-400">
            {[{
              Icon: FaFacebookF,
              href: "https://www.facebook.com/TheVisionaryNews",
              label: "Facebook"
            },{
              Icon: FaTwitter,
              href: "https://twitter.com/TheVisionaryNews",
              label: "Twitter"
            },{
              Icon: FaInstagram,
              href: "https://www.instagram.com/TheVisionaryNews",
              label: "Instagram"
            },{
              Icon: FaYoutube,
              href: "https://www.youtube.com/TheVisionaryNews",
              label: "YouTube"
            }].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-cyan-300 transition duration-300 hover:drop-shadow-cyan"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Editorial */}
        <div className="min-w-[160px]">
          <h4 className="font-semibold mb-5 text-cyan-400 tracking-wide uppercase text-sm">
            Editorial
          </h4>
          <ul className="space-y-4 text-gray-400 text-sm font-sans tracking-wide">
            {[
              { name: "About Us", href: "/about" },
              { name: "Contact Us", href: "/contact" },
              { name: "Contributors", href: "/contributors" },
              { name: "Privacy Policy", href: "/privacy-policy" },
              { name: "Terms of Service", href: "/terms-of-service" },
            ].map(({ name, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  className="hover:text-cyan-300 transition duration-300"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div className="min-w-[160px]">
          <h4 className="font-semibold mb-5 text-cyan-400 tracking-wide uppercase text-sm">
            Categories
          </h4>
          <ul className="space-y-4 text-gray-400 text-sm font-sans tracking-wide">
            {[
              { name: "Politics", href: "/category/politics" },
              { name: "Technology", href: "/category/technology" },
              { name: "Business", href: "/category/business" },
              { name: "Sports", href: "/category/sports" },
              { name: "Culture", href: "/category/culture" },
            ].map(({ name, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  className="hover:text-cyan-300 transition duration-300"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Subscribe */}
        <div className="min-w-[260px]">
          <h4 className="font-semibold mb-5 text-cyan-400 tracking-wide uppercase text-sm">
            Subscribe
          </h4>
          <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-xs tracking-wide font-sans">
            Get the latest news delivered straight to your inbox.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed!");
            }}
            className="flex flex-col space-y-3"
          >
            <input
              type="email"
              placeholder="Your email address"
              required
              className="px-4 py-3 rounded-md bg-[#0a1224]/90 border border-cyan-700 placeholder-gray-500 text-white font-sans tracking-wide focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-75 transition"
            />
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 shadow-neon-md transition rounded-md py-3 font-semibold tracking-wide"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-cyan-700/30 mt-10 pt-6 text-center text-gray-500 px-4 text-xs sm:text-sm tracking-wide font-mono">
        <p>
          © 2025{" "}
          <span className="text-cyan-400 font-semibold tracking-wide">The Visionary News</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
