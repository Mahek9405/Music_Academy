"use client";

import React from "react";
import courseData from "../../../data/music_courses.json";
import Link from "next/link";
import Image from "next/image";


interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  instructor_img: string;
  image?: string;
  learningPoints?: string[];
  relatedCourses?: number[]; 
}

interface Props {
  params: { slug: string };
}

const CourseDetailPage = ({ params }: Props) => {
  const { slug } = params; 
  const course = courseData.courses.find((c: Course) => c.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
        <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
        <Link href="/ourcourses" className="text-teal-400 hover:underline">
          Back to All Courses
        </Link>
      </div>
    );
  }

  // find related courses
  const related = courseData.courses.filter((c: Course) =>
    course.relatedCourses?.includes(c.id)
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8 px-4 max-w-5xl mx-auto mt-22 mb-5">
      {/* Hero Section */}
      {course.image && (
        <div className="w-full h-92 relative mb-8 rounded-xl shadow-lg overflow-hidden">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>
      )}


      {/* Title & Price */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:px-20">
        <h1 className="text-4xl font-bold text-teal-400">{course.title}</h1>
        <span className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-lg mt-4 md:mt-0">
          ${course.price}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-300 mb-6 text-lg md:px-20">{course.description}</p>

      {/* Instructor Card */}
      <div className="bg-gray-800 p-6 rounded-xl shadow-md mb-8 max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">Instructor</h2>
        <div className="space-x-4 flex flex-col items-center">
          {/* Instructor Image */}
          <div className="w-16 h-16 relative rounded-full overflow-hidden border-2 border-teal-400">
            <Image
              src={course.instructor_img}
              alt={course.instructor}
              fill
              className="object-cover"
            />
          </div>

          {/* Instructor Info */}
          <div className="mt-2">
            <p className="font-semibold text-xl">{course.instructor}</p>
            <p className="text-gray-400 text-sm">
              Expert in Music Training & Performance
            </p>
          </div>
        </div>
      </div>


      {/* Learning Outcomes */}
      {course.learningPoints && course.learningPoints.length > 0 && (
        <div className="mb-8 ml-20">
          <h2 className="text-2xl font-bold mb-4 ">What You’ll Learn</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {course.learningPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA */}
      <div className="mb-12 text-center">
        <Link href={`/ourcourses/${course.slug}/enroll`}>
          <button className="bg-teal-500 text-white px-10 py-2 rounded-lg cursor-pointer  hover:from-teal-500 hover:to-teal-600 transition-durtion-300">
            Enroll
          </button>
        </Link>
      </div>

      {/* Related Courses */}
      {related.length > 0 && (
        <div className="px-6 md:px-20">
          <h2 className="text-2xl font-bold mb-6 ">Related Courses</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {related.map((rc) => (
              <Link
                key={rc.id}
                href={`/ourcourses/${rc.slug}`}
                className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition transform shadow-md "
              >
                <h3 className="text-xl font-semibold text-teal-300 mb-2">
                  {rc.title}
                </h3>
                <p className="text-gray-400 text-sm">{rc.description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Back to All Courses */}
      <div className="mt-10 flex justify-center">
        <Link
          href="/ourcourses"
          className="inline-block mt-4 px-6 py-2 rounded bg-gray-700 text-white font-semibold hover:bg-gray-600 transition"
        >
          ← Back to Courses
        </Link>
      </div>
    </div>
  );
};

export default CourseDetailPage;







