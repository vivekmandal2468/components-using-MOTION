import { useState } from "react";
import {
  BookAudioIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon,
  Power,
  ToggleRightIcon,
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
      icon: <HomeIcon />,
    },
    {
      name: "Button",
      href: "/button",
      icon: <Power />,
    },
    {
      name: "Button-glide",
      href: "/button_glide",
      icon: <ToggleRightIcon />,
    },
    {
      name: "Card",
      href: "/card",
      icon: <BookAudioIcon />,
    },
    {
      name: "Animated-Text",
      href: "/animatedText",
      icon: <BookAudioIcon />,
    },
    {
      name: "Beam-Animation",
      href: "/beam-animation",
      icon: <BookAudioIcon />,
    },
    {
      name: "SequenceAnimate",
      href: "sequenceAnimate",
      icon: <BookAudioIcon />,
    },
    {
      name: "Layout-Card",
      href: "/layoutcard",
      icon: <BookAudioIcon />,
    },
    {
      name: "f",
      href: "/f",
      icon: <BookAudioIcon />,
    },
    {
      name: "g",
      href: "/g",
      icon: <BookAudioIcon />,
    },
    {
      name: "h",
      href: "/h",
      icon: <BookAudioIcon />,
    },
    {
      name: "Form-Page",
      href: "/form",
      icon: <BookAudioIcon />,
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
      className="border-r border-neutral-100 h-full"
    >
      <motion.nav
        variants={sidebarvarient}
        className="bg-white shadow-md h-full"
      >
        <div className="p-4 flex justify-between items-center">
          <h2
            className={`text-xl font-semibold font-garamond ${!isOpen && "sr-only"}`}
          >
            Components
          </h2>

          {/* toggle-btn */}
          <button
            onClick={toggleSideBar}
            className="bg-white p-2 rounded-full shadow-inner shadow-gray-400/40 hover:bg-gray-100 focus:outline-none"
          >
            {isOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </button>
        </div>
        <div className="relative">
          {/* sideBar-content */}
          <nav className="pl-4">
            <motion.ul variants={parentvarient} className="space-y-2 text-sm">
              {links.map((link) => (
                <motion.li variants={childVarients} key={link.name} >
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `flex items-center p-2 pr-5 rounded ${
                        isActive
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-700 hover:text-gray-200"
                      }`
                    }
                    title={!isOpen ? link.name : ""}
                  >
                    {link.icon}
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