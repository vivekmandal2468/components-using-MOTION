import React from "react";
import {cn} from "./lib/utils"
import { easeInOut, motion } from "motion/react";

export const FormPage = () => {
  return (
    <div 
      className={cn(
        "min-h-[calc(100vh-50vh)]  w-full px-8 py-1 flex flex-col items-center justify-center transition-colors duration-200",
        "bg-gray-100 dark:bg-neutral-950",
        "selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black"
      )}
    >
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-4xl text-center font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-700 dark:from-neutral-100 dark:to-neutral-400 ">
          Wanna{" "}
          <span
            className={cn(
              "relative inline-block z-10 text-white px-1",
              "after:content-[''] after:-z-10 after:absolute after:inset-0 after:w-full after:h-full after:bg-red-500 after:-skew-x-6"
            )}
          >
            know
          </span>{" "}
          me?
        </h1>

        <div className="my-12 flex flex-col gap-8 max-w-sm mx-auto">
          {/* FIRST NAME */}
          <div className="flex flex-col gap-2">
            <label 
              htmlFor="firstName" 
              className="text-sm font-medium text-neutral-800 dark:text-neutral-200 after:content-['*'] after:text-red-500 after:ml-0.5"
            >
              First Name
            </label>
            <input 
              type="text"
              id="firstName"
              name="firstName" 
              placeholder="Enter your name"
              className={cn(
                "px-4 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
                // Light Mode
                "bg-white text-neutral-900 placeholder:text-neutral-300 border border-transparent shadow-shadoww focus:bg-gray-100 focus:ring-gray-300 focus:border-gray-300",
                // Dark Mode
                "dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-600 dark:border-neutral-800 dark:focus:bg-neutral-800 dark:focus:border-neutral-700 dark:focus:ring-neutral-700 dark:focus:ring-offset-neutral-950"
              )} 
            />
          </div>

          {/* EMAIL */}
          <div className="flex flex-col gap-2">
            <label 
              htmlFor="email" 
              className="text-sm font-medium text-neutral-800 dark:text-neutral-200 after:content-['*'] after:text-red-500 after:ml-0.5"
            >
              Email
            </label>
            <input 
              type="email"
              id="email"
              name="email" 
              placeholder="Enter your email"
              className={cn(
                "px-4 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
                // Light Mode
                "bg-white text-neutral-900 placeholder:text-neutral-300 border border-transparent shadow-shadoww focus:bg-gray-100 focus:ring-gray-300 focus:border-gray-300",
                // Dark Mode
                "dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-600 dark:border-neutral-800 dark:focus:bg-neutral-800 dark:focus:border-neutral-700 dark:focus:ring-neutral-700 dark:focus:ring-offset-neutral-950",
                // Invalid state
                "invalid:border-red-500 invalid:shadow-none dark:invalid:border-red-500"
              )} 
            />
          </div>

          {/* COMPANY */}
          <div className="flex flex-col gap-2">
            <label 
              htmlFor="company" 
              className="text-sm font-medium text-neutral-800 dark:text-neutral-200 after:content-['*'] after:text-red-500 after:ml-0.5"
            >
              Company
            </label>
            <input 
              type="text"
              id="company"
              name="company" 
              placeholder="Enter your company name"
              className={cn(
                "px-4 py-2 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
                // Light Mode
                "bg-white text-neutral-900 placeholder:text-neutral-300 border border-transparent shadow-shadoww focus:bg-gray-100 focus:ring-gray-300 focus:border-gray-300",
                // Dark Mode
                "dark:bg-neutral-900 dark:text-neutral-100 dark:placeholder:text-neutral-600 dark:border-neutral-800 dark:focus:bg-neutral-800 dark:focus:border-neutral-700 dark:focus:ring-neutral-700 dark:focus:ring-offset-neutral-950"
              )} 
            />
          </div>

          {/* SUBMIT BUTTON */}
          <motion.button 
            transition={{
              duration: 0.5,
              ease: easeInOut,
            }}
            className={cn(
              "px-4 py-2 rounded-md cursor-pointer transition-all   font-medium",
              "hover:-translate-y-0.5 active:scale-98 ease-in-out",
              // Light Mode
              "bg-black text-white hover:bg-neutral-700",
              // Dark Mode (Inverted so it doesn't vanish into the background)
              "dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200",
              // Left your weird shine pseudo-element intact, just adapted the shine opacity for dark mode
              "relative overflow-hidden after:content-[''] after:w-1/2 after:h-[400px] after:absolute after:bg-white/20 dark:after:bg-black/10 after:-left-20 after:-top-20 after:rotate-10 after:-translate-x-20 hover:after:translate-x-[200%] after:backdrop:blur-[0.5px] after:transition-all after:duration-300"
            )}
          >
            Send your info
          </motion.button>
        </div>
      </div>
    </div>
  );
};