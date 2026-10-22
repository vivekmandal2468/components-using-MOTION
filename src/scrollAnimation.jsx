import { useRef } from "react";
import { SparklesIcon, Mic2Icon, Music4Icon, CrosshairIcon, CatIcon } from "lucide-react";
import { useMotionTemplate, useScroll, useTransform } from "motion/react";
import { motion } from "motion/react";

const ScrollAnimation = ({ scrollContainerRef }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["#03045e", "#0077b6", "#00b4d8", "#90e0ef", "#caf0f8"],
  );

  return (
    <motion.div
      ref={containerRef}
      style={{ backgroundColor }}
      className="flex items-center justify-center text-center"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-40 bg-transparent py-20">
        {features.map((feature) => (
          <Card key={feature.title} feature={feature} scrollContainerRef={scrollContainerRef} />
        ))}
      </div>
    </motion.div>
  );
};
export default ScrollAnimation;

const Card = ({ feature, scrollContainerRef }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    target: ref,
    offset: ["start end", "end start"],
  });

  //  [keyframes], [value]
 const translateContent = useTransform(scrollYProgress, [0, 1], [80, -80]);
const blur = useTransform(scrollYProgress, [0.5, 1], [0, 4]);
const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <div ref={ref} key={feature.title} className="grid grid-cols-2 items-center justify-between gap-20">
      <motion.div
        style={{ filter: useMotionTemplate`blur(${blur}px)`, scale }}
        className="flex flex-col items-start gap-2"
      >
        {feature.icons}
        <h2 className="text-4xl font-bold tracking-tight text-black">{feature.title}</h2>
        <p className="text-start text-xs text-neutral-500">{feature.description}</p>
      </motion.div>
      <motion.div
        style={{ y: translateContent, opacity: opacityContent }}
        className="w-fit  rounded-3xl border border-white/30 bg-white/60 p-4 shadow-xl backdrop-blur-md transition-transform duration-500 hover:scale-105"
      >
        {feature.content}
      </motion.div>
    </div>
  );
};

const features = [
  {
    icons: <CatIcon className="size-5 text-sky-500" />,
    title: "Doraemon",
    description:
      "Equipped with a 4D dimensional pocket packed with 22nd-century gadgets to bail out friends from everyday trouble.",
    content: <img src="doremon.png" alt="Doraemon" className="h-[300px] w-[300px] rounded-lg object-cover" />,
  },
  {
    icons: <CrosshairIcon className="size-5 text-amber-500" />,
    title: "Nobita Nobi",
    description:
      "An underdog with poor luck and lazy habits, but possesses world-class sharpshooting skills and string-figure mastery.",
    content: (
      <div>
        <img src="nobita.png" alt="Nobita" className="h-[300px] w-[300px] rounded-lg object-cover" />
      </div>
    ),
  },
  {
    icons: <Music4Icon className="size-5 text-pink-500" />,
    title: "Shizuka Minamoto",
    description:
      "Kind, conscientious, and hardworking neighborhood friend who loves practicing violin and enjoying sweet potatoes in secret.",
    content: (
      <div>
        <img src="shizuka.png" alt="Shizuka" className="h-[300px] w-[300px] rounded-lg object-cover" />
      </div>
    ),
  },
  {
    title: "Takeshi 'Gian' Goda",
    icons: <Mic2Icon className="size-5 text-orange-500" />,
    description:
      "The neighborhood powerhouse known for his dreaded open-air concerts, physical strength, and fierce loyalty in dire crises.",
    content: (
      <div>
        <img src="gian.png" alt="Gian" className="h-[300px] w-[300px] rounded-lg object-cover" />
      </div>
    ),
  },
  {
    icons: <SparklesIcon className="size-5 text-teal-500" />,
    title: "Suneo Honekawa",
    description:
      "Clever and trendsetting gadget collector who loves showing off imported toys, remote-control cars, and vacation retreats.",
    content: (
      <div>
        <img src="suneo.png" alt="Suneo" className="h-[300px] w-[300px] rounded-lg object-cover" />
      </div>
    ),
  },
];
