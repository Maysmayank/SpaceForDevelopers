'use client'
import React from 'react'
import BookingForm from "../../../components/BookingForm"
import { div } from 'motion/react-client'
import Image from 'next/image'
import { FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import { HiLocationMarker } from 'react-icons/hi'
import { Phone } from 'lucide-react'

function page() {
  return (
    <div className='bg-[#f2f4f6] border grid md:grid-cols-2'>
      <BookingForm />
      <div className=' flex items-center  my-20 justify-evenly flex-col'>
        <Image height={500} width={500} alt='contact' src={'/images/contact.png'}></Image>
        <div className='flex flex-col gap-4 text-black w-[60%] font-extrabold'>
          <p className='flex gap-3 items-center'>  <a href="mailto:your@email.com">
            <FaEnvelope size={24} className="text-black text-3xl hover:scale-110 transition-transform cursor-pointer" />
          </a> spacefordevelopers@gmail.com</p>
          <p className=' flex items-center gap-3'><Phone/> +91-8595926617</p>
          <p className='flex items-center gap-3'><HiLocationMarker size={24}/> 56-C, Laxmi Vihar,
            Dwarka Mor, New Delhi – 110059, INDIA</p>

          <p className='text-gray-600 text-center'>We usually responds within 2hours </p>
        </div>
        <div className="socials flex   gap-4 mt-4">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-black text-3xl hover:scale-110 transition-transform cursor-pointer" size={40} />
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-black text-3xl hover:scale-110 transition-transform cursor-pointer" size={40} />
          </a>

          {/* Twitter */}
          

          {/* Email */}
        
        </div>
      </div>
    </div>
  )
}

export default page



