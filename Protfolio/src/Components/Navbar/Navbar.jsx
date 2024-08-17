import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-500">
            <a href="/">MyLogo</a>
          </div>
  
          {/* Navigation Links */}
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-gray-800 hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
            <Link to="/about" className="text-gray-800 hover:text-blue-500">
            About
            </Link>

            </li>
            <li>
              <a href="/work" className="text-gray-800 hover:text-blue-500">
                Work
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
export default Navbar
