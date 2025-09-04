"use client";
import React from "react";
import courseData from "../../data/music_courses.json";
import Link from "next/link";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  instructor_img: string;
  isFeatured: boolean;
  image: string;
}

const OurCourses = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-6 ">
      {/* Heading */}
      <div className="text-center mb-12 mt-20">
        <h1 className="text-4xl font-extrabold text-teal-400">Our Courses</h1>
        <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
          Choose from a wide range of music courses designed for beginners and
          pros. Learn at your own pace with expert instructors.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {courseData.courses.map((course: Course) => (
          <div
            key={course.id}
            className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
          >
            {/* Image */}
            <div className="w-full h-68 overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col bg-gray-900 h-full">
              <h2 className="text-xl font-bold text-teal-400">
                {course.title}
              </h2>
              <p className="mt-2 text-gray-300 text-sm">
                {course.description}
              </p>

              {/* Instructor */}
              <div className="flex items-center gap-3 mt-4">
                <img
                  src={course.instructor_img}
                  alt={course.instructor}
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-sm text-gray-200">
                  {course.instructor}
                </span>
              </div>

              {/* Price + Button */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-semibold text-white">
                  ${course.price}
                </span>
                <Link
                  href={`/ourcourses/${course.slug}`}
                  className="px-4 py-2 bg-teal-400 text-black rounded-lg font-semibold hover:bg-teal-500 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-bold text-white">
          Not sure where to start?
        </h3>
        <p className="mt-2 text-gray-300">
          Contact us and we’ll help you find the perfect course for you.
        </p>
        <Link
          href="/contactus"
          className="inline-block mt-4 px-6 py-2 bg-teal-400 text-black font-semibold rounded-lg hover:bg-teal-500 transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default OurCourses;
