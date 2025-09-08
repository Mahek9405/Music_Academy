
"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

// Dummy testimonials with image
const testimonials = [
  { 
    id: 1, 
    name: "Alice", 
    title: "Guitar Student", 
    text: "Amazing courses! Learned a lot and improved my skills tremendously. The lessons are so interactive and the instructors really care about your progress.",
    img: "https://i.pravatar.cc/100?img=1"
  },
  { 
    id: 2, 
    name: "Bob", 
    title: "Piano Student", 
    text: "The instructors are very professional, patient, and supportive. I feel confident every time I play after practicing their techniques.",
    img: "https://i.pravatar.cc/100?img=2"
  },
  { 
    id: 3, 
    name: "Charlie", 
    title: "Drum Student", 
    text: "I love the practical projects and real-world exercises included in the course. It made learning drums super fun and engaging.",
    img: "https://i.pravatar.cc/100?img=3"
  },
  { 
    id: 4, 
    name: "Diana", 
    title: "Vocal Student", 
    text: "Flexible learning helped me a lot, I could practice at my own pace and still get excellent results. The tips for vocal techniques are fantastic!",
    img: "https://i.pravatar.cc/100?img=4"
  },
];

const Testimonial = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setScrollWidth(containerRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-20 left-1/4 w-72 h-72 rounded-full bg-teal-500 opacity-20 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 right-1/3 w-80 h-80 rounded-full bg-pink-500 opacity-20 blur-3xl pointer-events-none"></div>

      <div className="w-full mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center text-teal-400">
          What Our Students Say
        </h2>

        <div className="overflow-hidden relative">
          <motion.div
            ref={containerRef}
            className="flex gap-10"
            animate={{ x: [0, -scrollWidth] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            }}
            whileHover={{ x: 0 }}
          >
            {testimonials.concat(testimonials).map((t, i) => (
              <div
                key={i}
                className="min-w-[300px] max-w-[300px] bg-white text-gray-800 p-6 rounded-xl flex-shrink-0 shadow-lg 
                           flex flex-col justify-between hover:scale-105 hover:shadow-2xl transition-transform duration-300"
              >
                {/* Quote */}
                <p className="text-gray-600 italic mb-6 relative before:content-['“'] before:text-3xl before:text-teal-500 before:mr-1">
                  {t.text}
                </p>

                {/* Image + Name */}
                <div className="flex flex-col items-center mt-auto">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-16 h-16 rounded-full border-4 border-teal-400 shadow-md mb-3"
                  />
                  <h4 className="font-semibold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.title}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
