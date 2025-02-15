'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const LatestUpdates = () => {
  return (
    <div className='  w-[80%] flex flex-col m-auto items-center gap-20'>
        <h1 className='text-4xl font-bold '>Latest Updates</h1>
       <GlowingEffectDemoSecond/>

    </div>
  );
};

export default LatestUpdates;


export function GlowingEffectDemoSecond() {
  return (
    <ul className="grid grid-cols-1 w-full  md:gap-10 md:grid-cols-2 md:grid-rows-2 ">
      <GridItem
        imageSrc={'/images/python.jpg'}
        title="Python Programming Language"
        description="Python is easy to learn with simple, readable syntax, making it perfect for building strong logic from an early age. It lets students create cool projects like games and AI quickly, while boosting problem-solving skills. Used by tech giants like Google and NASA, Python opens doors to future careers in tech.
"
      />
 
      <GridItem
        imageSrc={'/images/webdev.jpg'}
        title="Web Development"
        description="In today’s digital world, *web development* is a must-have skill, powering everything from social media to online businesses. It helps students from *9th grade to college* build strong *problem-solving skills* while creating real-world projects like websites and apps. With endless career opportunities in tech, web development boosts *creativity* and prepares students for a *future-proof career. Start building your ideas today with our **web development course*! 🚀"
      />
 
      <GridItem
        imageSrc={'/images/workshop.jpg'}
        title="Upcoming Workshop"
        description="Welcome to our Interactive Workshops! Here, we offer hands-on learning experiences designed to help students and enthusiasts build practical skills in coding, technology, and more. Whether you're a beginner or looking to enhance your knowledge, our workshops cover a wide range of topics, including Python programming, web development, AI, and beyond. Join us for expert-led sessions, real-world projects, and collaborative learning that will empower you to bring your ideas to life. Don't just learn—create, innovate, and grow with our dynamic workshops!"
      />
 
      <GridItem
        imageSrc={'/images/news.webp'}
        title="News and Updates"
        description="Stay up-to-date with the latest trends in tech and all things related to Space for Developers! Here, we’ll share exciting news, industry insights, and updates on our upcoming events, workshops, and initiatives. Whether it's the newest tech breakthroughs or developments within our community, this is your go-to space for staying informed and inspired."
      />
 
      
    </ul>
  );
}
 
interface GridItemProps {
  imageSrc: string;
  title: string;
  description: React.ReactNode;
}
 

const GridItem = ({  imageSrc, title, description }:GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none `}>
      <div className="relative h-full rounded-2.5xl border p-0 shadow-lg bg-[#1a1a1a] md:rounded-">
        {/* Glowing Effect */}
        <GlowingEffect
          blur={0}
          borderWidth={8}
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />

        {/* Image at the top */}
        <div className="relative w-full h-[300px]  overflow-hidden">
          <Image
            alt="image"
            src={imageSrc}
            layout="fill"
            objectFit="cover"
            className=" transform transition-transform duration-300 ease-in-out hover:scale-125"
          />
        </div>

        {/* Title and Description */}
        <div className="my-8 flex flex-col justify-between  min-h-[280px] gap-8 text-center mx-5">
          <div className='flex flex-col gap-8'>
          <h3 className="text-xl font-semibold md:text-4xl text-left text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-sm text-justify text-white font-sans">{description}</p>
          </div>

          <Link href={'/'} className='w-[40%] py-1 hover:scale-110 transition-all bg-orange-600'>Register</Link>
        </div>


      </div>
    </li>
  );
};

