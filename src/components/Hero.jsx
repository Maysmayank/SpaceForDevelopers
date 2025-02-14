"use client";
import React from "react";
import { FlipWords } from "../components/ui/filp-words";
const HeroSection = () => {
  return (
    <section className="flex  z-10 pt-14 flex-col items-center md:flex-row md:justify-between md:mt-10 md:pl-16">
      {/* Hero Content */}
      <div className="hero-content z-10 p-8 text-center pt-28 flex flex-col items-start md:text-left md:max-w-lg md:min-w-[60%]">
        <FlipWordsDemo/>
        <p className="mt-8 font-semibold text-lg text-white">
          Embark on your coding journey with expert guidance and hands-on learning.
        </p>

        <div className="hero-buttons mt-6 flex gap-4 justify-center md:justify-start">
          <a
            href="#courses"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Start Learning
          </a>
          <a
            href="#programs"
            className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-100 transition"
          >
            View Programs
          </a>
        </div>
      </div>

      {/* Glass Sheet with Code Snippet */}
      <div className="glass-sheet z-10  md:mt-50 md:mr-60 w-[415px] md:min-w-[500px] m-auto">
      <pre className="text">print("Welcome to space for developers")</pre>
      </div>
    </section>
  );
};

export default HeroSection;


export function FlipWordsDemo() {
  const words = ["Space", "cute", "beautiful", "modern"];

  return (
    <div className="flex justify-center items-center ">
      <div className="text-2xl md:text-6xl abel-regular">
        Welcome to
        <FlipWords words={words} /> <br />
        For Developers
      </div>
    </div>
  );
}
