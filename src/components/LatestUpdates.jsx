import Image from 'next/image'

const LatestUpdates = () => {
  return (
    <section className="latest-updates py-12 px-6 text-center bg-[#181818]">
      <h2 className="text-3xl font-semibold mb-8">Latest Updates</h2>
      <div className="updates-grid grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="update-card bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="update-image">
            <Image
              src="/images/kotlin.svg"
              alt="Workshop"
              width={500}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="update-content p-6">
            <h3 className="text-xl font-semibold mb-4">Upcoming Workshop</h3>
            <p className="text-gray-600 mb-4">Join our weekend workshop on Advanced JavaScript</p>
            <a href="#" className="text-blue-500 font-semibold hover:text-blue-700">Register Now</a>
          </div>
        </div>

        <div className="update-card bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="update-image">
            <Image
              src="/images/pycharm.svg"
              alt="New Course"
              width={500}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="update-content p-6">
            <h3 className="text-xl font-semibold mb-4">New Course Alert</h3>
            <p className="text-gray-600 mb-4">React Native for Cross-platform Development</p>
            <a href="#" className="text-blue-500 font-semibold hover:text-blue-700">Enroll Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
