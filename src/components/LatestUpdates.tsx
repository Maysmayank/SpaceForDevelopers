'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const LatestUpdates = () => {
  return (
    <section className="latest-updates flex flex-col py-12 px-3 md:px-6 text-center ">
      <h2 className="text-4xl font-bold mb-10 text-white tracking-wide">
        Latest Updates
      </h2>

      <div className="updates-grid grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="update-card bg-gradient-to-br from-[#222] via-[#1c1c1c] to-[#181818] shadow-xl rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="update-image relative w-full h-[350px]">
            <Image
              src="/images/python.jpg"
              alt="Blockchain Workshop"
              fill
              className="object-cover"
            />
          </div>
          <div className="update-content p-6 text-left">
            <h3 className="text-2xl font-semibold mb-4 text-white">Python Programming Language</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Python is easy to learn with simple, readable syntax, making it perfect for building strong logic from an early age. It lets students create cool projects like games and AI quickly, while boosting problem-solving skills. Used by tech giants like Google and NASA, Python opens doors to future careers in tech.
            </p>
            <Link
            
            className="inline-block px-5 py-3 rounded-lg text-lg font-semibold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 transition-all duration-300"

             href={'https://docs.google.com/forms/d/e/1FAIpQLSeOH9wuQuCniRr27uyhNlKQwe1-VxDclO8C8ht7w7rniW5Spw/viewform'}>
            Register Now

            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="update-card bg-gradient-to-br from-[#222] via-[#1c1c1c] to-[#181818] shadow-xl rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="update-image relative w-full h-[350px]">
            <Image
              src="/images/webdev.jpg"
              alt="Web Development Workshop"
              fill
              className="object-cover"
            />
          </div>
          <div className="update-content p-6 text-left">
            <h3 className="text-2xl font-semibold mb-4 text-white">Web Development</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
            In today’s digital world, *web development* is a must-have skill, powering everything from social media to online businesses. It helps students from *9th grade to college* build strong *problem-solving skills* while creating real-world projects like websites and apps. With endless career opportunities in tech, web development boosts *creativity* and prepares students for a *future-proof career. Start building your ideas today with our **web development course*! 🚀
            </p>

            <Link
            
            className="inline-block px-5 py-3 rounded-lg text-lg font-semibold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 transition-all duration-300"

             href={'https://docs.google.com/forms/d/e/1FAIpQLSeOH9wuQuCniRr27uyhNlKQwe1-VxDclO8C8ht7w7rniW5Spw/viewform'}>
            Register Now

            </Link>
           
          </div>
        </div>

        <div className="update-card bg-gradient-to-br from-[#222] via-[#1c1c1c] to-[#181818] shadow-xl rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="update-image relative w-full h-[350px]">
            <Image
              src="/images/workshop.jpg"
              alt="Blockchain Workshop"
              fill
              className="object-cover"
            />
          </div>
          <div className="update-content p-6 text-left">
            <h3 className="text-2xl font-semibold mb-4 text-white">Upcoming Workshop</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
            Welcome to our Interactive Workshops! Here, we offer hands-on learning experiences designed to help students and enthusiasts build practical skills in coding, technology, and more. Whether you're a beginner or looking to enhance your knowledge, our workshops cover a wide range of topics, including Python programming, web development, AI, and beyond. Join us for expert-led sessions, real-world projects, and collaborative learning that will empower you to bring your ideas to life. Don't just learn—create, innovate, and grow with our dynamic workshops!
            </p>
            <Link
            
            className="inline-block px-5 py-3 rounded-lg text-lg font-semibold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 transition-all duration-300"

             href={'https://docs.google.com/forms/d/e/1FAIpQLSeOH9wuQuCniRr27uyhNlKQwe1-VxDclO8C8ht7w7rniW5Spw/viewform'}>
            Register Now

            </Link>
          </div>
        </div>


        <div className="update-card bg-gradient-to-br from-[#222] via-[#1c1c1c] to-[#181818] shadow-xl rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="update-image relative w-full h-[350px]">
            <Image
              src="/images/news.webp"
              alt="Blockchain Workshop"
              fill
              className="object-cover"
            />
          </div>
          <div className="update-content p-6 text-left">
            <h3 className="text-2xl font-semibold mb-4 text-white">News and Updates</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
            Stay up-to-date with the latest trends in tech and all things related to Space for Developers! Here, we’ll share exciting news, industry insights, and updates on our upcoming events, workshops, and initiatives. Whether it's the newest tech breakthroughs or developments within our community, this is your go-to space for staying informed and inspired.            </p>
         
          </div>
        </div>
      </div>
      <GlowingEffectDemoSecond/>
    </section>
  );
};

export default LatestUpdates;


export function GlowingEffectDemoSecond() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      <GridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Do things the right way"
        description="Running out of copy so I'll write anything."
      />
 
      <GridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="The best AI code editor ever."
        description="Yes, it's true. I'm not even kidding. Ask my mom if you don't believe me."
      />
 
      <GridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="You should buy Aceternity UI Pro"
        description="It's the best money you'll ever spend"
      />
 
      <GridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="This card is also built by Cursor"
        description="I'm not even kidding. Ask my mom if you don't believe me."
      />
 
      <GridItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Coming soon on Aceternity UI"
        description="I'm writing the code as I record this, no shit."
      />
    </ul>
  );
}
 
interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}
 
const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border  p-2  md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2 ">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                {title}
              </h3>
              <h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-black dark:text-neutral-400"
              >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};