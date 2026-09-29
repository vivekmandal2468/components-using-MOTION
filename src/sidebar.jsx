import { useState } from "react";
import {
  BookAudioIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Power,
  ToggleRightIcon,
} from "lucide-react";
import { easeIn, easeInOut, easeOut, motion, spring } from "motion/react";
// import { del } from "motion/react-client";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
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
      name: "Card-A",
      href: "/card-A",
      icon: <BookAudioIcon />,
    },
    {
      name: "b",
      href: "/b",
      icon: <BookAudioIcon />,
    },
    {
      name: "c",
      href: "/c",
      icon: <BookAudioIcon />,
    },
    {
      name: "d",
      href: "/d",
      icon: <BookAudioIcon />,
    },
    {
      name: "e",
      href: "/e",
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
      name: "i",
      href: "/i",
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
                  <a
                    href={link.href}
                    className="flex items-center p-2 pr-5 text-gray-700 rounded hover:text-gray-200"
                    title={!isOpen ? link.name : ""}
                  >
                    {link.icon }
                    {isOpen && link.name}
                  </a>
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
