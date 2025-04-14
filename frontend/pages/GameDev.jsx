import badge from "../src/assets/badge.png";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function GameDev() {
  return (
    <>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <NavBar />

        {/* Hero Section */}
        <div className="hero bg-blue-200 py-10 px-4">
          <div className="hero-content text-center">
            <div className="max-w-md mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Game Development</h1>
              <p className="py-4 text-sm sm:text-base">
                This is where you can see what all we are working on.
              </p>
            </div>
          </div>
        </div>

        {/* Game Dev Navbar Section */}
        <div className="navbar bg-blue-500 shadow-sm text-white">
          {/* Mobile Dropdown */}
          <div className="navbar-start lg:hidden">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-gray-700 text-white rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                <li><a href="https://github.com/TheSchlote/CorruptedVirtues-TacticsRPG" target="_blank">Corrupted Virtues</a></li>
                <li><a href="https://moralsupportstudios.itch.io/babymode" target="_blank">BabyMode</a></li>
                <li><a>Coming Soon</a></li>
              </ul>
            </div>
          </div>


          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a
                  href="https://github.com/TheSchlote/CorruptedVirtues-TacticsRPG"
                  target="_blank"
                  className="bg-blue-500 hover:bg-blue-600 text-white rounded px-4 py-2"
                >
                  Corrupted Virtues
                </a>
              </li>

              <li className="relative group">
                <button className="bg-blue-500 hover:bg-blue-700 text-white rounded px-4 py-2">
                  Game Jam
                </button>
                <ul className="dropdown-content hidden group-hover:flex flex-col absolute bg-blue-200 text-black rounded shadow-lg mt-2 z-10 w-48">
                  <li>
                    <a href="https://moralsupportstudios.itch.io/babymode" target="_blank" className="hover:bg-blue-300 px-4 py-2 rounded">
                      BabyMode
                    </a>
                  </li>
                  <li>
                    <a className="hover:bg-blue-300 px-4 py-2 rounded">Coming Soon</a>
                  </li>
                </ul>
              </li>

              <li>
                <a className="bg-blue-500 hover:bg-blue-700 text-white rounded px-4 py-2">Coming Soon</a>
              </li>
            </ul>
          </div>


          <div className="navbar-end" />
        </div>

        <br />
        <Footer />
      </div>
    </>
  );
}

export default GameDev;
