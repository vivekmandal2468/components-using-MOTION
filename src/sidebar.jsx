import { useState, useEffect } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  FileBarChart2,
  HomeIcon,
  LucideFileQuestion,
  LucideHighlighter,
  PictureInPicture2Icon,
  PlayingCardsFan,
  Power,
  SparkleIcon,
  StarPlus,
  ToggleRightIcon,
  Workflow,
} from "lucide-react";
import { easeInOut, motion } from "motion/react";
import { NavLink } from "react-router-dom";
import { cn } from "./lib/utils";

// import { del } from "motion/react-client";

const Sidebar = ({ isOpen, setIsOpen }) => {
  // const [isOpen, setIsOpen] = useState(true);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      name: "Home",
      href: "/home",
      icon: <HomeIcon size={18} />,
    },
    {
      name: "Button",
      href: "/button",
      icon: <Power size={18} />,
    },
    {
      name: "Button-glide",
      href: "/button_glide",
      icon: <ToggleRightIcon size={18} />,
    },
    {
      name: "Card",
      href: "/card",
      icon: <PlayingCardsFan size={18} />,
    },
    {
      name: "Animated-Text",
      href: "/animatedText",
      icon: <LucideHighlighter size={18} />,
    },
    {
      name: "Beam-Animation",
      href: "/beam-animation",
      icon: <SparkleIcon size={18} />,
    },
    {
      name: "SequenceAnimate",
      href: "sequenceAnimate",
      icon: <Workflow size={18} />,
    },
    {
      name: "Layout-Card",
      href: "/layoutcard",
      icon: <PictureInPicture2Icon size={18} />,
    },
    // {
    //   name: "ScrollAnimation",
    //   href: "/scrollAnimation",
    //   icon: <GalleryVerticalEnd size={18}/>,
    // },
    {
      name: "Form-Page",
      href: "/form",
      icon: <FileBarChart2 size={18} />,
    },
    {
      name: "FAQ",
      href: "/faq",
      icon: <LucideFileQuestion size={18} />,
    },
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sidebarvarient = {
    open: {
      width: "16rem",
    },
    close: {
      width: isMobile ? "0rem" : "4.5rem",
    },
  };

  const parentvarient = {
    open: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.03,
        easeInOut,
      },
    },
    close: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: -1,
        easeInOut,
      },
    },
  };

  const childVarients = {
    open: {
      opacity: 1,
      y: 0,
    },
    close: {
      opacity: 0,
      y: -10,
    },
  };

  return (
    <motion.div
      onClick={(event) => event.stopPropagation()}
      initial={false}
      animate={isOpen ? "open" : "close"}
      exit="closed"
      transition={{ duration: 0.3 }}
      className="absolute inset-y-0 left-0 z-30 h-dvh border-r border-dashed border-neutral-300 md:relative md:inset-auto md:z-auto dark:border-neutral-800"
    >
      <motion.nav
        variants={sidebarvarient}
        className={`flex h-full flex-col overflow-hidden bg-white shadow-md dark:bg-neutral-900`}
      >
        <div className="flex items-center justify-between p-4">
          <h2
            className={`font-garamond text-2xl font-semibold text-neutral-900 dark:text-neutral-100 ${!isOpen && "sr-only"}`}
          >
            Components
          </h2>

          {/* toggle-btn */}
          <button
            onClick={toggleSideBar}
            className="rounded-full bg-white p-2 text-neutral-700 shadow-inner shadow-gray-300/40 hover:bg-gray-100 focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-neutral-950/50 dark:hover:bg-neutral-700"
          >
            {isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </button>
        </div>
        <div className="relative">
          {/* sideBar-content */}
          <nav className="pl-4">
            <motion.ul
              variants={parentvarient}
              className="space-y-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            >
              {links.map((link) => (
                <motion.li variants={childVarients} key={link.name}>
                  <NavLink
                    to={link.href}
                    onClick={() => {
                      if (window.innerWidth < 768) {
                        setIsOpen(false);
                      }
                    }}
                    className={({ isActive }) =>
                      `flex items-center rounded-l-xl p-2 pr-5 transition-colors ${
                        isActive
                          ? "bg-gray-100 text-gray-900 dark:bg-neutral-800 dark:text-white"
                          : "text-gray-700 hover:text-black dark:text-neutral-400 dark:hover:bg-neutral-800/50 dark:hover:text-neutral-100"
                      }`
                    }
                    title={!isOpen ? link.name : ""}
                  >
                    <div className="pr-0.5">{link.icon}</div>
                    {isOpen && link.name}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          </nav>
        </div>

        <motion.a
          href="https://github.com/vivekmandal2468/components-using-MOTION"
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 10 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 15,
            delay: isOpen ? 0.3 : 0,
          }}
          className={cn(
            "mx-auto mt-auto mb-4 flex w-5/6 cursor-pointer justify-center rounded-xl",
            "bg-black px-3 py-2 text-center text-white shadow-inner shadow-neutral-700 dark:bg-white dark:text-white",
            "border border-neutral-700/60 bg-gradient-to-b from-neutral-800 to-neutral-900 text-neutral-100",
            "shadow-[0_1px_1.5px_rgba(0,0,0,0.4),0_8px_24px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)]/40",
            "hover:to-neutral-850 transition-colors hover:border-neutral-600 hover:from-neutral-800 active:scale-[0.98]",
          )}
        >
          <div className="flex gap-3">
            <StarPlus fill="white" className="size-5" />
            Github
          </div>
        </motion.a>
      </motion.nav>
    </motion.div>
  );
};

export default Sidebar;
