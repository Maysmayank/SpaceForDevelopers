'use client';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const LoginModal = ({ closeModal }) => {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40"
        onClick={closeModal}
      ></div>

      {/* Modal Content */}
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div
          className="w-[400px] md:w-[540px] md:h-[480px] rounded-xl shadow-xl p-4 relative overflow-hidden"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(30px)' }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            className="absolute top-5 right-6 text-white text-3xl hover:text-red-500 transition-all"
            onClick={closeModal}
          >
            <FaTimes />
          </button>

          {/* Tabs */}
          <div className="flex justify-center gap-10 border-b mb-6 mt-6">
            <button
              className={`text-xl font-semibold py-2 transition-all border-b-2 ${
                activeTab === 'login' ? 'text-white border-white' : 'text-blue-700 border-transparent hover:border-blue-500'
              }`}
              onClick={() => setActiveTab('login')}
            >
              Login
            </button>
            <button
              className={`text-xl font-semibold py-2 transition-all border-b-2 ${
                activeTab === 'signup' ? 'text-white border-white' : 'text-blue-700 border-transparent hover:border-blue-500'
              }`}
              onClick={() => setActiveTab('signup')}
            >
              Signup
            </button>
          </div>

          {/* Form Content */}
          <div>
            {activeTab === 'login' && (
              <form id="login-form" className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-[#4b4b4b] text-white w-full p-3 rounded-lg outline-none"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-[#4b4b4b] text-white w-full p-3 rounded-lg outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#20002c] to-[#6f00ff] hover:opacity-90 text-white w-full py-3 rounded-lg font-semibold transition-all"
                >
                  Login
                </button>
                <div className="flex flex-col gap-3">
                  <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#20002c] to-[#6f00ff] hover:scale-105 transition-all text-white py-3 rounded-lg">
                    <FcGoogle size={20} /> Login with Google
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#20002c] to-[#6f00ff] hover:scale-105 transition-all text-white py-3 rounded-lg">
                    <FaGithub size={20} /> Login with Github
                  </button>
                </div>
              </form>
            )}


            {activeTab === 'signup' && (
              <form id="signup-form" className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-[#4b4b4b] text-white w-full p-3 rounded-lg outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-[#4b4b4b] text-white w-full p-3 rounded-lg outline-none"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-[#4b4b4b] text-white w-full p-3 rounded-lg outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#20002c] to-[#6f00ff] hover:opacity-90 text-white w-full py-3 rounded-lg font-semibold transition-all"
                >
                  Signup
                </button>
                <div className="flex flex-col gap-3">
                  <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#20002c] to-[#6f00ff] hover:scale-105 transition-all text-white py-3 rounded-lg">
                    <FcGoogle size={20} /> Signup with Google
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#20002c] to-[#6f00ff] hover:scale-105 transition-all text-white py-3 rounded-lg">
                    <FaGithub size={20} /> Signup with Github
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
