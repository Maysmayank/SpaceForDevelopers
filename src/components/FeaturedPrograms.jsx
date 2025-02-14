'use client';
import React from 'react';

const FeaturedPrograms = () => {
  return (
    <section className="featured-programs" id="programs">
      <h2 className='text-slate-600 font-bold text-3xl'>Popular Learning Paths</h2>
      <div className="program-cards text-black">
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
