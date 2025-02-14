'use client';
import Image from 'next/image';
import Link from 'next/link';

const LatestUpdates = () => {
  return (
    <section className="latest-updates py-12 px-3 md:px-6 text-center bg-[#181818]">
      <h2 className="text-4xl font-bold mb-10 text-white tracking-wide">
        Latest Updates
      </h2>

      <div className="updates-grid grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="update-card bg-gradient-to-br from-[#222] via-[#1c1c1c] to-[#181818] shadow-xl rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="update-image relative w-full h-[350px]">
            <Image
              src="/images/python.jpg"
              alt="Blockchain Workshop"
              fill
              className="object-cover"
            />
          </div>
          <div className="update-content p-6 text-left">
            <h3 className="text-2xl font-semibold mb-4 text-white">Python Programming Language</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Python is easy to learn with simple, readable syntax, making it perfect for building strong logic from an early age. It lets students create cool projects like games and AI quickly, while boosting problem-solving skills. Used by tech giants like Google and NASA, Python opens doors to future careers in tech.
            </p>
            <Link
            
            className="inline-block px-5 py-3 rounded-lg text-lg font-semibold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 transition-all duration-300"

             href={'https://docs.google.com/forms/d/e/1FAIpQLSeOH9wuQuCniRr27uyhNlKQwe1-VxDclO8C8ht7w7rniW5Spw/viewform'}>
            Register Now

            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="update-card bg-gradient-to-br from-[#222] via-[#1c1c1c] to-[#181818] shadow-xl rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="update-image relative w-full h-[350px]">
            <Image
              src="/images/webdev.jpg"
              alt="Web Development Workshop"
              fill
              className="object-cover"
            />
          </div>
          <div className="update-content p-6 text-left">
            <h3 className="text-2xl font-semibold mb-4 text-white">Web Development</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
            In today’s digital world, *web development* is a must-have skill, powering everything from social media to online businesses. It helps students from *9th grade to college* build strong *problem-solving skills* while creating real-world projects like websites and apps. With endless career opportunities in tech, web development boosts *creativity* and prepares students for a *future-proof career. Start building your ideas today with our **web development course*! 🚀
            </p>

            <Link
            
            className="inline-block px-5 py-3 rounded-lg text-lg font-semibold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 transition-all duration-300"

             href={'https://docs.google.com/forms/d/e/1FAIpQLSeOH9wuQuCniRr27uyhNlKQwe1-VxDclO8C8ht7w7rniW5Spw/viewform'}>
            Register Now

            </Link>
           
          </div>
        </div>

        <div className="update-card bg-gradient-to-br from-[#222] via-[#1c1c1c] to-[#181818] shadow-xl rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="update-image relative w-full h-[350px]">
            <Image
              src="/images/workshop.jpg"
              alt="Blockchain Workshop"
              fill
              className="object-cover"
            />
          </div>
          <div className="update-content p-6 text-left">
            <h3 className="text-2xl font-semibold mb-4 text-white">Upcoming Workshop</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
            Welcome to our Interactive Workshops! Here, we offer hands-on learning experiences designed to help students and enthusiasts build practical skills in coding, technology, and more. Whether you're a beginner or looking to enhance your knowledge, our workshops cover a wide range of topics, including Python programming, web development, AI, and beyond. Join us for expert-led sessions, real-world projects, and collaborative learning that will empower you to bring your ideas to life. Don't just learn—create, innovate, and grow with our dynamic workshops!
            </p>
            <Link
            
            className="inline-block px-5 py-3 rounded-lg text-lg font-semibold text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 transition-all duration-300"

             href={'https://docs.google.com/forms/d/e/1FAIpQLSeOH9wuQuCniRr27uyhNlKQwe1-VxDclO8C8ht7w7rniW5Spw/viewform'}>
            Register Now

            </Link>
          </div>
        </div>


        <div className="update-card bg-gradient-to-br from-[#222] via-[#1c1c1c] to-[#181818] shadow-xl rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <div className="update-image relative w-full h-[350px]">
            <Image
              src="/images/news.webp"
              alt="Blockchain Workshop"
              fill
              className="object-cover"
            />
          </div>
          <div className="update-content p-6 text-left">
            <h3 className="text-2xl font-semibold mb-4 text-white">News and Updates</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
            Stay up-to-date with the latest trends in tech and all things related to Space for Developers! Here, we’ll share exciting news, industry insights, and updates on our upcoming events, workshops, and initiatives. Whether it's the newest tech breakthroughs or developments within our community, this is your go-to space for staying informed and inspired.            </p>
         
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
