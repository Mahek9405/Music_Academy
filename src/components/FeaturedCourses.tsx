"use client"
import React from 'react'
import courseData from "../data/music_courses.json";
import Link from "next/link";

interface Course{
        
  id: number,
  title: string,
  slug: string,
  description: string,
  price: number,
  instructor: string,
  isFeatured: boolean,         
}


const FeaturedCourses = () => {

const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured);

  return (
    <div className='py-12 bg-gray-900'>
        <div>
            <div className="text-center items-center flex flex-col justify-center">
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Featured COurses</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'> Learn With the Best</p>
            </div>
        </div>

        <div className='mt-10'>
            <div  className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 gap-x-1  justify-center auto-rows-fr'>
                {featuredCourses.map((course:Course) => (
                    <div key={course.id} className="flex justify-center m-4 lg:m-0">
                      <div className='bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 shadow-lg
                          flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm hover:scale-105 transition-transform duration-300
                          '> 
                            <div className=' p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                             <p className='text-lg sm:text-xl text-white font-bold mt-4 mb-2 dark:text-neutral-800'>{course.title}</p>
                             <p className='text-sm text-neutral-600 dark:text-neutral-400 flex-grow'>{course.description}</p>
                              <Link href={`/ourcourses/${course.slug}`} 
                                className="mt-4 inline-block px-4 py-2 rounded-xl bg-white text-gray-800 font-semibold hover:bg-gray-200 transition">
                                Learn More
                              </Link>                           
                            </div>
                          </div>         
                    </div>
                ))}
            </div>
        </div>

        <div className='mt-20 text-center'>
            <Link href={"/ourcourses"}
             className='px-6 py-4 rounded-2xl border border-neutral-600  bg-gradient-to-r from-teal-400 to-teal-500 
               text-black hover:from-teal-500 hover:to-teal-600 
               transition duration-300"'
            >
              View All Courses</Link>

        </div>

    </div>
  )
}

export default FeaturedCourses