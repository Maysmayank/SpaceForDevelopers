'use client';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { SignupForm } from './SignupForm';

const LoginModal = ({ closeModal }) => {

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0  bg-black bg-opacity-50 backdrop-blur-md z-40"
        onClick={closeModal}
      ></div>

      {/* Modal Content */}
      <div className="fixed inset-0 z-[1001] flex justify-center items-center ">
        <SignupForm cancel={closeModal}/>

      </div>
    </>
  );
};

export default LoginModal;
