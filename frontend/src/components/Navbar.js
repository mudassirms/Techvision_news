"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState({});
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Products", href: "#products" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
    { name: "Careers", href: "/careers" },
  ];

  const dropdownItems = {
    Products: [
      { name: "DataSense", href: "#products", id: "DataSense" },
      { name: "SupportSense", href: "#products", id: "SupportSense" },
      { name: "NotifyBot", href: "#products", id: "NotifyBot" },
    ],
    Services: [
      { name: "AI Software", href: "#services" },
      { name: "Data Management", href: "#services" },
      { name: "Consulting", href: "#services" },
    ],
    Careers: [
      { name: "Open Roles", href: "/careers" },
      { name: "Culture", href: "/culture" },
    ],
  };

  const isDropdown = (name) => Object.keys(dropdownItems).includes(name);

  const handleProductClick = (id) => {
    setOpenDropdown(null);
    setIsMenuOpen(false);
    setTimeout(() => {
      const section = document.getElementById("products");
      section?.scrollIntoView({ behavior: "smooth" });
      const openEvent = new CustomEvent("openProductModal", { detail: id });
      window.dispatchEvent(openEvent);
    }, 300);
  };

  const handleServiceClick = () => {
    setOpenDropdown(null);
    setIsMenuOpen(false);
    setTimeout(() => {
      const section = document.getElementById("services");
      section?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const toggleMobileDropdown = (itemName) => {
    setOpenMobileDropdowns((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050d1b]/90 backdrop-blur-md py-2"
          : "bg-[#050d1b] py-2"
      } border-b border-[#1f2a3a]`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
        <img
              src="/Newlogo.png"
              alt="Maverick Ignite Logo"
              className="h-12 sm:h-16 w-auto object-contain block"
            />
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-teal-300 to-green-400 bg-clip-text text-transparent">
              MaverickIgnite
            </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center space-x-4 xl:space-x-6 text-sm font-medium text-white"
          ref={dropdownRef}
        >
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              {isDropdown(item.name) ? (
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.name ? null : item.name)
                  }
                  className="flex items-center gap-1 nav-link tracking-wide cursor-pointer"
                >
                  {item.name}
                  <ChevronDown size={16} />
                </button>
              ) : (
                <a
                  href={item.href}
                  className="nav-link tracking-wide cursor-pointer"
                >
                  {item.name}
                </a>
              )}

              {openDropdown === item.name && (
                <div className="absolute top-full left-0 mt-2 bg-[#0a1224] shadow-lg rounded-md py-2 w-48 z-50">
                  {dropdownItems[item.name].map((subItem) =>
                    item.name === "Products" ? (
                      <button
                        key={subItem.name}
                        onClick={() => handleProductClick(subItem.id)}
                        className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-cyan-700/30 transition"
                      >
                        {subItem.name}
                      </button>
                    ) : item.name === "Services" ? (
                      <button
                        key={subItem.name}
                        onClick={handleServiceClick}
                        className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-cyan-700/30 transition"
                      >
                        {subItem.name}
                      </button>
                    ) : (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setOpenDropdown(null);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-cyan-700/30 transition"
                      >
                        {subItem.name}
                      </a>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#050d1b]/95 backdrop-blur-md text-white px-5 py-4 space-y-4 transition-all duration-300">
          {navItems.map((item) => (
            <div key={item.name}>
              {isDropdown(item.name) ? (
                <button
                  onClick={() => toggleMobileDropdown(item.name)}
                  className="flex justify-between items-center w-full text-sm tracking-wide"
                >
                  <span>{item.name}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      openMobileDropdowns[item.name] ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block nav-link text-sm tracking-wide"
                >
                  {item.name}
                </a>
              )}

              {isDropdown(item.name) && openMobileDropdowns[item.name] && (
                <div className="ml-4 mt-1 space-y-2">
                  {dropdownItems[item.name].map((subItem) =>
                    item.name === "Products" ? (
                      <button
                        key={subItem.name}
                        onClick={() => handleProductClick(subItem.id)}
                        className="block text-left text-sm text-gray-300 hover:text-white"
                      >
                        {subItem.name}
                      </button>
                    ) : item.name === "Services" ? (
                      <button
                        key={subItem.name}
                        onClick={handleServiceClick}
                        className="block text-left text-sm text-gray-300 hover:text-white"
                      >
                        {subItem.name}
                      </button>
                    ) : (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block text-sm text-gray-300 hover:text-white"
                      >
                        {subItem.name}
                      </a>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}
