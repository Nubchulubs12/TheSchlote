import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500">
      <div className="flex items-center justify-between px-4 py-3 md:justify-center">
        <h1 className="text-white font-bold text-xl md:hidden">TheSchlote</h1>
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
               viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className={`flex flex-col md:flex-row items-center md:justify-center gap-2 md:gap-4 px-4 pb-4 md:pb-0 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
        <Link to="/">
          <button className="w-32 h-12 bg-blue-500 hover:bg-blue-700 text-white rounded">Home</button>
        </Link>
        <a href="https://theschlote.github.io/" target="_blank" rel="noopener noreferrer">
          <button className="w-32 h-12 bg-blue-500 hover:bg-blue-700 text-white rounded">Blog</button>
        </a>
        <Link to="/GameDev">
          <button className="w-32 h-12 bg-blue-500 hover:bg-blue-700 text-white rounded">Game Dev</button>
        </Link>
        <Link to="/Projects">
          <button className="w-32 h-12 bg-blue-500 hover:bg-blue-700 text-white rounded">Projects</button>
        </Link>
        <Link to="/AboutUs">
          <button className="w-32 h-12 bg-blue-500 hover:bg-blue-700 text-white rounded">About Us</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
