import { motion } from "motion/react";
import React from "react";

export const SvgAnimation = () => {
  return (
    <div className="bada pt-18">
      <motion.div
        whileHover="animate"
        className="relative flex items-center justify-between w-full max-w-sm mx-auto group px-15 py-10 rounded-xl gap-78 border border-neutral-800 shadow-2xs bg-black min-w-lg shadow-inner shadow-neutral-200/70"
      >
        {/* Left: Labels */}
        <div className="flex flex-col justify-between h-28 text-xs font-medium text-neutral-400 select-none z-10 shrink-0">
          <span className="h-5 flex items-center">Summarizer Pro</span>
          <span className="h-5 flex items-center">Div Centerer</span>
          <span className="h-5 flex items-center">Junior Intern</span>
        </div>
        {/* Center: Circuit Tracks */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center pl-15">
          <div className="relative w-[280px] h-28">
            <TopSVG className="absolute top-2.5 left-4 w-full" />
            <MiddleSVG className="absolute top-1/2 -translate-y-1/2  w-full" />
            <BottomSVG className="absolute bottom-2  w-full" />
          </div>
        </div>
        <div className="relative size-12 rounded-xl bg-neutral-800 p-px overflow-hidden shrink-0 flex items-center justify-center z-10 shadow-lg right-13">
          <div className="absolute inset-0 h-full w-full [background-image:conic-gradient(at_center,transparent,rgba(59,130,246,0.9)_20%,transparent_30%)] animate-spin scale-[1.6] [animation-duration:3s]" />
          <div className="absolute inset-0 h-full w-full [background-image:conic-gradient(at_center,transparent,rgba(239,68,68,0.9)_20%,transparent_30%)] animate-spin scale-[1.6] [animation-delay:1.5s] [animation-duration:3s]" />

          <div className="relative z-20 size-full bg-neutral-950 rounded-[11px] flex items-center justify-center">
            <SVG />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const TopSVG = ({ className = "" }) => {
  return (
    <svg
      width="312"
      height="33"
      viewBox="0 0 312 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line
        x1="0.5"
        y1="1"
        x2="311.5"
        y2="1"
        stroke="var(--color-neutral-300)"
        strokeLinecap="round"
      />
      <line
        x1="311.5"
        y1="1"
        x2="311.5"
        y2="32"
        stroke="var(--color-neutral-300)"
        strokeLinecap="round"
      />

      <line
        x1="0.5"
        y1="1"
        x2="311.5"
        y2="1"
        stroke="url(#line-one-gradient)"
        strokeLinecap="round"
      />
      <defs>
        <motion.linearGradient
          gradientUnits="userSpaceOnUse"
          id="line-one-gradient"
          initial={{
            x1: "0%",
            x2: "10%",
          }}
          animate={{
            x1: "90%",
            x2: "100%",
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        >
          <stop stopColor="var(--color-neutral-300)" />
          <stop offset="0.33" stopColor="#FF3366" />
          <stop offset="0.66" stopColor="#FF3366" />
          <stop offset="1" stopColor="var(--color-line)" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
};

export const MiddleSVG = ({ className = "" }) => {
  return (
    <svg
      width="323"
      height="2"
      viewBox="0 0 323 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line
        x1="0.5"
        y1="1"
        x2="322.5"
        y2="1"
        stroke="var(--color-neutral-300)"
        strokeLinecap="round"
      />
      <line
        x1="0.5"
        y1="1"
        x2="322.5"
        y2="1"
        stroke="url(#line-two-gradient)"
        strokeLinecap="round"
      />
      <motion.linearGradient
        gradientUnits="userSpaceOnUse"
        id="line-two-gradient"
        initial={{
          x1: "0%",
          x2: "10%",
        }}
        animate={{
          x1: "90%",
          x2: "100%",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <stop stopColor="var(--color-neutral-300)" />
        <stop offset="0.33" stopColor="#0070F3" />
        <stop offset="0.66" stopColor="#0070F3" />
        <stop offset="1" stopColor="var(--color-neutral-300)" />
      </motion.linearGradient>
    </svg>
  );
};

export const BottomSVG = ({ className = "" }) => {
  return (
    <svg
      width="326"
      height="32"
      viewBox="0 0 326 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line y1="31" x2="325" y2="31" stroke="var(--color-neutral-300)" />

      <line
        x1="325.5"
        y1="31"
        x2="325.5"
        y2="1"
        stroke="var(--color-neutral-300)"
        strokeLinecap="round"
      />
      <line y1="31" x2="325" y2="31" stroke="url(#line-three-gradient)" />

      <motion.linearGradient
        gradientUnits="userSpaceOnUse"
        id="line-three-gradient"
        initial={{
          x1: "0%",
          x2: "10%",
        }}
        animate={{
          x1: "90%",
          x2: "100%",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <stop stopColor="var(--color-neutral-300)" />
        <stop offset="0.33" stopColor="var(--color-yellow-500)" />
        <stop offset="0.66" stopColor="var(--color-yellow-500)" />
        <stop offset="1" stopColor="var(--color-line)" />
      </motion.linearGradient>
    </svg>
  );
};

export const SVG = () => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-neutral-500 size-4"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />

      <motion.path
        variants={{
          animate: {
            x: [0, -5, 5, 0],
          },
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z"
      />

      <motion.path
        variants={{
          animate: {
            rotate: [0, 10, -10, 0],
          },
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
        d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z"
      />
    </motion.svg>
  );
};
