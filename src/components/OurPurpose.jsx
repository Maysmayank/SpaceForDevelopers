'use client'
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

const OurPurpose = () => {
  return (
    <div id='about' className="mx-4 my-10 md:my-20 md:mx-16">
      {/* Our Purpose Section */}
      <div className="relative section  grid md:grid-cols-2 " id="our-purpose">
        {/* Left - Description */}
      
        <div className="  flex flex-col md:pl-10 p-4 bg-[#f5f5f5] md:py-5 gap-8  md:gap-10 justify-evenly text-black">
          <h1 className='text-5xl font-bold mt-5'>Our Mission</h1>  
          <div className='md:w-[60%] flex flex-col pt-10 md:pt-1 h-[60%]'>
            <p className=" text-sm leading-relaxed text-left">
              At Space for Developers, we aim to create an inclusive space where developers can grow, collaborate, and innovate. We offer structured coding tutorials and online courses in a wide range of programming languages, from Python to MERN stack, IoT, and blockchain. Our goal is to help you build your coding skills through practical, hands-on learning experiences.
            </p>
            <p className=" text-sm leading-relaxed mt-4 text-left">
              But it doesn’t stop there. Our platform is more than just a place for learning. We foster a supportive community where developers can connect, share ideas, seek advice, and collaborate on projects. Whether you're working on your first coding project or an advanced application, you'll find the tools and support you need to bring your ideas to life.
            </p>
          </div>

          <Link href={'/'} className='w-[40%] md:mt-10 mt-10  text-center text-white py-2 hover:scale-110 transition-all bg-orange-600'>Register</Link>

          <div className="socials flex gap-4 mt-4">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-black text-3xl hover:scale-110 transition-transform cursor-pointer" />
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-black text-3xl hover:scale-110 transition-transform cursor-pointer" />
            </a>

            {/* Twitter */}
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-black text-3xl hover:scale-110 transition-transform cursor-pointer" />
            </a>

            {/* Email */}
            <a href="mailto:your@email.com">
              <FaEnvelope className="text-black text-3xl hover:scale-110 transition-transform cursor-pointer" />
            </a>
          </div>

        </div>




        {/* Right - Image */}
        <div className=" hidden md:block justify-center">
          <Image
            src="/images/mission.png" // Replace with actual image path
            alt="Our Purpose"
            width={500}
            height={400}
            
            className="h-full w-full shadow-lg"
          />

        </div>
      </div>

    

    </div>
  );
};

export default OurPurpose;

