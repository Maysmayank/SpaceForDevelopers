'use client'
import Image from 'next/image'
import React from 'react'

function OurStoryValues() {
    return (
        <div className='bg-[#181818] px-5 md:px-20 py-10' id="our-story">
            <h2 className=" font-bold mb-6 text-white text-center text-3xl">Our Story & Values</h2>
            <hr className="bg-gradient-to-r from-blue-400 via-teal-300 to-teal-400 border-none h-1 my-6" />

            <div className='relative grid grid-cols-1 md:grid-cols-2 gap-8'>
                {/* Left side: Two "hi" divs */}
                <div className='flex flex-col space-y-10'>
                <div className='bg-gray-800 h-36 justify-center flex flex-col gap-2 p-4 rounded-lg text-white'>
                <h1 className='font-semibold text-2xl'>2023</h1>
                    <span>Space for Developers was founded with a vision to...</span>
                    </div>

                    <div className='bg-gray-800 h-36 justify-center flex flex-col gap-2 p-4 rounded-lg text-white'>
                        <h1 className='font-semibold text-2xl'>2024</h1>
                        <span>We launched our first online course on...</span>
                    </div>
                </div>

                <h2 className="absolute hidden md:block top-0 left-1/2 transform -translate-x-1/2 h-full bg-gradient-to-b from-blue-400 via-teal-300 to-teal-400 text-white text-center py-2 px-[1.4px] opacity-70">
                </h2>
                <Image src={'/images/milestone1.svg'} width={50} height={60} alt='milestone1' className='absolute hidden md:block left-[48%] bg-[#1b1b1c] rounded-full opacity-95  top-4'></Image>

                <Image src={'/images/milestone2.svg'} width={50} height={60} alt='milestone2' className='absolute hidden md:block left-[48%] bg-[#1b1b1c] rounded-full opacity-95  bottom-16'></Image>

                {/* Right side */}
                {/* <div className='flex flex-col space-y-6'>
                    <div className='bg-gray-800 p-4 rounded-lg text-white'>
                        hi
                    </div>
                    <div className='bg-gray-800 p-4 rounded-lg text-white'>
                        hi
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default OurStoryValues
