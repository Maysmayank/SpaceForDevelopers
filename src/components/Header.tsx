'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Header = ({ openModal }:any) => {

  return (
      <nav className="bg-gray-900 w-full text-white p-4">
        <div className="container mx-auto h-[50px] flex justify-between px-20 items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold">Space for Developers</h1>
          {/* Navigation Links */}
          <ul className=" space-x-6 hidden md:flex">
            <li>
              <Link href="#about" className="hover:text-gray-400">
                About
              </Link>
            </li>

            <li>
              <Link href="#courses" className="hover:text-gray-400">
                Courses
              </Link>
            </li>
            
            <li>
              <Link href="/contact" className="hover:text-gray-400">
                Contact
              </Link>
            </li>

            <button onClick={openModal}>Login</button>

          </ul>
        </div>
      </nav>


  );
};

export default Header;
