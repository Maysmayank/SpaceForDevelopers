'use client'
import FeaturedPrograms from '@/components/FeaturedPrograms'
import Header from '@/components/Header'
import HeroSection from '@/components/Hero'
import LatestUpdates from '../../components/LatestUpdates'
import LoginModal from '@/components/LoginModal'
import OurPurpose from '@/components/OurPurpose'
import { OurStoryValues } from '@/components/OurStoryValues'
import Pictures from '@/components/Pictures'
import WhyChooseUs from '../../components/WhyChooseUs'
import React, { useState, useEffect, useRef } from 'react'
import AnimatedTestimonials from "@/components/ui/animated-testimonials";

export default function Page() {
  const whyChooseUsRef = useRef(null); // Reference for WhyChooseUs section


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
    <div className=''>

      <div className='md:h-[710px] relative'>
        <HeroSection />
      </div>

      <div className='bg-[#13161a] flex flex-col relative '>
        {/* Attach the ref to WhyChooseUs */}
        <div className="absolute top-0 left-0 w-full h-1 bg-black/40 backdrop-blur-lg shadow-[0_0_40px_20px_rgba(0,0,0,0.9)]"></div>

        <WhyChooseUs />
        <AnimatedTestimonialsDemo />
        {/* <div ref={whyChooseUsRef}></div> */}
        <LatestUpdates />
        <OurPurpose />
        <OurStoryValues />
      </div>

    </div>
  );
}




function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "As a BCA graduate and AWS Certified Solutions Architect, I’ve taken several online courses, but the Python Programming (Advanced) course on Space for Developers stands out. The structured way of teaching, detailed lecture notes, and hands-on practice with real-world projects made the learning experience incredibly practical. The tests after each session helped reinforce my understanding and strengthened my skills. I highly recommend this platform to anyone looking to advance their technical knowledge!",
      name: "Arun",
      designation: "BCA Graduate & AWS Certified Solutions Architect",
      src: "/testimonials/arun.jpg",
    },
    {
      quote: "Enrolling in the Python Basic course at Space for Developers was totally worth it! The structured lessons, hands-on practice, and doubt-clearing sessions made learning so much better than just watching free YouTube videos. If a student really wants to strengthen their grip on Python, this is the place to be. I’m fully satisfied with the course and the support provided. Highly recommended!"
      , name: "Jai Bhasin",
      designation: "9th Grade | Swarn Lata Sethi DAV Public School",
      src: "/testimonials/jai.jpg",

    },
    {
      quote:
        "I had an amazing learning experience with Space for Developers! The way of teaching is really engaging, and I loved the structured approach with notes, hands-on practice, and doubt-clearing sessions. The best part was the tests after each session, which helped me solidify my understanding. Completing the Basic + Intermediate Python course here has given me a strong grip on the subject. Highly recommended for anyone looking to learn coding the right way!",
      name: "Divya Parashar",
      designation: "BCA AIML, 2nd Year | SGT University, Gurugram",
      src: "/testimonials/divya.jpg",
    },



  ];

  return <div className='flex md:mt-16 flex-col items-center my-12 md:my-0 md:gap-8'>
    <h1 className='text-4xl font-bold'>Testimonials</h1>
    <AnimatedTestimonials testimonials={testimonials} />
  </div>;
}

