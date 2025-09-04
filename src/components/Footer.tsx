"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-0">
        
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500">
            <Image
              src="/music_logo.png"   
              alt="Music Academy Logo"
              width={80}
              height={80}
              className="rounded-full object-contain h-16 w-auto"
            />
                      
          </h1>
          <p className="text-gray-400 mt-2">Learn, Play & Perform with Experts</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12">
          <div className="flex flex-row gap-6 lg:text-[20px] md:text-[18px]">
            <Link href="/" className="text-gray-300 hover:text-teal-400 transition">Home</Link>
            <Link href="/aboutus" className="text-gray-300 hover:text-teal-400 transition">About Us</Link>
            <Link href="/ourcourses" className="text-gray-300 hover:text-teal-400 transition">Courses</Link>
            <Link href="/contactus" className="text-gray-300 hover:text-teal-400 transition">Contact Us</Link>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-4 mt-2 text-gray-300">
              <a href="#" className="hover:text-teal-400 transition"><FaFacebookF size={20} /></a>
              <a href="#" className="hover:text-teal-400 transition"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-teal-400 transition"><FaYoutube size={20} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Music Academy. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
