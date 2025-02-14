'use client'
import FeaturedPrograms from '@/components/FeaturedPrograms'
import Header from '@/components/Header'
import HeroSection from '@/components/Hero'
import LatestUpdates from '@/components/LatestUpdates'
import LoginModal from '@/components/LoginModal'
import OurPurpose from '@/components/OurPurpose'
import OurStoryValues from '@/components/OurStoryValues'
import Pictures from '@/components/Pictures'
import WhyChooseUs from '@/components/WhyChooseUs'
import React, { useState, useEffect, useRef } from 'react'

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const whyChooseUsRef = useRef(null); // Reference for WhyChooseUs section

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("intersection");
        
        if (entry.isIntersecting) {
          openModal(); // Open modal when WhyChooseUs is in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (whyChooseUsRef.current) {
      observer.observe(whyChooseUsRef.current);
    }

    return () => {
      if (whyChooseUsRef.current) {
        observer.unobserve(whyChooseUsRef.current);
      }
    };
  }, []);

  return (
    <div>
      <Header openModal={openModal} />
      {isModalOpen && <LoginModal closeModal={closeModal} />}
      <HeroSection />
      <Pictures />

      <FeaturedPrograms />
      {/* Attach the ref to WhyChooseUs */}
      <WhyChooseUs  />
      <div ref={whyChooseUsRef}></div>
      <LatestUpdates />
      <OurPurpose />
    </div>
  );
}
