import React from 'react';
import { FaGithub, FaLinkedin, FaBehance } from 'react-icons/fa';
import MyName from '../../assets/Myimage.jpg'

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-600-gray-100 py-20">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        {/* Left Side: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold text-gray-900">
           Samir Khan
          </h1>
          <h2 className="text-2xl text-gray-500 mt-2">
            Software Engineer
          </h2>
          <p className="mt-4 text-black">
            Passionate about building user-friendly and efficient software solutions. I specialize in web development, UI/UX design, and delivering high-quality digital experiences.
          </p>
          <div className="mt-6 flex justify-center md:justify-start space-x-6">
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-blue-500"
            >
              <FaGithub size={50} />
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-blue-500"
            >
              <FaLinkedin size={50} />
            </a>
            <a
              href="https://behance.net/your-behance"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-blue-500"
            >
              <FaBehance size={50} />
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={MyName}
            alt="Your Name"
            className="w-64 h-64 rounded-full shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;