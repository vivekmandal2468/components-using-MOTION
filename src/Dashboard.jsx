import Sidebar from "./sidebar";
import ModeToggle from "./mode-toggle";
import { HomeIcon } from "lucide-react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./home";
import ButtonGlide from "./buttonGlide";
import GlowButton from "./glow-btn";
import { FormPage } from "./know-me";
import { SvgAnimation } from "./beamAnimation";
import Card from "./card";
import AnimatedText from "./animated-text";
import SequenceAnimate from "./sequenceAnimate";
import LayoutCard from "./layoutCard";






const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100 text-gray-900 dark:bg-neutral-900 dark:text-white ">
      <Sidebar />
      {/* <h1>Hellow design engineer</h1> */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm dark:bg-neutral-800 ">
          <div className="px-6 py-4 flex items-center justify-between ">
            <h2 className=" font-semibold  font-manrope tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-700 dark:from-neutral-100 dark:to-neutral-400 text-2xl">
              PRIME.dev
            </h2>
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors"
                aria-label="Go to home"
              >
                <HomeIcon className="size-6" />
              </Link>

              {/* theme changing btn */}
              <div className="bg-black text-white dark:bg-white dark:text-black text-center justify-center px-3 py-2 rounded-xl right-0 shadow-inner shadow-neutral-500">
                <ModeToggle />
              </div>

              <button className=" rounded-full overflow-hidden  w-10 h-10 shadow-sm">
                {/* <img src="/deadpoolPic.jpg" alt="img" className="relative rounded-full " /> */}
                <img
                  src="/myPic.jpg"
                  alt="img"
                  className=" rounded-full cursor-pointer w-10 h-10 shadow-2xl"
                />
              </button>
              {/* <div className="w-10 h-10 rounded-full bg-gray-300"></div> */}
            </div>
          </div>
        </header>

        {/* Dynamic content renders here based on Sidebar NavLinks */}
        <div className="idhar p-8 items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/button" element={<GlowButton/>} />
            <Route path="/button_glide" element={<ButtonGlide />} />
            <Route path="/card" element={<Card/>} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/beam-animation" element={<SvgAnimation />} />
            <Route path="/animatedText" element={<AnimatedText />} />
            <Route path="/sequenceAnimate" element={<SequenceAnimate/>} />
            <Route path="/layoutcard" element={<LayoutCard/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
