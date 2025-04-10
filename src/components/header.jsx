import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <nav className="flex justify-end gap-6 p-4 max-w-6xl mx-auto">
        <a
          href="/login"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          Login
        </a>
        <a
          href="/register"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          Register
        </a>
        <a
          href="/contact"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          Contact
        </a>
        <a
          href="/about"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          About
        </a>
        <a
          href="/calculator"
          className="hover:text-blue-400 transition-colors duration-200"
        >
          calculator
        </a>
      </nav>
    </header>
  );
};

export default Header;
