import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; // Social media icons
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlinePhone, AiOutlineLock } from 'react-icons/ai'; // Quick link icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Information */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">QuizMaster</h3>
            <p className="text-gray-400">Engage your intellect with our exciting quizzes!</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <AiOutlineHome className="text-gray-400 hover:text-blue-800 transition duration-300" />
                <Link to="/" className="hover:text-blue-800 transition-colors duration-300">Home</Link>
              </li>
              <li className="flex items-center space-x-2">
                <AiOutlineInfoCircle className="text-gray-400 hover:text-blue-800 transition duration-300" />
                <Link to="/about" className="hover:text-blue-800 transition-colors duration-300">About</Link>
              </li>
              <li className="flex items-center space-x-2">
                <AiOutlinePhone className="text-gray-400 hover:text-blue-800 transition duration-300" />
                <Link to="/contact" className="hover:text-blue-800 transition-colors duration-300">Contact</Link>
              </li>
              <li className="flex items-center space-x-2">
                <AiOutlineLock className="text-gray-400 hover:text-blue-800 transition duration-300" />
                <Link to="#!" className="hover:text-blue-800 transition-colors duration-300">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Connect With Us</h4>
            <div className="flex space-x-6">
              <a href="#" className="text-white border-[3px] rounded-md border-gray-400  hover:text-blue-800 transition duration-300">
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a href="#" className="text-white border-[3px] rounded-md border-gray-400  hover:text-blue-800 transition duration-300">
                <FaTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white border-[3px] rounded-md border-gray-400  hover:text-blue-800 transition duration-300">
                <FaInstagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white border-[3px] rounded-md border-gray-400  hover:text-blue-800 transition duration-300">
                <FaLinkedinIn className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Subscribe to Our Newsletter</h4>
            <p className="text-gray-400 mb-2">Stay updated with our latest quizzes and news!</p>
            <form>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 w-full rounded-md text-gray-800"
              />
              <button 
                type="submit" 
                className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-800 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-500">&copy; 2023 QuizMaster. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
