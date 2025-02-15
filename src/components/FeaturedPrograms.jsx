'use client';
import React from 'react';

const FeaturedPrograms = () => {
  return (
    <section className="flex flex-col items-center px-6 mt-20 " id="programs">
      <h2 className="text-white text-center font-bold text-4xl mb-10">
        Popular Learning Paths
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="bg-[#272727] text-white p-6 rounded-lg shadow-md text-center hover:scale-105 transition-transform duration-300">
          <div className="text-5xl mb-4">🌐</div>
          <h3 className="text-xl font-semibold mb-2">Blockchain</h3>
          <p className="text-sm">Master modern web technologies from HTML to React</p>
          <a href="#" className="mt-4 inline-block text-green-400 hover:text-green-300 transition-colors">
            Learn More →
          </a>
        </div>

        {/* Card 2 */}
        <div className="bg-[#272727] text-white p-6 rounded-lg shadow-md text-center hover:scale-105 transition-transform duration-300">
          <div className="text-5xl mb-4">📱</div>
          <h3 className="text-xl font-semibold mb-2">AI Agents and Generative AI</h3>
          <p className="text-sm">Build iOS and Android apps with Flutter</p>
          <a href="#" className="mt-4 inline-block text-green-400 hover:text-green-300 transition-colors">
            Learn More →
          </a>
        </div>

        {/* Card 3 */}
        <div className="bg-[#272727] text-white p-6 rounded-lg shadow-md text-center hover:scale-105 transition-transform duration-300">
          <div className="text-5xl mb-4">🤖</div>
          <h3 className="text-xl font-semibold mb-2">Web Development</h3>
          <p className="text-sm">Dive into AI, ML, and data science fundamentals</p>
          <a href="#" className="mt-4 inline-block text-green-400 hover:text-green-300 transition-colors">
            Learn More →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
