import React, { useState } from 'react';
import Link from 'next/link';

const Header = ({ openModal }) => {

  return (
    <header >
      <nav className="bg-gray-900  text-white p-4">
        <div className="container mx-auto h-[50px] flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold">Space for Developers</h1>
          {/* Navigation Links */}
          <ul className="flex space-x-6">
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

            <button onClick={openModal}
            > Login</button>

          </ul>
        </div>
      </nav>


    </header>
  );
};

export default Header;
