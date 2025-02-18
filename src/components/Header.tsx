'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi'; // Import hamburger and close icons
import { FaRegAddressCard, FaRegClipboard, FaRegComments, FaUsers } from 'react-icons/fa'; // Import icons for each link
import { div } from 'motion/react-client';
import { X } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to control sidebar visibility
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = Math.min((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100);
      setScrollProgress(scrolled);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Sidebar links array with icons
  const navLinks = [
    { href: '#about', label: 'About', icon: <FaRegAddressCard size={20} /> },
    { href: '#courses', label: 'Courses', icon: <FaRegClipboard size={20} /> },
    { href: '/contact', label: 'Contact', icon: <FaRegComments size={20} /> },
    { href: '/community', label: 'Community', icon: <FaUsers size={20} /> },
  ];

  return (
    <nav className={`fixed pt-2 md:pt-4 top-0 left-0 w-full z-[1000] transition-all duration-300 bg-[#21262c] bg-opacity-60 backdrop-blur-md`}>
      <div className="container mx-auto h-[60px] flex justify-between px-10 md:px-20 items-center relative">
        {/* Hamburger Icon - Aligned to the right */}
        <div className="absolute right-5 md:hidden">
          <button onClick={toggleSidebar} className="text-white text-2xl">
            {isSidebarOpen ? <HiX size={40} /> : <HiMenu size={40} />} {/* Toggle icon */}
          </button>
        </div>

        {/* Logo */}
        <h1 className="text-xl md:text-3xl flex text-white italic font-extrabold knewave-regular">
          {/* <Image src={'/LOGO2.jpg'} alt=' ' width={40} height={200}/> */}
          Space for Developers
        </h1>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex font-gilroy items-center font-bold space-x-6 text-bold text-md gap-3">
          {navLinks.map(({ href, label }, index) => (
            <li key={index}>
              <Link href={href} className="hover:text-gray-400 hover:scale-105 text-white">
                {label}
              </Link>
            </li>
          ))}
          <button
            className="bg-blue-600 font-sans hover:bg-blue-700 px-4 py-2 rounded-md text-white"
            onClick={() => router.push("/signup")}
          >
            Sign Up For Free
          </button>
        </ul>

        {/* Expanding Gradient Line */}
        <div
          className="absolute bottom-0 left-1/2 h-[3px] bg-gradient-to-r from-green-400 via-blue-400 via-purple-500 via-orange-400 via-pink-600 to-yellow-400 transition-all duration-300"
          style={{
            width: `${scrollProgress}%`,
            transform: 'translateX(-50%)',
          }}
        />
      </div>

      {/* Sidebar (Mobile) */}
      {isSidebarOpen && (
        <div>
          <div
          className="fixed md:hidden top-0 right-0 w-64 bg-gradient-to-b from-[#21262c] via-[#1c1f24] to-[#21262c] text-white h-screen p-6 transform transition-transform duration-300 z-[999] shadow-lg rounded-l-lg"
        >
          <div className='absolute right-6' onClick={()=>setIsSidebarOpen(false)}><X/></div>
          <ul className="space-y-6 mt-28 flex flex-col  h-screen">
            <div className='flex flex-col flex-grow gap-10'>
            {navLinks.map(({ href, label, icon }, index) => (
              <li key={index} className="flex items-center space-x-3">
                <Link href={href} className="block hover:text-gray-400 text-white text-lg flex items-center space-x-3">
                  {icon}
                  <span>{label}</span>
                </Link>
              </li>
            ))}
            </div>

            <li className='flex-1'>
              <button
                className="bg-blue-600 font-sans hover:bg-blue-700 px-4 py-2 rounded-md text-white w-full"
                onClick={() => router.push("/signup")}
              >
                Sign Up For Free
              </button>
            </li>
          </ul>
        </div>
        </div>
      )}
    </nav>
  );
};

export default Header;

interface ShimmerButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

const ShimmerButton: React.FC<ShimmerButtonProps> = ({ label, onClick, className }) => {
  return (
    <button
      className={`inline-flex h-12 items-center justify-center rounded-md border border-slate-800 px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 shimmer-bg ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
