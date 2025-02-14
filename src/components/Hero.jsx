"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section className="flex pt-10 flex-col items-center md:flex-row md:justify-between md:mt-10 md:pl-10">
      {/* Hero Content */}
      <div className="hero-content p-8 text-center md:text-left md:max-w-lg md:min-w-[60%]">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Welcome to <span className="text-blue-600">Space for Developers</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
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
      <div className="glass-sheet  mt-4 md:mt-40 md:mr-60 w-[415px] md:min-w-[500px] m-auto">
      <pre className="text">print("Welcome to space for developers")</pre>
      </div>
    </section>
  );
};

export default HeroSection;
