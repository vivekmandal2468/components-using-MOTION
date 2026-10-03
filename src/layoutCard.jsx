import React, { useEffect, useRef, useState } from "react";
import { cn } from "./lib/utils";
import { Link } from "react-router-dom";
import {  LinkIcon } from "lucide-react";
import { motion } from "motion/react";

// const useOutsideClick = ()=>{
//   const ref = useRef(null);

//   useEffect(()=>{
//     const HandleClick = ()=>{
//       if (ref.current && !current.contains(Event.target)) {
//         callback();
//       }
//     };
//     document.addEventListener("click" , HandleClick);
//     return ()=>{
//       document.removeEventListener("click", HandleClick)
//     },[callback];
//   })
// }

// Fixed outside click hook
const useOutsideClick = (callback) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    // Use mousedown to prevent instant bubbling close
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [callback]);

  return ref;
};


const LayoutCard = () => {

  const ref = useOutsideClick(()=>setCurrent(null));

    const [current, setCurrent] = useState(null);

  return (
    <div className={cn(" items-center justify-center h-dvh pt-5 relative bg-neutral-950/60 rounded-3xl ",
             "")}>

      {current && <motion.div 
        initial={{opacity: 0,}}
        animate={{opacity: 1}}
      className={cn("fixed z-10 h-dvh w-full inset-0 bg-black/50 backdrop-blur-sm cursor-pointer",
              "")}>
        
        </motion.div>}

      {current && (
        <motion.div
        layoutId={`card-${current.title}`}
        ref={ref} className="h-[520px] w-80 rounded-2xl border border-neutral-200 p-4 fixed inset-0 z-20 m-auto bg-white overflow-hidden">
          <motion.img  layoutId={`card-image-${current.title}`} src={current.src} alt="img" className=" aspect-square rounded-xl" />
          <div className="flex justify-between items-start py-4">
            <div className="flex flex-col items-start gap-2">
               <motion.h2 
               layoutId={`h2-${current.title}`} 
               className="font-bold text-lg text-black tracking-tight">{current.title}</motion.h2>
                <motion.p  layoutId={`p-${current.description}`}className="text-xs  text-[20px] text-neutral-500">{current.description}</motion.p>
            </div>
             <Link to={current.ctaLink} className={cn("flex items-center justify-center px-3 py-2 gap-1 rounded-full text-white text-xs ","bg-gradient-to-b from-neutral-800 to-neutral-900 border border-neutral-700/60 text-neutral-100",
          "shadow-[0_1px_1.5px_rgba(0,0,0,0.4),0_8px_24px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)]/70",
          "hover:border-neutral-600 hover:from-neutral-800 hover:to-neutral-850 active:scale-[0.98] transition-colors")}>
             <LinkIcon className="size-4" />
                more   
              </Link>
          </div>
          <motion.div 
            initial={{filter: 'blur(10px)', opacity: 0}}
            animate={{filter: 'blur(0px)', opacity: 1}}
            transition={{duration: 0.7}}
            className="h-40 overflow-auto text-black">
            {current.content()}
          </motion.div>
        </motion.div> )}



      <div className="max-w-md mx-auto flex flex-col gap-10 ">
        {cards.map((card, idx) => (
          <motion.button
            layoutId = {`card-${card.title}`}
            onClick={()=> setCurrent(card)}
            key={card.title}
            className="p-4 rounded-lg flex justify-between items-center bg-white border border-neutral-200 cursor-pointer h-20 relative"
          >
            <div className="flex gap-4 items-center  ">
              <motion.img
              layoutId={`card-image-${card.title}`}
                src={card.src}
                alt='img'
                className="aspect-square h-15 rounded-lg bg-black "
              />
              <div className="flex flex-col gap-2 items-start">
                <motion.h2 layoutId={`h2-${card.title}`} className="font-bold text-lg text-black tracking-tight">{card.title}</motion.h2>
                <motion.p layoutId={`p-${card.description}`} className="text-xs  text-[10px] text-neutral-500">{card.description}</motion.p>
              </div>
            </div>
              <div className={cn("px-3 py-1 rounded-full text-white text-xs ","bg-gradient-to-b from-neutral-800 to-neutral-900 border border-neutral-700/60 text-neutral-100",
          "shadow-[0_1px_1.5px_rgba(0,0,0,0.4),0_8px_24px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.1)]/70",
          "hover:border-neutral-600 hover:from-neutral-800 hover:to-neutral-850 active:scale-[0.98] transition-colors")}>
                {card.ctaText}
              </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default LayoutCard;




const cards = [
  {
    title: "Doraemon",
    description: "22nd-century cat-type robotic guardian",
    src: "doremon.png",
    
    ctaText: "View Profile",
    ctaLink: "https://en.wikipedia.org/wiki/Doraemon_(character)",
    content: () => {
      return (
        <p className="text-neutral-500 text-[10px]">
          Sent from the 22nd century by Sewashi to assist Nobita Nobi. Equipped with a 4D pocket full of futuristic gadgets, ears lost to robotic mice, and an undeniable obsession with Dorayaki.
        </p>
      );
    },
  },
  {
    title: "Nobita Nobi",
    description: "Kind-hearted fourth grader & sharpshooter",
    src: "nobita.png",
    ctaText: "View Profile",
    ctaLink: "https://en.wikipedia.org/wiki/Nobita_Nobi",
    content: () => {
      return (
        <p className="text-neutral-500 text-[10px]">
          Known for laziness, poor test scores, and afternoon naps, but possesses elite sharpshooting skills and string figure talent. His empathy and moral compass guide every major movie expedition.
        </p>
      );
    },
  },
  {
    title: "Shizuka Minamoto",
    description: "Smart, gentle neighborhood peer & violinist",
    src: "shizuka.png",
    ctaText: "View Profile",
    ctaLink: "https://en.wikipedia.org/wiki/Doraemon#Characters",
    content: () => {
      return (
        <p className="text-neutral-500 text-[10px]">
          Nobita's lifelong crush and future wife. Excels in academics, loves sweet potatoes in secret, frequently takes baths, and plays the violin with screeching dedication.
        </p>
      );
    },
  },
  {
    title: "Takeshi 'Gian' Goda",
    description: "The loud, muscle-bound powerhouse",
    src: "gian.png",
    ctaText: "View Profile",
    ctaLink: "https://en.wikipedia.org/wiki/Doraemon#Characters",
    content: () => {
      return (
        <p className="text-neutral-500 text-[10px]">
          Infamous for neighborhood bullying and devastating singing recitals that cause actual physical pain. Despite his short temper, he shows fierce loyalty and bravery whenever his friends face real danger.
        </p>
      );
    },
  },
  {
    title: "Suneo Honekawa",
    description: "Wealthy braggart with technical cunning",
    src: "suneo.png",
    ctaText: "View Profile",
    ctaLink: "https://en.wikipedia.org/wiki/Doraemon#Characters",
    content: () => {
      return (
        <p className="text-neutral-500 text-[10px]">
          Flaunts the latest imported toys, radio-controlled cars, and vacations to his peers. Often sides with Gian to avoid beatings, but demonstrates sharp mechanical knowledge and artistic skill.
        </p>
      );
    },
  },
];