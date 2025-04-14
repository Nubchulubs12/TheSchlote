import badge from "../src/assets/badge.png";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <NavBar />
        <div className="hero bg-blue-200 py-10 px-4">
          <div className="hero-content text-center">
            <div className="max-w-md mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Projects</h1>
              <p className="py-4 text-sm sm:text-base">
                Here is where all of our projects are and you can see details about them.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-10 px-4">
          <a className="btn bg-gray-400 text-white text-lg hover:bg-gray-600 transition">
            Coming Soon
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Projects;
