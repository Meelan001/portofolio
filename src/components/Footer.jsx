import React from "react"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} Milan Khadka. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="https://github.com/Meelan001" target="_blank" className="hover:text-indigo-400">
              <FaGithub size={24} />
            </Link>
            <Link to="#" className="hover:text-indigo-400">
              <FaLinkedin size={24} />
            </Link>
            <Link to="#" className="hover:text-indigo-400">
              <FaTwitter size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
