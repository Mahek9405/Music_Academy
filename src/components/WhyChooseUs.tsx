"use client";
import React from "react";
import { motion } from "framer-motion";

const points = [
  { id: 1, title: "Expert Instructors", description: "Learn from industry professionals.", icon: "🎸" }, 
  { id: 2, title: "Flexible Learning", description: "Study at your own pace, anytime.", icon: "🎼" }, 
  { id: 3, title: "Practical Projects", description: "Hands-on projects for real-world experience.", icon: "🥁" }, 
  { id: 4, title: "Certification", description: "Get recognized certificates for your skills.", icon: "🎤" }, 
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        
        {/* Left Text */}
        <div className="md:sticky md:top-28 flex flex-col justify-start lg:ml-0 ml-3">
          <h2 className="text-4xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-500">
            Why Choose Us
          </h2>
          <p className="text-gray-300 text-lg lg:ml-0 ml-3">
            Thousands of students trust us because we combine expertise, flexibility, and real-world experience.
          </p> <br />
          <p className="text-white text-lg mt-2 max-w-[500px] lg:ml-0 ml-3">
            At our Music Academy, we believe in empowering every student to reach their full potential. With expert instructors, flexible learning schedules, hands-on projects, and recognized certifications, we ensure a learning experience that is both practical and inspiring. Join thousands of students who trust us to guide their musical journey and help them achieve their goals.
          </p>
        </div>

        {/* Right Floating Points */}
        <div className="relative flex flex-col gap-16 md:gap-16">
          {points.map((point, index) => (
            <motion.div
              key={point.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: index * 0.2, type: "spring", stiffness: 100 }}
              className={`flex items-center gap-6 md:gap-8`}
            >
              <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 to-purple-500 text-3xl md:text-4xl shadow-lg hover:scale-110 transition-transform duration-300">
                {point.icon}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold">{point.title}</h3>
                <p className="text-gray-300">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
