import React from "react";
import Image from "next/image";

function KeyFeatures() {
  return (
    <div className="section flex flex-col md:mt-16 items-center mx-3" id="key-features">
      <h2 className="text-4xl font-bold text-white text-center mb-6">
        Key Features & Benefits
      </h2>

      <div className="card-grid flex flex-col gap-10 w-full max-w-7xl">
        {/* Card 1 - Left */}
        <div className="flex justify-start">
          <div className="relative p-6 w-[80%] bg-[#272727] shadow-md rounded-lg overflow-hidden transition-all duration-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-800">
            <Image
              src="/images/icon-tutorials.png"
              alt="Tutorials Icon"
              width={50}
              height={50}
              className="mb-4"
            />
            <h4 className="text-xl font-semibold mb-2 text-white">
              Comprehensive Tutorials
            </h4>
            <p className="text-white">
              Learn from our step-by-step tutorials covering a wide range of programming languages and technologies.
            </p>
          </div>
        </div>

        {/* Card 2 - Right */}
        <div className="flex justify-end">
          <div className="relative p-6 w-[80%] bg-[#272727] shadow-md rounded-lg overflow-hidden transition-all duration-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-800">
            <Image
              src="/images/icon-community.svg"
              alt="Community Icon"
              width={50}
              height={50}
              className="mb-4"
            />
            <h4 className="text-xl font-semibold mb-2 text-white">
              Thriving Community
            </h4>
            <p className="text-white">
              Connect with fellow developers, ask questions, share your projects, and get inspired in our supportive community.
            </p>
          </div>
        </div>

        {/* Card 3 - Left */}
        {/* <div className="flex justify-start">
          <div className="relative p-6 w-80 bg-[#272727] shadow-md rounded-lg overflow-hidden transition-all duration-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-800">
            <Image
              src="/images/icon-innovation.png"
              alt="Innovation Icon"
              width={50}
              height={50}
              className="mb-4"
            />
            <h4 className="text-xl font-semibold mb-2 text-white">
              Innovation Hub
            </h4>
            <p className="text-white">
              Stay ahead with the latest industry trends, tools, and technologies for modern development.
            </p>
          </div>
        </div> */}

        {/* Card 4 - Right */}
        {/* <div className="flex justify-end">
          <div className="relative p-6 w-80 bg-[#272727] shadow-md rounded-lg overflow-hidden transition-all duration-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-800">
            <Image
              src="/images/icon-support.png"
              alt="Support Icon"
              width={50}
              height={50}
              className="mb-4"
            />
            <h4 className="text-xl font-semibold mb-2 text-white">
              24/7 Support
            </h4>
            <p className="text-white">
              Get assistance anytime with our dedicated support team, available to help you at every step.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default KeyFeatures;
