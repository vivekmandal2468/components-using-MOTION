import { stagger, useAnimate } from "motion/react";
import React from "react";
import { cn } from "./lib/utils";
import { LucideRepeat2 } from "lucide-react";
import { NavLink } from "react-router";

const AnimatedText = () => {
  const [scope, animate] = useAnimate();

  const text =
    "“You've gotta dance like there's nobody watching..., Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.”";

  const startAnimating = async () => {
    // 1. Instant rewind (0 sec) - Har click par pehle sab starting position pe jayenge
    await animate(
      ".word-span",
      { opacity: 0, filter: "blur(10px)", y: 10 },
      { duration: 0 },
    );

    // 2. Play (Staggered Reveal) - Fir ek-ek karke dobara aayenge
    animate(
      ".word-span",
      { opacity: 1, filter: "blur(0px)", y: 0 },
      { duration: 0.35, ease: "easeInOut", delay: stagger(0.04) },
    );
  };

  return (
    <div
      ref={scope}
      className="max-w-2xl mx-auto flex flex-col items-center gap-6 p-8"
    >
      {/* Trigger Button */}
      <button
        onClick={startAnimating}
        className={cn("bg-neutral-900 text-white dark:bg-white  px-5 py-2.5 rounded-lg text-sm font-semibold tracking-wide cursor-pointer active:scale-95 transition-transform",
          "bg-gradient-to-b from-neutral-800 to-neutral-900 border border-neutral-700/60 text-neutral-100",
          "shadow-[0_1px_2px_rgba(0,0,0,0.4),0_8px_24px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)]",
          "hover:border-neutral-600 hover:from-neutral-800 hover:to-neutral-850 active:scale-[0.98] transition-colors"
        )}
      >
        quotes
      </button>

      {/* Words Container */}
      <div
        className={cn(
          "text-neutral-900 dark:text-neutral-100 font-bold text-3xl md:text-4xl text-center leading-relaxed",
          "",
        )}
      >
        {text.split(" ").map((word, index) => (
          <span
            key={`${word}-${index}`}
            className={cn(
              "word-span inline-block opacity-0 blur-[10px] translate-y-2.5 mr-2 text-md tracking-tight",
              "bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 to-neutral-400 dark:from-neutral-100 dark:to-neutral-600",
            )}
          >
            {word}
          </span>
        ))}
      </div>

      <a
        href="/animatedText"
        className="p-2 rounded-lg hover:bg-neutral-200 inline-flex items-center justify-center cursor-pointer  active:scale-95 transition-transform"
      >
        <LucideRepeat2 className="size-5" />
      </a>
    </div>
  );
};

export default AnimatedText;
