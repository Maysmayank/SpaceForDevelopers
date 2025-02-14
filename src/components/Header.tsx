'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = ({ openModal }: any) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed py-2  top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto h-[60px] flex justify-between px-10 md:px-20 items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold  text-white">Space for Developers</h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <Link href="#about" className="hover:text-gray-400 text-white">
              About
            </Link>
          </li>
          <li>
            <Link href="#courses" className="hover:text-gray-400 text-white">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-400 text-white">
              Contact
            </Link>
          </li>
          <button
            onClick={openModal}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white"
          >
            Login
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
