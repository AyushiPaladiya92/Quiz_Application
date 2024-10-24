import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, InformationCircleIcon, PhoneIcon } from '@heroicons/react/24/solid'; // Importing icons

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold tracking-tight hover:text-purple-400 transition-colors duration-300">
          QuizVenture
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8">
            <li className="flex items-center space-x-2">
              <HomeIcon className="h-5 w-5 text-purple-400" />
              <Link to="/" className="hover:text-purple-400 transition-colors duration-300">Home</Link>
            </li>
            <li className="flex items-center space-x-2">
              <InformationCircleIcon className="h-5 w-5 text-purple-400" />
              <Link to="/about" className="hover:text-purple-400 transition-colors duration-300">About</Link>
            </li>
            <li className="flex items-center space-x-2">
              <PhoneIcon className="h-5 w-5 text-purple-400" />
              <Link to="/contact" className="hover:text-purple-400 transition-colors duration-300">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
