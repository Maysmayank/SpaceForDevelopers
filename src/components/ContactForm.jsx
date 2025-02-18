'use client'
import React, { useRef, useState } from "react"; 
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { Instagram, Linkedin, Whatsapp, Mail, MailCheck } from 'lucide-react'; // Import the required icons
import { LiaLinkedin } from "react-icons/lia";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

function ContactForm() {
  return (
    <div className='flex flex-col'>
      {/* Background Image with Centered Text */}
      <div className='relative max-h-[400px] w-full overflow-hidden'>
        <Image
          src='/images/spacecontact.jpg'
          alt='Contact'
          width={400}
          height={400}
          className='w-full h-auto object-cover opacity-50' // Add opacity here for the image
        />
        {/* Centered Text */}
        <div className='absolute inset-0 flex flex-col gap-2 items-center justify-center'>
          <h2 className='text-white text-6xl font-semibold'>Contact Us</h2>
          <span className='text-2xl font-semibold'>Learn | Build | Evolve</span>
        </div>
      </div>

      {/* Flex Container for Image and Description */}
      <div className='flex border'>
        {/* Left Side: Image */}
        <div className='w-1/2'>
          <Image
            src='/images/sidpic.jpg'
            alt='Contact'
            width={600}
            height={400}
            className=' my-10 max-h-[600px] object-contain opacity-75' // Add opacity here for the image
          />
        </div>

        {/* Right Side: Description */}
        <div className='w-1/2 flex  items-center justify-center  mr-10 bg-opacity-50'>
          <div className='text-left flex flex-col gap-8  text-white items-start  px-10'>
            <h1 className="text-4xl font-bold ">About me</h1>
            <p className='text-left text-xl'>

              I’m Siddhant Sharma, a passionate developer, educator, and innovator with a vision to empower aspiring
              coders and tech enthusiasts. With a deep love for problem-solving and building meaningful solutions, I
              founded Sapce for Developers to create a platform where knowledge meets collaboration. My journey is
              driven by a belief that technology can shape the future, and together, we can unlock limitless
              possibilities.
            </p>

            <FloatingDockDemo/>
          </div>
        </div>
      </div>


      <Form/>
    </div>
  )
}

export default ContactForm


export function FloatingDockDemo() {
  const links = [


    {
      title: "Instagram",
      icon: (
        <BsInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <LiaLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "WhatsApp",
      icon: (
        <FaWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Gmail",
      icon: (
        <MailCheck className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  return (
    <div className="flex items-center justify-center md:mt-20 ">
      <FloatingDock
        mobileClassName="translate-y" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}



function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, such as sending data to an API or displaying a success message
    console.log(formData);
  };

  return (
    <div className='flex justify-center items-center py-12 bg-[#dadada]'>
      <div className='max-w-lg w-full bg-[#eeeeee] text-black p-8 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-semibold mb-6 text-center'>Contact Us</h2>
        
        <form onSubmit={handleSubmit} >
          <div className='mb-4'>
            <label htmlFor='name' className='block text-md font-medium text-gray-700'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              className='mt-2 p-2 w-full border  text-black border-gray-300 rounded-md'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor='email' className='block  text-md font-medium text-gray-700'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='mt-2 p-2 w-full border border-gray-300 rounded-md'
            />
          </div>

          <div className='mb-6'>
            <label htmlFor='message' className='block text-md font-medium text-gray-700'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              required
              rows='4'
              className='mt-2 p-2 w-full border border-gray-300 rounded-md'
            />
          </div>

          <button
            type='submit'
            className='w-full  bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

