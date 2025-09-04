
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 
  const [scrolled, setScrolled] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-black shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center md:px-6 pr-6 py-2 md:py-4">
        {/* Logo */}
        <Link
          href="/"
          className="md:ml-16 ml-0 text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500"
        >
          <Image
          src="/music_logo.png"   
          alt="Music Academy Logo"
          width={80}
          height={80}
          className="rounded-full object-contain h-16 w-auto "
        />
        </Link>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white text-3xl "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Menu */}
        <div
          className={`flex-col md:flex md:flex-row md:items-center md:space-x-8 absolute md:static top-full left-0 w-full md:w-auto overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 p-4 bg-black" : "max-h-0 md:max-h-full md:p-0"
          }`}
        >
          <Link
            href="/"
            className="block md:inline-block py-2 px-3 text-white text-[20px] font-medium hover:text-teal-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/aboutus"
            className="block md:inline-block py-2 px-3 text-white text-[20px] font-medium hover:text-teal-400 transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          <Link
            href="/ourcourses"
            className="block md:inline-block py-2 px-3 text-white text-[20px] font-medium hover:text-teal-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Our Courses
          </Link>

          <Link
            href="/contactus"
            className="block md:inline-block py-2 px-3 text-white text-[20px] font-medium hover:text-teal-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
