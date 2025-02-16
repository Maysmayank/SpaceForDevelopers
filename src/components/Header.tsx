'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = ({ openModal }: any) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = Math.min((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100);
      setScrollProgress(scrolled);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed pt-4 top-0 left-0 w-full z-[1000] transition-all duration-300
      bg-[#21262c] bg-opacity-60 backdrop-blur-md`}
    >
      <div className="container mx-auto h-[60px] flex justify-between px-10 md:px-20 items-center relative">
        {/* Logo */}
        <h1 className="text-3xl text-white italic font-extrabold knewave-regular">
          Space for Developers
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex   font-gilroy items-center font-bold  space-x-6 text-bold text-md gap-3">
          <li>
            <Link href="#about" className="hover:text-gray-400 hover:scale-105 text-white">
              About
            </Link>
          </li>
          <li>
            <Link href="#courses" className="hover:text-gray-400 hover:scale-110 text-white">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-400 text-white">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/community" className="hover:text-gray-400 text-white">
              <ShimmerButton label='Community'/>
            </Link>
          </li>

          <button
            onClick={openModal}
            className="bg-blue-600 font-sans hover:bg-blue-700 px-4 py-2 rounded-md text-white"
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

