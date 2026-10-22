import React, { useState } from "react";
import { cn } from "./lib/utils";
import { AnimatePresence, easeInOut, motion } from "motion/react";
import { CircleDashedCheck, ClockFadingIcon, LambdaIcon, MessageSquareTextIcon, Plus, SquareDashedMousePointer, XIcon } from "lucide-react";
import { div } from "motion/react-client";

const Card = () => {

    const [open, setOpen] = useState(true);

  return (
    <div className="items-center justify-center bg-neutral-950/60 flex rounded-3xl shadow-inner shadow-neutral-200 dark:shadow-neutral-900">
    <>
        <AnimatePresence>
    {open && (
    <motion.div
    initial={{opacity: 0, scale: 0.98, }}
    animate={{opacity: 1, scale: 1}}
    exit={{opacity: 0, scale:0.98,  filter: 'blur(10px)'}}
    transition={{duration: 0.5, ease: 'easeInOut'}}
      className={cn(
        "cards w-72 min-h-[26rem] h-[29rem] rounded-xl p-6 flex flex-col bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 my-4 border border-transparent dark:border-neutral-800",
        "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)]",
      )}
    >
      <h2 className="font-bold text-[13px] text-neutral-900 dark:text-neutral-100">Prime UI Components</h2>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400 text-[11px] text-xs font-medium">
        A collection of beautifull UI Components, lets get on with it.
      </p>
      <div className="flex items-center justify-center">
        <button onClick={()=> setOpen(false)}
          className={cn(
            "text-[10px] mt-4 px-2 py-1 rounded-md flex items-center gap-1 bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200/60 dark:border-neutral-700/60",
            "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:shadow-none",
          )}
        >
          <LambdaIcon className="w-4 h-4 text-neutral-800 dark:text-neutral-200" />
          PRIME UI
          <XIcon className="h-3 w-3 text-neutral-400 dark:text-neutral-500" />
        </button>
      </div>

          
      <div className="flex-1 mt-4 rounded-lg bg-neutral-100 dark:bg-neutral-950/60 border border-dashed border-neutral-200 dark:border-neutral-800 relative ">

        <motion.div 
            initial={{opacity: 0, scale:0.98, filter: "blur(10px)"}}
            whileHover={{opacity: 1, scale: 1.05, filter: "blur(0px)"}}
            transition={{duration: 0.3, ease: 'easeInOut'}}
        className="absolute inset-0 w-full h-full rounded-lg border border-neutral-100 dark:border-neutral-800/80 bg-neutral-50/20 dark:bg-neutral-900/40 divide-y divide-neutral-200 dark:divide-neutral-800/70">

          <div className="doubt flex items-center gap-2.5 p-4">
            {/* 1. Icon Box Only */}
            <div
              className={cn(
                "h-7 w-7 shrink-0 rounded-md bg-white dark:bg-neutral-800 border border-transparent dark:border-neutral-700/50 flex items-center justify-center",
                "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:shadow-none",
              )}
            >
              <MessageSquareTextIcon className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
            </div>

            {/* 2. Text Content (Sibling beside the icon) */}
            <div className="flex flex-col min-w-0">
              <p className="text-[10px] font-bold text-neutral-700 dark:text-neutral-200 leading-tight truncate">
                Prime UI Components
              </p>
              <p className="text-[9px] mt-0.5 text-neutral-400 dark:text-neutral-500 leading-tight truncate">
                A collection of Components
              </p>
            </div>
          </div>

          {/* ------------------------------------------------------------------------------------------- */}
          <div className="doubt flex items-center gap-2.5 p-4">
            {/* 1. Icon Box Only */}
            <div
              className={cn(
                "h-7 w-7 shrink-0 rounded-md bg-white dark:bg-neutral-800 border border-transparent dark:border-neutral-700/50 flex items-center justify-center",
                "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:shadow-none",
              )}
            >
              <ClockFadingIcon className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
            </div>

            {/* 2. Text Content (Sibling beside the icon) */}
            <div className="flex flex-col min-w-0">
              <p className="text-[10px] font-bold text-neutral-700 dark:text-neutral-200 leading-tight truncate">
               24 Hours turnaround
              </p>
              <p className="text-[9px] mt-0.5 text-neutral-400 dark:text-neutral-500 leading-tight truncate">
                super fast delivery at warp speed
              </p>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------------- */}
          <div className="doubt flex items-center gap-2.5 p-4">
            {/* 1. Icon Box Only */}
            <div
              className={cn(
                "h-7 w-7 shrink-0 rounded-md bg-white dark:bg-neutral-800 border border-transparent dark:border-neutral-700/50 flex items-center justify-center",
                "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:shadow-none",
              )}
            >
              <CircleDashedCheck className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
            </div>

            {/* 2. Text Content (Sibling beside the icon) */}
            <div className="flex flex-col min-w-0">
              <p className="text-[10px] font-bold text-neutral-700 dark:text-neutral-200 leading-tight truncate">
                360 days all around
              </p>
              <p className="text-[9px] mt-0.5 text-neutral-400 dark:text-neutral-500 leading-tight truncate">
                we are here to help you 24/7
              </p>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------------- */}
          <div className="doubt flex items-center gap-2.5 p-4">
            {/* 1. Icon Box Only */}
            <div
              className={cn(
                "h-7 w-7 shrink-0 rounded-md bg-white dark:bg-neutral-800 border border-transparent dark:border-neutral-700/50 flex items-center justify-center",
                "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:shadow-none",
              )}
            >
              <SquareDashedMousePointer className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
            </div>

            {/* 2. Text Content (Sibling beside the icon) */}
            <div className="flex flex-col min-w-0">
              <p className="text-[10px] font-bold text-neutral-700 dark:text-neutral-200 leading-tight truncate">
                Some other Components
              </p>
              <p className="text-[9px] mt-0.5 text-neutral-400 dark:text-neutral-500 leading-tight truncate">
                Here goes another subtitle
              </p>
            </div>
          </div>


          {/* ---------------------------------------------------------------------------------------- */}
          <div className="doubt flex items-center justify-center gap-2.5 p-2 pt-3 pr-4">
            {/* 1. Icon Box Only */}
            <div
              className={cn(
                "h-6 w-6 shrink-0 bg-white dark:bg-neutral-800 border border-transparent dark:border-neutral-700/50 flex items-center justify-center rounded-full",
                "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] dark:shadow-none",
              )}
            >
              <Plus className="size-3 text-neutral-600 dark:text-neutral-300 rounded-full " />
            </div>

            {/* 2. Text Content (Sibling beside the icon) */}
            <div className="flex flex-col min-w-0">
              <p className="text-[9px] text-neutral-400 dark:text-neutral-500 leading-tight truncate mt-1">
                Create projects
              </p>
             
            </div>
          </div>

        </motion.div>
      </div>

    </motion.div>
      )}
      </AnimatePresence>
      </>
      </div>
  );
};

export default Card;