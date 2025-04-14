import badge from "../src/assets/badge.png";
import cv from "../src/assets/cv.png";
import babyMode from "../src/assets/babyMode.png";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import LeftHandText from "./LeftHandText";

function Home() {
  const navigate = useNavigate();

  return (
    <>

      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <NavBar />
        <div className="hero bg-blue-200 py-10 px-4">
          <div className="hero-content text-center">
            <div className="w-full max-w-md mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">TheSchlote</h1>
              <p className="py-4 text-sm sm:text-base">
                This site is to show off my skills and the journey I'm on to build games.
              </p>
            </div>
          </div>
        </div>
        <LeftHandText />
      </div>
      <br />
      <Footer />
    </>
  );
}

export default Home;
