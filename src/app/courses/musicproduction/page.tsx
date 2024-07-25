"use client";
import React from "react";
import courseData from "@/data/music_courses.json";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  image: string;
  courseType: string;
}

function MusicProduction() {
  const musicProductionCourse = courseData.courses.filter(
    (course: Course) => course.courseType === "musicProduction"
  );
  return (
    <div>
      <div className="min-h-screen bg-black py-12 pt-36 bg-dot-white/[0.3]">
        <h1 className="text-xl md:text-6xl text-center font-sans font-bold mb-20 text-white">
          MusicProduction Courses ({musicProductionCourse.length})
        </h1>
        <div className="grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 gap-8 justify-center items-center px-8">
          {musicProductionCourse.map((course: Course) => (
            <div key={course.id} className="flex justify-center items-center">
              <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <Image
                  src={course.image}
                  alt="jordans"
                  height="400"
                  width="400"
                  className="object-contain rounded-md"
                  placeholder="empty"
                />
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {course.title}
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {course.description}
                </p>
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                  <span>Enroll now </span>
                  <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                    ${course.price}
                  </span>
                </button>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MusicProduction;
