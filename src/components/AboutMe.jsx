import Image from 'next/image'
import React from 'react'

function AboutMe() {
  return (
    <div className='md:w-[68%] flex gap-8 py-5 items-center'>
      <div className='left-box md:w-[75%]'>
        <h2 className="glowing-title text-3xl">Behind The Space for Developers</h2>
        <p className='text-justify '>
          I’m Siddhant Sharma, a passionate developer, educator, and innovator with a vision to empower aspiring
          coders and tech enthusiasts. With a deep love for problem-solving and building meaningful solutions, I
          founded Sapce for Developers to create a platform where knowledge meets collaboration. My journey is
          driven by a belief that technology can shape the future, and together, we can unlock limitless
          possibilities.
        </p>
      </div>

      <div className=" flex items-center">
        <Image 
        className='rounded-full image-content'
        height={50} width={200} src="/images/profile-pic.jpg"
        alt="Your Profile Picture" />
      </div>
    </div>
  )
}

export default AboutMe
