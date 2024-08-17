import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <ul className="flex space-x-4 mt-4 md:mt-0">
          <li>
            <a href="https://github.com/yourusername" className="hover:text-gray-400">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/yourusername" className="hover:text-gray-400">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://twitter.com/yourusername" className="hover:text-gray-400">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://yourportfolio.com" className="hover:text-gray-400">
              Portfolio
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
