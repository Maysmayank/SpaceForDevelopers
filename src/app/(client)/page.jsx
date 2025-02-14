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
import AnimatedTestimonials from "@/components/ui/animated-testimonials";
import { Meteors } from '@/components/ui/meteors'

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
    <div className=''>
      <Header openModal={openModal} />
      {isModalOpen && <LoginModal closeModal={closeModal} />}
      
      <div className='md:h-[710px] relative'>
      <HeroSection />
      <Pictures />

      </div>
     


      <div className='bg-black relative'>
      <Meteors number={30} /> 
        <FeaturedPrograms />
        {/* Attach the ref to WhyChooseUs */}
        <WhyChooseUs />
        <AnimatedTestimonialsDemo/>
        {/* <div ref={whyChooseUsRef}></div> */}
        <LatestUpdates />
        <OurPurpose />
      </div>

    </div>
  );
}

 function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return <div className='flex md:mt-16 flex-col items-center md:gap-8'>
<h1 className='text-4xl font-bold'>Testimonials</h1>
  <AnimatedTestimonials testimonials={testimonials} />
  </div>;
}

