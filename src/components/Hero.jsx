"use client";
import React from "react";
import { BackgroundLines } from "../components/ui/background-lines";
const HeroSection = () => {
  return (
    
    <BackgroundLinesDemo/>
  );
};

export default HeroSection;






export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b  from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Welcome to Space For Developers.
      </h2>
      <p className="max-w-2xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Embark on your coding journey with expert guidance and hands-on learning.
      </p>

      <div className="hero-buttons mt-6 flex gap-4 justify-center md:justify-start">
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          Start Your Journey!
        </span>
      </button>
         
        </div> 
    </BackgroundLines>
  );
}
