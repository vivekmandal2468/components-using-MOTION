// "use client";

// import React, { useMemo } from "react";
// import { motion } from "motion/react";
// import { cn } from "./lib/utils";

// function TextShimmerComponent({
//   children,
//   as: Component = "p",
//   className,
//   duration = 2,
//   spread = 2,
//   baseColor,
//   shimmerColor,
//   style,
// }) {
//   const MotionComponent = motion.create(Component);

//   const dynamicSpread = useMemo(() => {
//     return children.length * spread;
//   }, [children, spread]);

//   return (
//     <MotionComponent
//       className={cn(
//         "relative inline-block bg-size-[250%_100%,auto] bg-clip-text",
//         "[-webkit-text-fill-color:transparent]",
//         "[background-repeat:no-repeat,padding-box] [--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]",
//         className,
//       )}
//       initial={{ backgroundPosition: "100% center" }}
//       animate={{ backgroundPosition: "0% center" }}
//       transition={{
//         repeat: Infinity,
//         duration,
//         ease: "linear",
//       }}
//       style={{
//         ...style,
//         "--spread": `${dynamicSpread}px`,
//         "--base-color": baseColor ?? "color-mix(in oklab, currentColor 55%, transparent)",
//         "--base-gradient-color": shimmerColor ?? "currentColor",
//         backgroundImage: `var(--bg), linear-gradient(var(--base-color), var(--base-color))`,
//       }}
//     >
//       {children}
//     </MotionComponent>
//   );
// }

// export const TextShimmer = React.memo(TextShimmerComponent);






// ---------------------------------------------------------------------------------------------------------------------



import { cn } from "./lib/utils";

const WAVE_BAR_HEIGHTS = ["50%", "75%", "100%", "75%", "50%"];

function Wave({ className, ...props }) {
  return (
    <>
      <style>{`
        @keyframes loading-ui-wave {
          0%,
          100% {
            transform: scaleY(1);
          }

          50% {
            transform: scaleY(0.6);
          }
        }
      `}</style>
      <span
        role="status"
        className={cn("inline-flex items-center gap-[2.5%]", className)}
        {...props}
      >
        {WAVE_BAR_HEIGHTS.map((height, index) => (
          <span
            key={index}
            aria-hidden="true"
            className="inline-block rounded-full bg-current"
            style={{
              width: "12.5%",
              height,
              animation: "loading-ui-wave var(--duration, 1s) ease-in-out infinite",
              animationDelay: `calc(var(--delay, 100ms) * ${index})`,
            }}
          />
        ))}
        <span className="sr-only">Loading</span>
      </span>
    </>
  );
}

export { Wave };



// to use this just paste this - 


      {/* <Wave className="h-14 w-28 text-[#495057] [--duration:700ms]"  />  */}
