'use client'
import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className=" py-16 mt-10  px-8 text-center text-black">
      <h2 className="text-4xl text-white font-bold mb-8">Why Choose Space for Developers?</h2>
      <div className="features-grid flex justify-center gap-8 flex-wrap">
        <div className="feature bg-white p-8 rounded-lg shadow-lg w-72 text-center transform transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-xl">
          <span className="feature-icon text-5xl mb-4 text-blue-600">🎯</span>
          <h3 className="text-xl mb-4">Industry-Relevant</h3>
          <p className="text-gray-600 text-base">Curriculum designed with industry experts</p>
        </div>
        <div className="feature bg-white p-8 rounded-lg shadow-lg w-72 text-center transform transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-xl">
          <span className="feature-icon text-5xl mb-4 text-blue-600">💻</span>
          <h3 className="text-xl mb-4">Learn by Doing</h3>
          <p className="text-gray-600 text-base">Practice with real-world projects</p>
        </div>
        <div className="feature bg-white p-8 rounded-lg shadow-lg w-72 text-center transform transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-xl">
          <span className="feature-icon text-5xl mb-4 text-blue-600">👥</span>
          <h3 className="text-xl mb-4">Community Support</h3>
          <p className="text-gray-600 text-base">Learn alongside passionate developers</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
