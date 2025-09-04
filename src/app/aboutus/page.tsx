"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const teamMembers = [
  {
    name: "John Doe",
    role: "Guitar Instructor",
    img: "https://mockmind-api.uifaces.co/content/human/80.jpg",
  },
  {
    name: "Jane Smith",
    role: "Piano Instructor",
    img: "https://mockmind-api.uifaces.co/content/human/104.jpg",
  },
  {
    name: "Alice Brown",
    role: "Violin Instructor",
    img: "https://mockmind-api.uifaces.co/content/human/91.jpg",
  },
  {
    name: "Michael Lee",
    role: "Drum Instructor",
    img: "https://mockmind-api.uifaces.co/content/human/92.jpg",
  },
  {
    name: "Emily Davis",
    role: "Flute Instructor",
    img: "https://mockmind-api.uifaces.co/content/human/125.jpg",
  },
  {
    name: "James Anderson",
    role: "saxophone Instructor",
    img: "https://mockmind-api.uifaces.co/content/human/112.jpg",
  },
  {
    name: "Rahul Verma",
    role: "Tabla Instructor",
    img: "https://mockmind-api.uifaces.co/content/human/90.jpg",
  },
  
  {
    name: "Sophia Green",
    role: "Harmonica Instructor",
    img: "https://mockmind-api.uifaces.co/content/human/124.jpg",
  },
  {
    name: "Olivia White",
    role: "Keyboard Mastery Instructor",
    img: "https://mockmind-api.uifaces.co/content/human/119.jpg",
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-6">
      {/* Heading */}
      <div className="text-center mb-12 mt-20">
        <h1 className="text-4xl font-extrabold text-teal-400">About Us</h1>
        <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
          We are passionate about spreading the love of music and helping
          learners of all levels achieve their dreams.At Melody Academy, we believe music has the power to inspire, heal,
          and transform lives.
        </p>
      </div>


      {/* Our Team Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-teal-400 mb-12">
          Meet Our Instructor
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="flex flex-col sm:flex-row items-center bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition gap-6"
        >
      <Image
          src={member.img}
          alt={member.name}
          width={128}  
          height={128}
          className="object-cover rounded-full border-4 border-teal-400"
        />
      <div className="text-center sm:text-left">
        <h3 className="text-xl lg:text-[18px] font-semibold text-white">
          {member.name}
        </h3>
        <p className="text-gray-400 text-md">{member.role}</p>
      </div>
    </div>
  ))}
</div>

      </div>

      {/* CTA Section */}
      <div className="text-center mt-20">
        <h3 className="text-2xl font-bold text-white">
          Ready to Start Your Journey?
        </h3>
        <p className="mt-2 text-gray-300">
          Explore our wide range of music courses and take the first step today.
        </p>
        <Link
          href="/ourcourses"
          className="inline-block mt-4 px-6 py-2 bg-teal-400 text-black font-semibold rounded-lg hover:bg-teal-500 transition"
        >
          Explore Courses
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
