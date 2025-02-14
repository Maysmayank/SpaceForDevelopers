'use client';
import React from 'react';

const FeaturedPrograms = () => {
  return (
    <section className=" flex flex-col" id="programs">
      <h2 className='text-white text-center md:py-16  font-bold text-4xl'>Popular Learning Paths</h2>
      
      <div className="program-cards  text-white">
        <div className="program-card">
          <div className="program-icon">🌐</div>
          <h3 className='text-xl font-semibold'>BlockChain</h3>
          <p>Master modern web technologies from HTML to React</p>
          <a href="#" className="learn-more">Learn More</a>
        </div>
        <div className="program-card">
          <div className="program-icon">📱</div>
          <h3 className='text-xl font-semibold'>Ai Agents and Generative AI</h3>
          <p>Build iOS and Android apps with Flutter</p>
          <a href="#" className="learn-more">Learn More</a>
        </div>
        <div className="program-card">
          <div className="program-icon">🤖</div>
          <h3 className='text-xl font-semibold'>Web Development</h3>
          <p>Dive into AI, ML, and data science fundamentals</p>
          <a href="#" className="learn-more">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
