"use client";
import React, { useState } from "react";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import { X } from "lucide-react";
import Link from "next/link";

export function SignupForm({ cancel }: any) {
  const [isSignup, setIsSignup] = useState(true); // State to toggle between Signup and Login form

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(isSignup ? "Signup Form Submitted" : "Login Form Submitted");
  };

  const handleToggleForm = () => {
    setIsSignup(!isSignup); // Toggle between signup and login
  };

  return (
    <div className="max-w-xl max-h-[99%]  relative w-full mx-auto rounded-none md:rounded-2xl p-4 md:px-15 md:p-8 shadow-lg bg-white mt-2 dark:bg-black">
      <div
        className="absolute top-6 p-2 right-6 text-black bg-white cursor-pointer"
        onClick={cancel}
      >
        <X className="text-black" />
      </div>

      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        {isSignup ? "Space For Developers - Signup" : "Space For Developers - Login"}
      </h2>
    

      <form className="my-8 text-black" onSubmit={handleSubmit}>
        {isSignup ? (
          <>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <InputContainer
                label="UserName"
                id="UserName"
                placeholder="UserName"
                type="text"
              />
            </div>

            <InputContainer
              label="Gmail Address"
              id="email"
              placeholder="projectmayhem@fc.com"
              type="text"
            />
            <InputContainer
              label="Password"
              id="password"
              placeholder="••••••••"
              type="password"
            />
            <InputContainer label="Phone Number" type="tel" />
            <button
              className="bg-black text-white w-full rounded-md h-12 font-medium mt-10"
              type="submit"
            >
              Sign up &rarr;
            </button>
          </>
        ) : (
          <>
            <InputContainer
              label="Gmail Address"
              id="email"
              placeholder="projectmayhem@fc.com"
              type="text"
            />
            <InputContainer
              label="Password"
              id="password"
              placeholder="••••••••"
              type="password"
            />
            <button
              className="bg-black text-white w-full rounded-md h-12 font-medium mt-10"
              type="submit"
            >
              Login &rarr;
            </button>
          </>
        )}
        <p
          className="text-white mt-4 cursor-pointer"
          onClick={handleToggleForm}
        >
          {isSignup
            ? "Already have an Account? Login"
            : "Don't have an Account? Signup"}
        </p>
      </form>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      <div className="flex flex-col space-y-4">
        <OAuthButton icon={<IconBrandGithub size={20} />} label="GitHub" />
        <OAuthButton icon={<IconBrandGoogle size={20} />} label="Google" />
      </div>
    </div>
  );
}

const InputContainer = ({ label, id, placeholder, type }: any) => {
  return (
    <div className="flex flex-col space-y-2 w-full mb-4">
      <label
        htmlFor={id}
        className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
      >
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        type={type}
        className="border rounded-md p-2"
      />
    </div>
  );
};

const OAuthButton = ({ icon, label }: any) => {
  return (
    <button
      className={`flex items-center space-x-2 justify-center px-4 w-full rounded-md h-10 font-medium shadow-md ${
        label === "GitHub"
          ? "bg-black text-white"
          : "bg-[#4285F4] text-white"
      }`}
    >
      {icon}
      <span className="text-neutral-700 dark:text-neutral-300 text-sm">
        {label}
      </span>
    </button>
  );
};
