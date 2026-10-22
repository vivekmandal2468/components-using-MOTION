import { useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  FileBarChart2,
  GalleryVerticalEnd,
  HomeIcon,
  LucideFileQuestion,
  LucideHighlighter,
  PictureInPicture2Icon,
  PlayingCardsFan,
  Power,
  SparkleIcon,
  ToggleRightIcon,
  Workflow,
} from "lucide-react";
import { easeInOut, motion } from "motion/react";
import { NavLink } from "react-router-dom";
// import { del } from "motion/react-client";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    {
      name: "Home",
      href: "/home",
      icon: <HomeIcon size={18}/>,
    },
    {
      name: "Button",
      href: "/button",
      icon: <Power size={18}/>,
    },
    {
      name: "Button-glide",
      href: "/button_glide",
      icon: <ToggleRightIcon size={18}/>,
    },
    {
      name: "Card",
      href: "/card",
      icon: <PlayingCardsFan size={18}/>,
    },
    {
      name: "Animated-Text",
      href: "/animatedText",
      icon: <LucideHighlighter size={18}/>,
    },
    {
      name: "Beam-Animation",
      href: "/beam-animation",
      icon: <SparkleIcon size={18} />,
    },
    {
      name: "SequenceAnimate",
      href: "sequenceAnimate",
      icon: <Workflow size={18}/>,
    },
    {
      name: "Layout-Card",
      href: "/layoutcard",
      icon: <PictureInPicture2Icon size={18}/>,
    },
    // {
    //   name: "ScrollAnimation",
    //   href: "/scrollAnimation",
    //   icon: <GalleryVerticalEnd size={18}/>,
    // },
    {
      name: "Form-Page",
      href: "/form",
      icon: <FileBarChart2 size={18}/>,
    },
    {
      name: "FAQ",
      href: "/faq",
      icon: <LucideFileQuestion size={18}/>,
    },
  ];

  const sidebarvarient = {
    open: {
      width: "16rem",
    },
    close: {
      width: "4.5rem",
    },
  };

  const parentvarient = {
    open: {
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.03,
        easeInOut,
      }
    },
    close : {
      transition: {
        staggerChildren: 0.06,
        delayChildren: -1,
        easeInOut
      }
    }
  }

  const childVarients = {
    open: {
      opacity: 1,
      y: 0,
    },
    close: {
      opacity: 0,
      y: -10
    }
  };

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "close"}
      exit="closed"
      transition={{ duration: 0.3 }}
      className="absolute inset-y-0 left-0 z-30 border-r border-dashed border-neutral-300 dark:border-neutral-800 md:relative md:inset-auto md:z-auto h-dvh" 
    >
      <motion.nav
        variants={sidebarvarient}
        className="bg-white shadow-md dark:bg-neutral-900 h-full"
      >
        <div className="p-4 flex justify-between items-center">
          <h2
            className={`text-2xl font-semibold font-garamond text-neutral-900 dark:text-neutral-100 ${!isOpen && "sr-only"}`}
          >
            Components
          </h2>

          {/* toggle-btn */}
          <button
            onClick={toggleSideBar}
            className="bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-200 p-2 rounded-full shadow-inner shadow-gray-300/40 dark:shadow-neutral-950/50 hover:bg-gray-100 dark:hover:bg-neutral-700 focus:outline-none"
          >
            {isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </button>
        </div>
        <div className="relative">
          {/* sideBar-content */}
          <nav className="pl-4">
            <motion.ul variants={parentvarient} className="space-y-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
              {links.map((link) => (
                <motion.li variants={childVarients} key={link.name}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `flex items-center p-2 pr-5 rounded-l-xl transition-colors ${
                        isActive
                          ? "bg-gray-100 text-gray-900 dark:bg-neutral-800 dark:text-white"
                          : "text-gray-700 hover:text-black dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-800/50"
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
      </motion.nav>
    </motion.div>
  );
};

export default Sidebar;