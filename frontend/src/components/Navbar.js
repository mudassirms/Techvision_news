"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { useLanguage } from "../components/LanguageContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isLangDropdownOpenDesktop, setIsLangDropdownOpenDesktop] = useState(false);
  const [isLangDropdownOpenMobile, setIsLangDropdownOpenMobile] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  // Use changeLanguage, not setLanguage, from your context
  const { language, changeLanguage, availableLanguages, t } = useLanguage();

  const langDropdownRefDesktop = useRef(null);
  const langDropdownRefMobile = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sectionIds = ["home", "politics", "technology", "economy", "culture", "contact"];
      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            setActiveSection(`#${id}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (event) => {
      if (
        langDropdownRefDesktop.current &&
        !langDropdownRefDesktop.current.contains(event.target)
      ) {
        setIsLangDropdownOpenDesktop(false);
      }
      if (
        langDropdownRefMobile.current &&
        !langDropdownRefMobile.current.contains(event.target)
      ) {
        setIsLangDropdownOpenMobile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navItems = [
    { key: "home", href: "#home" },
    { key: "politics", href: "#politics" },
    { key: "technology", href: "#technology" },
    { key: "economy", href: "#economy" },
    { key: "culture", href: "#culture" },
    { key: "contact", href: "#contact" },
  ];

  const scrollToSection = (hash) => {
    const sectionId = hash.replace("#", "");
    if (pathname !== "/") {
      router.push(`/${hash}`);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    if (href.startsWith("#")) {
      scrollToSection(href);
    } else {
      router.push(href);
    }
  };

  const handleLanguageSelect = (lang) => {
    changeLanguage(lang); // Use changeLanguage from context
    setIsLangDropdownOpenDesktop(false);
    setIsLangDropdownOpenMobile(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#050d1b]/90 backdrop-blur-md py-1" : "bg-[#050d1b]/60 py-2"
      } border-b border-cyan-400/10 shadow-md`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-[80px]">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-4">
          <img
            src="/logo.png"
            alt="TechVisionary News Logo"
            className={`w-auto object-contain transition-all duration-300 ${
              isScrolled ? "h-25 sm:h-40" : "h-30 sm:h-48"
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-white">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.href)}
              className={`tracking-wide hover:text-cyan-300 transition duration-300 ${
                activeSection === item.href ? "text-cyan-400" : ""
              }`}
            >
              {t(item.key)}
            </button>
          ))}

          {/* Language selector dropdown desktop */}
          <div className="relative" ref={langDropdownRefDesktop}>
            <button
              onClick={() => setIsLangDropdownOpenDesktop((open) => !open)}
              className="flex items-center space-x-1 hover:text-cyan-300 transition duration-300 focus:outline-none"
              aria-haspopup="true"
              aria-expanded={isLangDropdownOpenDesktop}
              aria-label="Select language"
            >
              <span>{language}</span>
              <ChevronDown size={16} />
            </button>
            {isLangDropdownOpenDesktop && (
              <div className="absolute right-0 mt-2 w-28 bg-[#050d1b]/95 border border-cyan-400/30 rounded-md shadow-lg text-sm text-white z-50">
                {availableLanguages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageSelect(lang)}
                    className={`block w-full text-left px-4 py-2 hover:bg-cyan-600/40 transition-colors ${
                      lang === language ? "bg-cyan-700/50 font-semibold" : ""
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#050d1b]/95 backdrop-blur-md text-white px-5 py-4 space-y-4 transition-all duration-300">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => handleNavClick(item.href)}
              className={`block text-sm tracking-wide ${
                activeSection === item.href ? "text-cyan-400" : ""
              }`}
            >
              {t(item.key)}
            </button>
          ))}

          {/* Mobile language selector */}
          <div className="relative" ref={langDropdownRefMobile}>
            <button
              onClick={() => setIsLangDropdownOpenMobile((open) => !open)}
              className="flex items-center space-x-1 hover:text-cyan-300 transition duration-300 focus:outline-none"
              aria-haspopup="true"
              aria-expanded={isLangDropdownOpenMobile}
              aria-label="Select language"
            >
              <span>{language}</span>
              <ChevronDown size={16} />
            </button>
            {isLangDropdownOpenMobile && (
              <div className="mt-2 w-full bg-[#050d1b]/95 border border-cyan-400/30 rounded-md shadow-lg text-sm text-white z-50">
                {availableLanguages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageSelect(lang)}
                    className={`block w-full text-left px-4 py-2 hover:bg-cyan-600/40 transition-colors ${
                      lang === language ? "bg-cyan-700/50 font-semibold" : ""
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
