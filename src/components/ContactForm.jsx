'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function ContactForm() {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  console.log(isClient);
  

  return (
    <>
    <div className="mt-20 get-in-touch w-full flex flex-col  items-center">
      <h2 className="title">Get in Touch</h2>
      
      <form
        action="/contact"
        className="w-[70%] flex flex-col gap-8"
        method="post"
      >
        <div className="form-group">
          <input
            type="text"
            className="rounded-lg bg-[#181818] w-full p-3 pl-4 input-style"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="bg-[#181818] rounded-lg w-full p-3 pl-4 input-style"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            id="message"
            className="bg-[#181818] rounded-lg w-full p-3 pl-4 input-style"
            name="message"
            placeholder="Your Message"
            required
          ></textarea>

        </div>
        <button type="submit">Get in Touch</button>
      </form>

      <div className='flex flex-col md:flex-row gap-4 m-auto text-md items-center justify-evenly text-blue-400 font-semibold mt-20'>
      <h1>
      +91-8595926617
      </h1>
      
      <Link href={'/www.linkedin.com/in/siddhant-sharma-41a723338'}>LinkedIn</Link>

      <h1>siddhantsharma2828@gmail.com</h1>
    </div>
      
    </div>



    </>

  );
}

export default ContactForm;
