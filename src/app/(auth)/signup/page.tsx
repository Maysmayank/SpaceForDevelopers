"use client";
import { SignupForm } from "@/components/SignupForm";
import Image from "next/image";
import React from "react";

function Page() {
  return (
    <div className="flex items-center  justify-center  ">
      <div className="flex  w-full md:mt-0  md:w-[65%] relative">
        {/* Image Container */}
        <div className="relative md:block hidden ">
          <Image
            src={"/images/astronaut.jpg"}
            alt="Space Image"
            height={300}
            width={500}
            className="hidden md:max-h-full opacity-45 md:block rounded-lg"
          />

          {/* Text Overlay */}
          <div className="absolute top-36  flex flex-col gap-8 px-4 py-2 rounded-lg">
            <h1 className="text-3xl md:text-6xl font-bold text-white">Join Space For Developers</h1>
            <span>Join our e-learning platform to master new skills, collaborate with like-minded developers, and get expert guidance. Start your journey today!</span>
          </div>
        </div>

        {/* Signup Form */}
        <SignupForm />
      </div>
    </div>
  );
}

export default Page;
