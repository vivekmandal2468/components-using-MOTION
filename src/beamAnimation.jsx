import { motion } from "motion/react";
import React from "react";

export const SvgAnimation = () => {
  return (
    <div className="bada flex items-center justify-center rounded-3xl bg-neutral-950/60 md:py-8 lg:py-8 px-3 pt-18 pb-20 shadow-inner shadow-neutral-200 dark:bg-neutral-500/60">
      <motion.div
        whileHover="animate"
        className="group relative mx-auto flex w-full max-w-sm lg:min-w-lg md:min-w-lg items-center justify-between gap-78 rounded-xl border border-neutral-800 bg-black md:px-15 lg:px-15 mx-4 py-10 shadow-2xs shadow-inner shadow-neutral-200/70 dark:shadow-neutral-700"
      >
        {/* Left: Labels */}
        <div className="z-10 flex h-28 shrink-0 flex-col justify-between text-xs font-medium text-neutral-400 select-none pl-3 lg:pl-0 md:pl-0">
          <span className="flex h-5 items-center">
            <span className="sm:hidden">S. P</span>
            <span className="hidden sm:inline">Summarizer Pro</span>
          </span>
          <span className="flex h-5 items-center">
            <span className="sm:hidden">D. C</span>
            <span className="hidden sm:inline">Div Centerer</span>
          </span>
          <span className="flex h-5 items-center">
            <span className="sm:hidden">J. I</span>
            <span className="hidden sm:inline">Junior Intern</span>
          </span>
        </div>
        {/* Center: Circuit Tracks */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center pl-4 md:pl-15 lg:pl-15">
          <div className="relative h-28 w-[280px]">
            <TopSVG className="absolute top-2.5 left-4 w-full pr-3 md:pr-0 lg:pr-0" />
            <MiddleSVG className="absolute top-1/2 w-full -translate-y-1/2 pl-3 md:pl-0 lg:pl-0" />
            <BottomSVG className="absolute bottom-2 w-full pl-3 md:pl-0 lg:pl-0" />
          </div>
        </div>
        <div className="relative right-13 z-10 flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-neutral-800 p-px shadow-lg">
          <div className="absolute inset-0 h-full w-full scale-[1.6] animate-spin [background-image:conic-gradient(at_center,transparent,rgba(59,130,246,0.9)_20%,transparent_30%)] [animation-duration:3s]" />
          <div className="absolute inset-0 h-full w-full scale-[1.6] animate-spin [background-image:conic-gradient(at_center,transparent,rgba(239,68,68,0.9)_20%,transparent_30%)] [animation-delay:1.5s] [animation-duration:3s]" />

          <div className="relative z-20 flex size-full items-center justify-center rounded-[11px] bg-neutral-950">
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
      <line x1="0.5" y1="1" x2="311.5" y2="1" stroke="var(--color-neutral-300)" strokeLinecap="round" />
      <line x1="311.5" y1="1" x2="311.5" y2="32" stroke="var(--color-neutral-300)" strokeLinecap="round" />

      <line x1="0.5" y1="1" x2="311.5" y2="1" stroke="url(#line-one-gradient)" strokeLinecap="round" />
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
      <line x1="0.5" y1="1" x2="322.5" y2="1" stroke="var(--color-neutral-300)" strokeLinecap="round" />
      <line x1="0.5" y1="1" x2="322.5" y2="1" stroke="url(#line-two-gradient)" strokeLinecap="round" />
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

      <line x1="325.5" y1="31" x2="325.5" y2="1" stroke="var(--color-neutral-300)" strokeLinecap="round" />
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
      className="size-4 text-neutral-500"
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
