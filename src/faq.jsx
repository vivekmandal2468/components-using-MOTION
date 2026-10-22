import React, { useState } from "react";
import { cn } from "./lib/utils";
// import { IconMinus, IconPlus } from "@tabler/icons-react";
import { easeInOut, easeOut, motion } from "motion/react";
import { LucideCircleQuestionMark, Minus, Plus } from "lucide-react";

export const Faq = () => {
  const questions = [
 {
  question: "Who is Prime Dev?",
  answer:
    "I'm a curious developer drawn to web visuals. I love crafting beautiful, thoughtful components that feel as good as they look.",
},
{
  question: "What excites me?",
  answer:
    "Meeting new people, making friends across the globe, and building things that earn their keep.",
},
{
  question: "My biggest achievement to date",
  answer:
    "In my second year of college, I earned over $1,000 from crypto, my first real lesson in turning curiosity into income.",
},
{
  question: "Some of my hobbies",
  answer:
    "I love greenery and nature, which is why I tend a small terrace garden as a part-time gardener.",
},
  ];
  return (
    <section className="py-3 md:py-6 lg:py-12 relative overflow-hidden lg:px-24 px-4 pt-8 dark:border-t rounded-3xl shadow-inner shadow-neutral-200 lg:border-hidden dark:bg-neutral-950/60 bg-neutral-950/60">
        {/* <LucideCircleQuestionMark size={20} className=""/> */}
        <h2 className="my-7 md:my-14 px-0 text-xl font-bold pl-3 pb-3">Frequently Asked Questions</h2>
        
        <div className={cn("flex flex-col gap-4 ",
          
        )}>
          {questions.map((question, index) => (
            <Question
              key={index}
              question={question.question}
              answer={question.answer}
            />
          ))}
        </div>
    </section>
  );
};

const Question = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("w-full rounded-2xl overflow-hidden p-3 md:p-6 px-5 bg-neutral-200", 
       "dark:bg-gradient-to-b dark:from-neutral-800 dark:to-neutral-900 border dark:border-neutral-700/60 dark:text-neutral-100 ",
          "shadow-[0_1px_2px_rgba(0,0,0,0.4),0_8px_24px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)]",
          "dark:hover:border-neutral-600 dark:hover:from-neutral-800 dark:hover:to-neutral-850 transition-colors"
    )}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left outline-none cursor-pointer"
      >
        <p className="text-sm md:text-lg font-semibold  font-display text-neutral-900 dark:text-neutral-100">
          {question}
        </p>
        <div className="size-6 shrink-0 rounded-full bg-black dark:bg-white flex items-center justify-center relative">
          <Plus
            className={cn(
              "size-4 text-white dark:text-black absolute inset-0 m-auto transition-all duration-200",
              open && "scale-0 rotate-90"
            )}
          />
          <Minus
            className={cn(
              "size-4 text-white dark:text-black absolute inset-0 m-auto scale-0 -rotate-90 transition-all duration-200",
              open && "scale-100 rotate-0"
            )}
          />
        </div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 , }}
        transition={{ duration: 0.2 , ease: easeInOut}}

        className="overflow-hidden"
      >
        <p className="text-left mt-4 text-neutral-600 dark:text-neutral-400 text-sm font-light">
          {answer}
        </p>
      </motion.div>
    </div>
  );
};