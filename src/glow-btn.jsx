import { motion } from "motion/react";
import React from "react";
import { cn } from "./lib/utils";

export default function GlowButton() {
  return (
    <motion.div className="  min-w-4xl  bg-neutral-950/60  shadow-inner shadow-neutral-200 rounded-3xl h-48  flex items-center justify-center">
      <motion.button
        whileHover={{
          rotateX: 25,
          rotateY: 10,
          boxShadow: "0px 20px 50px rgba(8,112,184,0.7)",
          y: -10,
        }}
        style={{
          translateZ: 100,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className={cn("group relative text-neutral-500 px-12 py-4 rounded-lg ",
          "bg-gradient-to-b from-neutral-800 to-neutral-900 border border-neutral-700/60 text-neutral-100",
          "shadow-[0_1px_2px_rgba(0,0,0,0.4),0_8px_24px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)]",
          "hover:border-neutral-600 hover:from-neutral-800 hover:to-neutral-850 active:scale-[0.98] transition-colors", "")}
      >
        <span className="group-hover:text-cyan-500 transition-colors duration-300">
          CLICK ME
        </span>

        <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>

        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent h-[4px] w-full  mx-auto blur-sm"></span>
      </motion.button>
    </motion.div>
  );
}
