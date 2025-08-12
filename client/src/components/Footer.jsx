import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 px-6" id="footer">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold mb-4 md:mb-0">
          Job<span className="text-blue-400">Hunter</span>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <p className="text-gray-300">Contact: support@jobhunter.com</p>
          <p className="text-gray-300">Phone: +91 98765 43210</p>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-400">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-blue-400">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-blue-400">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-sm text-gray-400 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} JobHunter. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
