"use client";
import React from "react";
import Image from "next/image";

const blogContents = [
  {
    title: "Industry-Aligned Curriculum",
    description:
      "Designed with insights from industry leaders to keep you ahead of the curve. Gain real-world skills that make an impact.",
    image: "/childface.jpg",
  },
  {
    title: "Immersive Learning Experience",
    description:
      "Master new skills through interactive module labs, hands-on projects, and live Q&A sessions with expert mentors.",
    image: "/childface.jpg",
  },
  {
    title: "Thriving Developer Community",
    description:
      "Join a network of passionate developers. Engage in discussions, collaborate on projects, and grow together.",
    image: "/childface.jpg",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-10 mt-10 px-8  text-center transition-all duration-1000 ease-in-out hover:bg-[#141414] text-white">
      <h2 className="text-4xl font-bold mb-16">Why Us?</h2>

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
    <div className="transition-transform  w-[360px] transform hover:scale-105">
      <div className="relative overflow-hidden h-full rounded-2xl transition duration-300 group bg-white border border-gray-200 shadow-md hover:shadow-2xl hover:border-indigo-500/50 backdrop-blur-lg">
        {/* Image Container with Hover Effect */}
        <div className="w-full aspect-w-16 aspect-h-10 rounded-t-2xl overflow-hidden relative">
          <Image
            src={blogContent.image}
            alt="thumbnail"
            height={400}
            width={400}
            className="transition-transform duration-500 transform group-hover:scale-90"
          />
        </div>

        {/* Card Content */}
        <div className="p-6">
          <h2 className="font-bold text-2xl text-left text-zinc-700">{blogContent.title}</h2>
          <p className="font-normal mt-2 text-left text-sm text-zinc-500">
            {blogContent.description}
          </p>

          {/* CTA Button */}
          {/* <div className="flex justify-center mt-6">
            <button className="px-6 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:from-blue-500 hover:to-indigo-500 hover:shadow-xl">
              Read More
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
