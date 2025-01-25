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
import React, { useState } from 'react'

export default function page() {
  let [isModalOpen,setIsModalOpen]=useState(false)

  function openModal(){
    setIsModalOpen(true)
  }

  function closeModal(){
    setIsModalOpen(false)
  }
  return (

    <div>
      <Header openModal={openModal}/>
      {
        isModalOpen&& <LoginModal closeModal={closeModal}/>
      }
      <HeroSection/>
      <Pictures/>
      <FeaturedPrograms/>
      <WhyChooseUs/>
      <LatestUpdates/>
      <OurPurpose/>
      <OurStoryValues/>
    </div>
  )
}

