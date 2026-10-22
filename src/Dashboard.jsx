import { useRef } from "react";
import Sidebar from "./sidebar";

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
import Header from "./header";



const Dashboard = () => {
  const scrollContainerRef = useRef(null);

  return (
    <div className="relative flex h-screen bg-gray-100 text-gray-900 dark:bg-neutral-900 dark:text-white">
      <Sidebar />
      <div ref={scrollContainerRef} className="relative z-10 min-w-0 flex-1 overflow-auto">
      <Header/>

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
