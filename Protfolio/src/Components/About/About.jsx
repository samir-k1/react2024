import React from 'react';
import Navbar from '../Navbar/Navbar';
const About = () => {
  <navbar/>
  return (
  
  
  
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center">
        {/* Profile Image */}
        <div className="w-full md:w-1/2">
          <img 
            src="https://via.placeholder.com/300" 
            alt="Your Name" 
            className="rounded-full mx-auto md:mx-0 md:mr-6 w-64 h-64 object-cover"
          />
        </div>
        
        {/* About Content */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="text-lg mb-4">
            Hello! I'm <strong>Your Name</strong>, a passionate software engineer specializing in web development, testing, web design, and UI/UX. I love creating intuitive and dynamic user interfaces, building responsive and scalable web applications, and continuously learning new technologies.
          </p>
          <p className="text-lg mb-4">
            I have worked on a variety of projects, ranging from e-commerce websites to AI-powered applications. My goal is to leverage my skills to solve real-world problems and make technology more accessible and user-friendly.
          </p>
          <p className="text-lg">
            When I'm not coding, you can find me exploring new tech trends, contributing to open-source projects, or enjoying a good book.
          </p>
        </div>
      </div>
    </div>
  );
};
<Navbar/>
export default About;
