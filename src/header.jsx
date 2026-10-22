import React, { useState } from "react";
import ModeToggle from "./mode-toggle";
import { HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "./lib/utils";
import {  motion } from "motion/react";

const Header = () => {
  const [iSopen, setIsOpen] = useState(false);

  return (
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
              "shadow-[0_1px_1.5px_rgba(0,0,0,0.4),0_8px_24px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)]/40",
              "hover:to-neutral-850 transition-colors hover:border-neutral-600 hover:from-neutral-800 active:scale-[0.98]",
            )}
          >
            <ModeToggle />
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className={cn(
              "h-10 w-10 overflow-hidden rounded-full shadow-sm",

              "hover:to-neutral-850 transition-colors hover:border-neutral-600 hover:from-neutral-800 active:scale-[0.98]",
            )}
          >
            {/* <img src="/deadpoolPic.jpg" alt="img" className="relative rounded-full " /> */}
            <img src="/myPic.jpg" alt="img" className="h-10 w-10 cursor-pointer rounded-full shadow-2xl" />
          </button>
          {/* <div className="w-10 h-10 rounded-full bg-gray-300"></div> */}
        </div>
      </div>

      {/* open and bgc blurr */}
      {iSopen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "backInOut" }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-90 flex cursor-pointer items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
        >
          <div onClick={(e) => e.stopPropagation()} className="w-96">
            <img src="/xProfile.png" alt="Profile" className="max-h-[80vh] max-w-[90vw] rounded-3xl object-contain" />
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
