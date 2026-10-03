// import React from "react";
// import { useAnimate, motion } from "motion/react";
// import { cn } from "./lib/utils";

// const SequenceAnimate = () => {
//   const [scope, animate] = useAnimate();

//   const sequence = [
//     // 1. Show & scale loader, hide text
//     [".loader", { opacity: [0, 1], scale: [0.5, 1] }, { duration: 0.2 }],
//     [".text", { opacity: 0, scale: 0.8 }, { duration: 0.2, at: "<" }],

//     // 2. Spin loader while shrinking button into a circle
//     [".loader", { rotate: 360 * 2 }, { duration: 1.2, ease: "linear" }],
//     ["button", { width: "5rem", borderRadius: "9999px" }, { duration: 0.4, at: "<" }],

//     // 3. Hide loader
//     [".loader", { opacity: 0, scale: 0 }, { duration: 0.2 }],

//     // 4. Button pulse & color switch
//     [
//       "button",
//       {
//         scale: [1, 1.15, 1],
//         backgroundImage: "linear-gradient(to right, #10b981, #059669)",
//       },
//       { duration: 0.4 },
//     ],

//     // 5. Reveal checkmark and draw path
//     [".check-icon", { opacity: 1 }, { duration: 0.1, at: "-0.2" }],
//     [".check-icon path", { pathLength: 1 }, { duration: 0.3, ease: "easeOut" }],
//   ];

//   const startAnimating = () => {
//     animate(sequence);
//   };

//   return (
//     <div
//       ref={scope}
//       className="relative w-[30rem] h-20 flex items-center justify-center"
//     >
//       <motion.button
//         onClick={startAnimating}
//         className={cn(
//           "relative h-20 w-[30rem] rounded-2xl flex items-center justify-center text-white font-semibold text-lg cursor-pointer overflow-hidden shadow-xl",
//           "bg-gradient-to-r from-purple-500 via-violet-600 to-indigo-500"
//         )}
//       >
//         {/* Button Text */}
//         <span className="text">Submit Order</span>

//         {/* Loader Icon */}
//         <span className="loader absolute size-6 border-2 border-white/30 border-t-white rounded-full opacity-0 pointer-events-none" />
//       </motion.button>

//       {/* Success Checkmark Icon */}
//       <motion.svg
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="#FFFFFF"
//         strokeWidth={3}
//         className="check-icon h-8 w-8 absolute inset-0 m-auto z-50 pointer-events-none"
//         style={{ opacity: 0 }}
//       >
//         <motion.path
//           initial={{ pathLength: 0 }}
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M5 13l4 4L19 7"
//         />
//       </motion.svg>
//     </div>
//   );
// };

// export default SequenceAnimate;


// --------------------------------------------------------------------------------------------------------------------------

import React, { useState } from "react";
import { useAnimate, motion } from "motion/react";
import { cn } from "./lib/utils";

const SequenceAnimate = () => {
  const [scope, animate] = useAnimate();
  const [isDone, setIsDone] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const startAnimating = async () => {
    if (isProcessing) return;
    setIsProcessing(true);

    // If previously completed, quickly reset before starting
    if (isDone) {
      await animate([
        [".check-icon", { opacity: 0 }, { duration: 0.1 }],
        [".check-icon path", { pathLength: 0 }, { duration: 0.1 }],
        [
          "button",
          {
            width: "20rem",
            borderRadius: "16px",
            backgroundColor: "#171717",
            backgroundImage: "none",
            scale: 1,
          },
          { duration: 0.2 },
        ],
        [".button-text", { opacity: 1, scale: 1 }, { duration: 0.2 }],
      ]);
      setIsDone(false);
    }

    const sequence = [
      // 1. Fade out label with spring scale down
      [
        ".button-text",
        { opacity: 0, scale: 0.8 },
        { duration: 0.2, ease: "easeInOut" },
      ],

      // 2. Collapse button to circle using spring physics
      [
        "button",
        {
          width: "4rem",
          borderRadius: "9999px",
        },
        {
          type: "spring",
          stiffness: 260,
          damping: 24,
          at: "<0.05",
        },
      ],

      // 3. Reveal and spin spinner
      [
        ".loader",
        { opacity: 1, scale: 1 },
        { duration: 0.2, ease: "easeOut", at: "<0.1" },
      ],
      [
        ".loader",
        { rotate: 360 * 3 },
        { duration: 1.4, ease: [0.4, 0, 0.2, 1] },
      ],

      // 4. Vanish spinner, punch button with bounce & switch to success state
      [
        ".loader",
        { opacity: 0, scale: 0.6 },
        { duration: 0.15, ease: "easeIn" },
      ],
      [
        "button",
        {
          scale: [1, 1.12, 1],
          backgroundColor: "#059669", // Emerald-600
        },
        {
          type: "spring",
          stiffness: 400,
          damping: 18,
          at: "<",
        },
      ],

      // 5. Pop checkmark and draw the path
      [
        ".check-icon",
        { opacity: 1, scale: [0.7, 1] },
        { type: "spring", stiffness: 350, damping: 20, at: "-0.1" },
      ],
      [
        ".check-icon path",
        { pathLength: 1 },
        { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
      ],
    ];

    await animate(sequence);
    setIsProcessing(false);
    setIsDone(true);
  };

  return (
    <div
      ref={scope}
      className="relative flex items-center justify-center p-8 bg-neutral-950/60 rounded-3xl"
    >
      <motion.button
        onClick={startAnimating}
        disabled={isProcessing}
        style={{ width: "20rem" }}
        className={cn(
          "relative h-16 rounded-2xl flex items-center justify-center font-medium text-sm tracking-wide cursor-pointer overflow-hidden",
          "bg-gradient-to-b from-neutral-800 to-neutral-900 border border-neutral-700/60 text-neutral-100",
          "shadow-[0_1px_2px_rgba(0,0,0,0.4),0_8px_24px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)]",
          "hover:border-neutral-600 hover:from-neutral-800 hover:to-neutral-850 active:scale-[0.98] transition-colors"
        )}
      >
        {/* Label */}
        <span className="button-text font-semibold flex items-center gap-2 select-none">
          Complete Payment
        </span>

        {/* Minimal High-Tech Spinner */}
        <span className="loader absolute size-6 rounded-full border-2 border-neutral-500/20 border-t-white opacity-0 pointer-events-none" />

        {/* Success Checkmark Icon */}
        <motion.svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="#FFFFFF"
          strokeWidth={2.75}
          className="check-icon size-6 absolute inset-0 m-auto pointer-events-none opacity-0"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </motion.svg>
      </motion.button>
    </div>
  );
};

export default SequenceAnimate;