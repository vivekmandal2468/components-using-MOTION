import { lazy, Suspense, useRef, useState, useEffect } from "react";
import Sidebar from "./sidebar";
import { Routes, Route } from "react-router";
const Home = lazy(() => import("./home"));
const ButtonGlide = lazy(() => import("./buttonGlide"));
const GlowButton = lazy(() => import("./glow-btn"));
const FormPage = lazy(() =>
  import("./know-me").then((module) => ({
    default: module.FormPage,
  })),
);

const SvgAnimation = lazy(() =>
  import("./beamAnimation").then((module) => ({
    default: module.SvgAnimation,
  })),
);
const Card = lazy(() => import("./card"));
const AnimatedText = lazy(() => import("./animated-text"));
const SequenceAnimate = lazy(() => import("./sequenceAnimate"));
const LayoutCard = lazy(() => import("./layoutCard"));
const Faq = lazy(() => import("./faq").then((module) => ({ default: module.Faq })));
const Page404 = lazy(() => import("./page404"));

// import { cn } from "./lib/utils";
import { Wave } from "./loading";
import Header from "./header";



const Dashboard = () => {
  const scrollContainerRef = useRef(null);

  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 800);

  //   return () => clearTimeout(timer);
  // }, []);

  //  Desktop width >= 768px → sidebar starts open
  // Mobile width < 768px  → sidebar starts closed
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);

  //   if (isLoading) {
  //   return (
  //     <div className="flex h-screen items-center justify-center bg-gray-100 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-200">
  //       <Wave className="h-14 w-28 [--duration:700ms]" />
  //     </div>
  //   );
  // }

  const loadingFallback = (
    <div className="flex min-h-[50vh] items-center justify-center">
      <Wave className="h-14 w-28 text-neutral-500 [--duration:700ms]" />
    </div>
  );

  return (
    <div className="relative flex h-screen bg-gray-100 text-gray-900 dark:bg-neutral-900 dark:text-white">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {isSidebarOpen && (
        <div
          onClick={() => {
            if (window.innerWidth < 768) {
              setIsSidebarOpen(false);
            }
          }}
          className="fixed inset-0 z-20 bg-black/30 md:hidden"
        />
      )}

      <div
        ref={scrollContainerRef}
        className={`relative z-10 min-w-0 flex-1 overflow-auto transition-[margin] duration-300`}
      >
        {/* Header and Sidebar are separate components. The sidebar state belongs to Dashboard, so the header needs to receive the state and the setter in order to control the sidebar. */}
        <Header isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        {/* Dynamic content renders here based on Sidebar NavLinks */}
        <div className="idhar items-center justify-center p-8">
          <Suspense fallback={loadingFallback}>
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
              <Route path="*" element={<Page404 />} /> {/* for any wrong url * this page will show */}
              {/* <Route
              path="/scrollAnimation"
              element={<ScrollAnimation scrollContainerRef={scrollContainerRef} />}
            /> */}
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
