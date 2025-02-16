"use client";
import React from "react";
import Image from "next/image";

const blogContents = [
  {
    title: "We Provide One on One MentorShip",
    description:
      "Unlock your full potential with personalized guidance! Our one-on-one mentorship program connects you with experienced mentors who provide tailored advice, support, and actionable strategies to help you achieve your goals. Whether you're advancing your career, building a business, or developing new skills, our dedicated mentors are here to empower your journey every step of the way. !" ,
   image: "/Designer.jpeg",
  },
  {
    title: "Immersive Learning Experience",
    description:"Dive into hands-on, interactive learning designed to ignite your curiosity and accelerate your growth. Our immersive programs combine real-world applications, expert-led sessions, and collaborative projects to ensure you gain practical skills and deep knowledge. Whether online or in-person, you'll be fully engaged in an environment that fosters creativity, critical thinking, and lasting impact.",
    image: "/learning.jpeg",
  },
  {
    title: "Thriving Developer Community",
    description:"Join a vibrant network of like-minded individuals who inspire, collaborate, and grow together! Our thriving community is a space to share ideas, gain insights, and build meaningful connections. Whether you're seeking support, feedback, or motivation, you'll find a welcoming environment where everyone is empowered to succeed. Together, we rise and change the world",
      image: "/community.jpeg",  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-10 mt-10 px-8  text-center transition-all duration-1000 ease-in-out hover:bg-[#141414] text-white">
      <h2 className="text-4xl font-bold mb-16">Why Choose Us?</h2>

      {/* Grid layout with responsiveness */}
      <div className="grid max-w-[50%]  md:max-w-[80%] m-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3  justify-center">
        {blogContents.map((blog, index) => (
          <Card key={index} blogContent={blog} />
        ))}
      </div>
    </section>
  );
};

export function Card({ blogContent }: { blogContent: any }) {
  return (
    <div className="transition-transform w-[360px]  transform hover:scale-105">
      {/* Outer container with smooth gradient border and soft glow */}
      <div className="relative p-[3px] rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-500 via-pink-500 via-red-500 to-blue-500 animate-gradient-spin shadow-glow opacity-0 animate-fade-in">
        {/* Inner card */}
        <div className="bg-white rounded-2xl shadow-md backdrop-blur-lg border border-transparent">
          {/* Image Container */}
          <div className="w-full aspect-w-16 aspect-h-10 rounded-t-2xl overflow-hidden relative">
            <Image
              src={blogContent.image}
              alt="thumbnail"
              height={400}
              width={400}
              className="transition-transform duration-500 transform md:max-h-[290px] group-hover:scale-90"
            />
          </div>

          {/* Card Content */}
          <div className="p-6">
            <h2 className="font-bold text-2xl text-left text-zinc-700">
              {blogContent.title}
            </h2>
            <p className="font-medium mt-4 text-left text-md text-zinc-500">
              {blogContent.description}
            </p>
          </div>
        </div>
      </div>

      {/* Tailwind Custom Animation & Glow Effect */}
      <style jsx>{`
        @keyframes gradientSpin {
          0% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 25% 75%;
          }
          50% {
            background-position: 50% 100%;
          }
          75% {
            background-position: 75% 25%;
          }
          100% {
            background-position: 100% 50%;
          }
        }

        @keyframes fadeIn {
          0% {
            opacity: 0;
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            filter: blur(0px);
          }
        }

        .animate-gradient-spin {
          background-size: 400% 400%;
          animation: gradientSpin 15s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fadeIn 2s ease-in-out forwards;
        }

        .shadow-glow {
          box-shadow: 0 0 10px rgba(255, 99, 71, 0.4), 
                      0 0 20px rgba(255, 165, 0, 0.3),
                      0 0 30px rgba(0, 191, 255, 0.3);
        }
      `}</style>
    </div>
  );
}



export default WhyChooseUs;
