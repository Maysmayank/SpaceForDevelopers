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
import axios from 'axios'
import React, { useState, useEffect, useRef } from 'react'
import ReviewCard from '@/components/ReviewCard'
import WhatsAppButton from '@/components/WhatsAppButton'
export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const whyChooseUsRef = useRef(null); // Reference for WhyChooseUs section

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  useEffect(()=>{
    axios.get("http://localhost:8000/api/home")
    .then(response => console.log(response.data))
    .catch(error => console.error("Error fetching data:", error));
    },[])
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
      <WhatsAppButton/>
      
      <Header openModal={openModal} />
      {isModalOpen && <LoginModal closeModal={closeModal} setIsModalOpen={setIsModalOpen} />}
      <div className='relative pt-16 h-[700px]'>
      <HeroSection />
      <Pictures />
      </div>
    
      <FeaturedPrograms />
      {/* Attach the ref to WhyChooseUs */}
      <ReviewCard/>

      <WhyChooseUs  />
      <div ref={whyChooseUsRef}></div>
      <LatestUpdates />
      <OurPurpose />
      <OurStoryValues/>
    </div>
  );
}
