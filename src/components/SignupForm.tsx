"use client";
import React, { useState } from "react";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import axios from "axios";
import { useRouter } from "next/navigation";

export function SignupForm() {
  const [isSignup, setIsSignup] = useState(true);
  const [loading, setLoading] = useState(false);
  const router=useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(process.env.NEXT_PUBLIC_API_URL);
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData);
    
    try {
      const endpoint = isSignup ? `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/signup` : `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/login`; // Change this to your actual API endpoint
      const response = await axios.post(endpoint, formData ,  { withCredentials: true});
      console.log(response);
      
      console.log("Response:", response.data);
      alert(isSignup ? "Signup Successful!" : "Login Successful!");
     
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong! Please try again.");
    } finally {
      setLoading(false);
      isSignup?"":router.push("/")
    }
  };

  return (
    <div className="md:max-w-md mt-40 md:mt-0 w-full  md:max-h-full  bg-[#eeeeee] text-black shadow-xl border border-gray-300 p-6  text-center">
      <h2 className="text-2xl font-bold">
        {isSignup ? "Sign Up" : "Welcome Back!"}
      </h2>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        {/* Render username input only during signup */}
        {isSignup && (
          <InputContainer label="Username" name="username" placeholder="Enter your username" type="text" onChange={handleChange} />
        )}
        
        <InputContainer label="Email" name="email" placeholder="your@email.com" type="email" onChange={handleChange} />
        
        <InputContainer label="Password" name="password" placeholder="********" type="password" onChange={handleChange} />
        
       

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 mt-4 text-white font-semibold rounded-md transition ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:bg-gray-800"
          }`}
        >
          {loading ? "Processing..." : isSignup ? "Sign Up" : "Login"}
        </button>
      </form>

      <p
        className="mt-4 text-sm text-gray-600 cursor-pointer hover:text-black transition"
        onClick={() => setIsSignup(!isSignup)}
      >
        {isSignup
          ? "Already have an account? Login"
          : "Don't have an account? Sign up"}
      </p>

      <div className="my-6 border-t border-gray-300"></div>

      <div className="flex flex-col space-y-3">
        <OAuthButton icon={<IconBrandGithub size={20} />} label="Continue with GitHub" />
        <OAuthButton icon={<IconBrandGoogle size={20} />} label="Continue with Google" />
      </div>
    </div>
  );
}

const InputContainer = ({ label, name, placeholder, type, onChange }: any) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor={name} className="text-sm text-left font-medium text-black">
        {label}
      </label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        className="p-3 bg-gray-100 border border-gray-300 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
      />
    </div>
  );
};

const OAuthButton = ({ icon, label }: any) => {
  return (
    <button className="flex items-center justify-center space-x-2 py-2 w-full rounded-md font-medium shadow-md bg-gray-100 text-black hover:bg-gray-200 transition">
      {icon}
      <span className="text-sm">{label}</span>
    </button>
  );
};
