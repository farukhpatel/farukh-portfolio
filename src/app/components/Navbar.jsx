"use client"; // Mark as a Client Component for interactivity

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { mailToHref, tabOptions } from "../utills/constant";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (
      document.body.style.overflow === "auto" ||
      document.body.style.overflow === ""
    ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null, // Uses viewport as root
      rootMargin: "0px",
      threshold: 0.4, // Section is considered visible when 40% is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, observerOptions);

    tabOptions.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      tabOptions.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  //animation (navbar)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsHeroVisible(false);
      } else {
        setIsHeroVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (isOpen) toggleMenu(); // Close menu on mobile after clicking
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <nav
        // className={`fixed top-0 w-full z-50 transition-all duration-300 ${""}`}
        className={`fixed top-0 w-full z-50 transition-all duration-500 bg-background text-text backdrop-blur-md  ${
          isHeroVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        } ${isOpen && "overflow-hidden h-full"}`}
      >
        <div className="container mx-auto px-6 py-4 md:px-12 lg:px-20 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold text-text hover:text-primarySecondary transition font-headings"
          >
            Farukh Patel
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {tabOptions.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-base capitalize font-semibold transition font-para ${
                  activeTab === item
                    ? "text-primarySecondary"
                    : "text-text hover:text-primarySecondary"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-text focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <FaTimes className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu with Left-to-Right Animation */}
      <div
        className={`fixed z-50 top-10 left-0 w-full h-full bg-background backdrop-blur-md shadow-lg md:hidden transform transition-transform duration-500 ease-in-out ${
          isOpen
            ? "translate-x-0 opacity-100 overflow-hidden"
            : "-translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col p-6 w-full h-full">
          {/* Menu Items - Aligned Left */}
          <div className="mt-6 space-y-5">
            {tabOptions.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-lg capitalize font-semibold block transition font-para ${
                  activeTab === item
                    ? "text-primarySecondary"
                    : "text-text hover:text-primarySecondary"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Get in Touch Button - Mobile */}
          <a
            href={mailToHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 bg-primarySecondary text-white px-5 py-2 rounded-lg text-base font-semibold hover:bg-primarySecondary transition duration-300 w-fit"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </>
  );
}
