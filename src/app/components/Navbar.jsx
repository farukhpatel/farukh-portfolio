"use client"; // Mark as a Client Component for interactivity

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    //for closing menu in mobile device
    if (isOpen) toggleMenu();
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // Close mobile menu after clicking a link
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background text-text backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-text hover:text-highlight transition font-headings"
        >
          Farukh Patel
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <button
            href="about"
            className="text-text hover:text-highlight transition font-para"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="text-text hover:text-highlight transition font-para"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="text-text hover:text-highlight transition font-para"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-text hover:text-highlight transition font-para"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-text focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-secondary backdrop-blur-md">
          <div className="flex flex-col space-y-4 p-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-text hover:text-highlight transition font-para"
            >
              About
            </button>
            <button
              className="text-text hover:text-highlight transition font-para"
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
            <button
              className="text-text hover:text-highlight transition font-para"
              onClick={() => scrollToSection("skills")}
            >
              Skills
            </button>
            <button
              href="#contact"
              className="text-text hover:text-highlight transition font-para"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
