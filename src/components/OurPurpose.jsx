'use client'
import Image from 'next/image';

const OurPurpose = () => {
  return (
    <div id='about' className=" px-4 md:px-20 py-12 bg-[#181818]  ">
      {/* Our Purpose Section */}
      <div className="section flex flex-col gap-0" id="our-purpose">
        <h2 className="text-3xl font-semibold  text-center" >Our Purpose</h2>
        <hr className="bg-gradient-to-r from-blue-400 via-teal-300 to-teal-400 border-none h-1 my-6"/>
        <p className="text-center text-white text-sm leading-relaxed">
          At Space for Developers, we aim to create an inclusive space where developers can grow, collaborate, and innovate. We offer structured coding tutorials and online courses in a wide range of programming languages, from Python to MERN stack, IoT, and blockchain. Our goal is to help you build your coding skills through practical, hands-on learning experiences.
          But it doesn’t stop there. Our platform is more than just a place for learning. We foster a supportive community where developers can connect, share ideas, seek advice, and collaborate on projects. Whether you're working on your first coding project or an advanced application, you'll find the tools and support you need to bring your ideas to life.
        </p>
      </div>

      {/* Who We Serve Section */}
      <div className="section mt-16 flex flex-col " id="who-we-serve">
        <h2 className="text-3xl font-semibold mb- text-center">Who We Serve</h2>
        <hr className="bg-gradient-to-r from-blue-400 via-teal-300 to-teal-400 border-none h-1 my-6"/>
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
        </div>
      </div>

      {/* Key Features Section */}
      <div className="section flex flex-col mt-16 " id="key-features">
        <h2 className="text-3xl font-semibold  text-center">Key Features & Benefits</h2>
        <hr className="bg-gradient-to-r from-blue-400 via-teal-300 to-teal-400 border-none h-1 my-6"/>
        
        <div className="card-grid grid grid-cols-1 sm:grid-cols-2  gap-8">
          <div className="card text-center p-6  bg-[#272727] shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/icon-tutorials.png"
              alt="Tutorials Icon"
              width={50}
              height={50}
              className="mb-4"
            />
            <h4 className="text-xl text-left font-semibold mb-2">Comprehensive Tutorials</h4>
            <p className="text-white text-left">
              Learn from our step-by-step tutorials covering a wide range of programming languages and technologies.
            </p>
          </div>
          <div className="card text-center p-6 bg-[#272727] shadow-md rounded-lg transform transition-transform duration-300 hover:scale-105">
            <Image
              src="/images/icon-community.svg"
              alt="Community Icon"
              width={50}
              height={50}
              className=" mb-4"
            />
            <h4 className="text-xl text-left font-semibold mb-2">Thriving Community</h4>
            <p className="text-white text-left">
              Connect with fellow developers, ask questions, share your projects, and get inspired in our supportive community.
            </p>
          </div>
          {/* Add more cards for other features */}
        </div>
      </div>
    </div>
  );
};

export default OurPurpose;
