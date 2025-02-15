'use client'
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

const OurPurpose = () => {
  return (
    <div id='about' className="mx-4 my-20 md:mx-16">
      {/* Our Purpose Section */}
      <h1 className='block md:hidden text-4xl text-bold text-center'>Our Mission</h1>
      <div className="relative section  grid md:grid-cols-2 md:pt-0 pt-10" id="our-purpose">
        {/* Left - Description */}

        <div className="  flex flex-col md:pl-10 p-4 bg-[#f5f5f5] md:py-5 gap-8  md:gap-10 justify-evenly text-black">
          
          <div className='md:w-[60%] flex flex-col pt-10 md:pt-20 h-[60%]'>
            <p className=" text-sm leading-relaxed text-left">
              At Space for Developers, we aim to create an inclusive space where developers can grow, collaborate, and innovate. We offer structured coding tutorials and online courses in a wide range of programming languages, from Python to MERN stack, IoT, and blockchain. Our goal is to help you build your coding skills through practical, hands-on learning experiences.
            </p>
            <p className=" text-sm leading-relaxed mt-4 text-left">
              But it doesn’t stop there. Our platform is more than just a place for learning. We foster a supportive community where developers can connect, share ideas, seek advice, and collaborate on projects. Whether you're working on your first coding project or an advanced application, you'll find the tools and support you need to bring your ideas to life.
            </p>
          </div>

          <Link href={'/'} className='w-[40%] md:mt-10 mt-10  text-center text-white py-1 hover:scale-110 transition-all bg-orange-600'>Register</Link>

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

        <div className='absolute  flex-row inset-0  items-center justify-center md:flex hidden  text-yellow-50 h-[400px]'>
          {/* Left Side - "OUR" */}
          <h1 className="flex text-black flex-col text-5xl font-bold tracking-wide">
            <span>O</span>
            <span>U</span>
            <span>R</span>
          </h1>

          {/* Right Side - "MISSION" */}
          <h1 className="flex flex-col  items-center text-5xl font-bold tracking-wide ml-10">
            <span>M</span>
            <span>I</span>
            <span>S</span>
            <span>S</span>
            <span>I</span>
            <span>O</span>
            <span>N</span>
          </h1>
        </div>



        {/* Right - Image */}
        <div className=" hidden md:block justify-center">
          <Image
            src="/childface.jpg" // Replace with actual image path
            alt="Our Purpose"
            width={500}
            height={400}
            
            className="h-full w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Who We Serve Section
      <div className="section mt-16 flex flex-col " id="who-we-serve">
        <h2 className="text-3xl font-semibold mb- text-center">Who We Serve</h2>
        <hr className="bg-gradient-to-r from-blue-400 via-teal-300 to-teal-400 border-none h-1 my-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-8">
          <div className="grid-item text-center p-6  shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/icon-beginner.svg"
              alt="Beginner Icon"
              width={50}
              height={50}
              className="mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">Beginners</h4>
            <p className="text-white">
              New to coding? We provide a welcoming environment to learn the fundamentals and build your first projects.
            </p>
          </div>
          <div className="grid-item text-center p-6 shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/icon-intermediate.svg"
              alt="Intermediate Icon"
              width={50}
              height={50}
              className="mx-auto mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">Intermediate Developers</h4>
            <p className="text-white">
              Ready to take your skills to the next level? Explore our advanced tutorials and courses on specialized topics.
            </p>
          </div>
          {/* Add more grid items for other audience segments */}
        


      {/* Key Features Section */}

    </div>
  );
};

export default OurPurpose;
// {/* <div className="section flex flex-col mt-16 " id="key-features">
// <h2 className="text-3xl font-semibold  text-center">Key Features & Benefits</h2>
// <hr className="bg-gradient-to-r from-blue-400 via-teal-300 to-teal-400 border-none h-1 my-6"/>

// <div className="card-grid grid grid-cols-1 sm:grid-cols-2  gap-8">
//   <div className="card text-center p-6  bg-[#272727] shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105">
//     <Image
//       src="/images/icon-tutorials.png"
//       alt="Tutorials Icon"
//       width={50}
//       height={50}
//       className="mb-4"
//     />
//     <h4 className="text-xl text-left font-semibold mb-2">Comprehensive Tutorials</h4>
//     <p className="text-white text-left">
//       Learn from our step-by-step tutorials covering a wide range of programming languages and technologies.
//     </p>
//   </div>
//   <div className="card text-center p-6 bg-[#272727] shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105">
//     <Image
//       src="/images/icon-community.svg"
//       alt="Community Icon"
//       width={50}
//       height={50}
//       className=" mb-4"
//     />
//     <h4 className="text-xl text-left font-semibold mb-2">Thriving Community</h4>
//     <p className="text-white text-left">
//       Connect with fellow developers, ask questions, share your projects, and get inspired in our supportive community.
//     </p>
//   </div>
//   {/* Add more cards for other features */}
