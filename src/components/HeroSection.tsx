import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      {/* Glow */}
      <div className="absolute w-full h-full bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 rounded-full filter blur-3xl opacity-40 animate-spotlight top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-300">
          Master the Art of Music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
         Learn at your own pace, gain hands-on experience, and turn your passion into skill. Start your journey today and join thousands of learners shaping their musical future.        </p>

        <div className="mt-8 inline-block">
          <Link
            href={"/ourcourses"}
            className="px-6 py-3 rounded-3xl font-medium 
               bg-gradient-to-r from-teal-400 to-teal-500 
               text-black hover:from-teal-500 hover:to-teal-600 
               transition duration-300"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
