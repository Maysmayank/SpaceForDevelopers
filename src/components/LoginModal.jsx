'use client';
import React, { useState } from 'react';

const LoginModal = ({ closeModal }) => {
  const [activeTab, setActiveTab] = useState('login'); // Track active tab (login/signup)

  return (
    <>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 z-40"
        onClick={closeModal}
      ></div>

      {/* Modal Content */}
      <div className="fixed inset-0 flex justify-center items-center z-50">
        <div
          className="bg-white w-[400px] md:w-[540px] md:h-[450px] rounded-lg shadow-lg p-6 relative"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(30px)',
          }}
          onClick={(e) => e.stopPropagation()} // Prevent backdrop click from closing the modal
        >
          {/* Close Button */}
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
            onClick={closeModal}
          >
            &times;
          </button>

          {/* Tabs */}
          <ul className="flex  justify-center gap-10 border-b mb-4 mt-6">
            <li
              className={`cursor-pointer  text-center py-2 rounded-t-lg ${
                activeTab === 'login'
                  ? ' text-blue-600'
                  : 'text-white text-gray-600'
              }`}
              onClick={() => setActiveTab('login')}
            >
              Login
            </li>
            <li
              className={`cursor-pointer  text-center py-2 rounded-t-lg ${
                activeTab === 'signup'
                  ? ' text-blue-500'
                  : ' text-gray-600 text-white'
              }`}
              onClick={() => setActiveTab('signup')}
            >
              Signup
            </li>
          </ul>

          {/* Form Content */}
          <div>
            {activeTab === 'login' && (
              <form id="login-form">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-[#4b4b4b] w-full p-2 mb-4 rounded-lg"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-[#4b4b4b] w-full p-2 mb-4 rounded-lg"
                  required
                />
                <div className="flex flex-col gap-4">
                  <button
                    type="submit"
                    className="bg-[#5333dc] text-white w-full py-2 rounded-lg"
                  >
                    Login
                  </button>

                  <button
                    type="button"
                    className="bg-[#4285f4] text-white w-full py-2 rounded-lg"
                  >
                    Login with Google
                  </button>
                  
                  <button
                    type="button"
                    className="bg-[#4285f4] text-white w-full py-2 rounded-lg"
                  >
                    Login with Github
                  </button>
                </div>
              </form>
            )}

            {activeTab === 'signup' && (
              <form id="signup-form">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-[#4b4b4b] w-full p-2 mb-4 rounded-lg"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-[#4b4b4b] w-full p-2 mb-4 rounded-lg"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-[#4b4b4b] w-full p-2 mb-4 rounded-lg"
                  required
                />
                <div className="flex flex-col gap-2">
                  <button
                    type="submit"
                    className="bg-green-500 text-white w-full py-2 rounded-lg"
                  >
                    Signup
                  </button>
                  <button
                    type="button"
                    className="bg-red-500 text-white w-full py-2 rounded-lg"
                  >
                    Signup with Google
                  </button>
                  <button
                    type="button"
                    className="bg-gray-800 text-white w-full py-2 rounded-lg"
                  >
                    Signup with Github
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
