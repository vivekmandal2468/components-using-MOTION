import { useRef } from "react";
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
// import ScrollAnimation from "./scrollAnimation";
import { Faq } from "./faq";
import { cn } from "./lib/utils";

const Dashboard = () => {
  const scrollContainerRef = useRef(null);

  return (
    <div className="relative flex h-screen bg-gray-100 text-gray-900 dark:bg-neutral-900 dark:text-white">
      <Sidebar />
      {/* <h1>Hellow design engineer</h1> */}
      <div ref={scrollContainerRef} className="relative z-10 min-w-0 flex-1 overflow-auto">
        <header className="bg-white shadow-sm dark:bg-neutral-800">
          <div className="flex items-center justify-between px-6 py-4">
            <h2 className="font-manrope text-xl font-semibold text-neutral-700 dark:text-white">PRIME.dev</h2>
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                aria-label="Go to home"
              >
                <div className="">
                  <HomeIcon className="size-6" />
                </div>
              </Link>

              {/* theme changing btn */}
              <div
                className={cn(
                  "right-0 justify-center rounded-xl bg-black px-3 py-2 text-center text-white shadow-inner shadow-neutral-700 dark:bg-white dark:text-white",
                  "border border-neutral-700/60 bg-gradient-to-b from-neutral-800 to-neutral-900 text-neutral-100",
                  "shadow-[0_1px_1.5px_rgba(0,0,0,0.4),0_8px_24px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)]/70",
                  "hover:to-neutral-850 transition-colors hover:border-neutral-600 hover:from-neutral-800 active:scale-[0.98]",
                )}
              >
                <ModeToggle />
              </div>

              <button className={cn("h-10 w-10 overflow-hidden rounded-full shadow-sm  ", 
                "border border-neutral-300/60 bg-gradient-to-b from-neutral-500 to-neutral-600 text-neutral-100",
                  "shadow-[0_1px_1.5px_rgba(0,0,0,0.4),0_8px_24px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)]/50",
                  "hover:to-neutral-850 transition-colors hover:border-neutral-600 hover:from-neutral-800 active:scale-[0.98]",
              )}>
                {/* <img src="/deadpoolPic.jpg" alt="img" className="relative rounded-full " /> */}
                <img
                  src="/myPic.jpg"
                  alt="img"
                  className="h-10 w-10 cursor-pointer rounded-full  shadow-2xl"
                />
              </button>
              {/* <div className="w-10 h-10 rounded-full bg-gray-300"></div> */}
            </div>
          </div>
        </header>

        {/* Dynamic content renders here based on Sidebar NavLinks */}
        <div className="idhar items-center justify-center p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/button" element={<GlowButton />} />
            <Route path="/button_glide" element={<ButtonGlide />} />
            <Route path="/card" element={<Card />} />
            <Route path="/form" element={<FormPage />} />
            <Route path="/beam-animation" element={<SvgAnimation />} />
            <Route path="/animatedText" element={<AnimatedText />} />
            <Route path="/sequenceAnimate" element={<SequenceAnimate />} />
            <Route path="/layoutcard" element={<LayoutCard />} />
            <Route path="/faq" element={<Faq />} />
            {/* <Route
              path="/scrollAnimation"
              element={<ScrollAnimation scrollContainerRef={scrollContainerRef} />}
            /> */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
